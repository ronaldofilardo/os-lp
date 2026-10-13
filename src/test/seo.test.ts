import { describe, it, expect } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { SITE } from '@/config/site'
import { FAQ_TECHNICAL_DB, FAQ_COMMERCIAL_DB, PROJECTS_DB } from '@/data'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import {
  buildOrganizationSchema,
  buildProfessionalServiceSchema,
  buildWebPageSchema,
  buildWebSiteSchema,
  buildFaqPageSchema,
  buildArticleSchema,
  buildBreadcrumbSchema,
  SCHEMA_IDS,
} from '@/lib/schemas'
import { getAllKnowledgeDocs, getKnowledgeDocBySlug } from '@/lib/knowledge'
import robots from '../../app/robots'
import sitemap from '../../app/sitemap'

const ROOT = path.resolve(__dirname, '../..')
const PUBLIC_DIR = path.join(ROOT, 'public')
const ARTICLES_DIR = path.join(ROOT, 'content/artigos')

const MAX_TITLE = 60
const MAX_DESCRIPTION = 160
const MIN_SITE_DESCRIPTION = 150
const MAX_SITE_DESCRIPTION = 158

function readPublicFile(name: string): Buffer {
  return fs.readFileSync(path.join(PUBLIC_DIR, name))
}

function articleFiles(): string[] {
  return fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith('.mdx'))
}

function parseSchema(data: Record<string, unknown>): Record<string, unknown> {
  const json = JSON.stringify(data)
  return JSON.parse(json) as Record<string, unknown>
}

describe('brand assets (public/)', () => {
  it.each(['logo.png', 'og-image.png', 'favicon.ico', 'apple-touch-icon.png'])(
    'exists physically: %s',
    (asset) => {
      expect(fs.existsSync(path.join(PUBLIC_DIR, asset))).toBe(true)
      expect(readPublicFile(asset).length).toBeGreaterThan(0)
    }
  )

  it('og-image.png has the required 1200x630 dimensions', () => {
    const png = readPublicFile('og-image.png')
    const width = png.readUInt32BE(16)
    const height = png.readUInt32BE(20)
    expect(width).toBe(1200)
    expect(height).toBe(630)
  })

  it('favicon.ico is a valid icon container with at least one entry', () => {
    const ico = readPublicFile('favicon.ico')
    expect(ico.readUInt16LE(0)).toBe(0)
    expect(ico.readUInt16LE(2)).toBe(1)
    expect(ico.readUInt16LE(4)).toBeGreaterThan(0)
  })
})

describe('SITE config', () => {
  it('keeps the meta description inside the Google display window', () => {
    expect(SITE.description.length).toBeGreaterThanOrEqual(MIN_SITE_DESCRIPTION)
    expect(SITE.description.length).toBeLessThanOrEqual(MAX_SITE_DESCRIPTION)
  })

  it('exposes the official WhatsApp contact', () => {
    expect(SITE.whatsapp.display).toBe('(41) 99241-5220')
    expect(SITE.whatsapp.url).toBe('https://wa.me/5541992415220')
    expect(SITE.whatsapp.international).toBe('+5541992415220')
  })

  it('keeps sameAs empty until social channels are published', () => {
    expect(SITE.sameAs).toHaveLength(0)
  })
})

describe('JSON-LD schemas', () => {
  it('Organization serializes to valid JSON with WhatsApp and BR coverage', () => {
    const schema = parseSchema(buildOrganizationSchema())
    expect(schema['@type']).toBe('Organization')
    expect(schema.areaServed).toBe('BR')
    const contactPoints = schema.contactPoint as Record<string, unknown>[]
    expect(contactPoints[0]?.telephone).toBe(SITE.whatsapp.international)
  })

  it('Organization logo points to an existing local asset', () => {
    const schema = parseSchema(buildOrganizationSchema())
    expect(String(schema.logo)).toContain('/logo.png')
    expect(fs.existsSync(path.join(PUBLIC_DIR, 'logo.png'))).toBe(true)
  })

  it('ProfessionalService declares areaServed BR', () => {
    const schema = parseSchema(buildProfessionalServiceSchema())
    expect(schema.areaServed).toBe('BR')
  })

  it('every builder round-trips through JSON', () => {
    const faq = buildFaqPageSchema([{ question: 'P?', answer: 'A.' }])
    const article = buildArticleSchema({
      title: 'T',
      description: 'D',
      slug: 's',
      datePublished: '2026-01-01',
    })
    const crumb = buildBreadcrumbSchema([{ name: 'Home', path: '/' }])
    for (const schema of [
      buildWebPageSchema(),
      faq,
      article,
      crumb,
      buildOrganizationSchema(),
      buildProfessionalServiceSchema(),
    ]) {
      expect(() => JSON.parse(JSON.stringify(schema))).not.toThrow()
    }
  })

  it('FAQ schema is injected at the top of the home page (critical-first)', () => {
    const pageSource = fs.readFileSync(path.join(ROOT, 'app/page.tsx'), 'utf8')
    const faqInjection = pageSource.indexOf('<JsonLd data={buildFaqPageSchema')
    const firstMarkup = pageSource.indexOf('<Header')
    expect(faqInjection).toBeGreaterThan(-1)
    expect(firstMarkup).toBeGreaterThan(-1)
    expect(faqInjection).toBeLessThan(firstMarkup)
  })
})

describe('article frontmatter', () => {
  it.each(articleFiles())('%s keeps title and description within limits', (file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8')
    const { data } = matter(raw)
    expect(typeof data.title).toBe('string')
    expect(typeof data.description).toBe('string')
    expect((data.title as string).length).toBeLessThanOrEqual(MAX_TITLE)
    expect((data.description as string).length).toBeLessThanOrEqual(MAX_DESCRIPTION)
  })

  it.each(articleFiles())('%s has a valid publish date and slug', (file) => {
    const raw = fs.readFileSync(path.join(ARTICLES_DIR, file), 'utf8')
    const { data } = matter(raw)
    expect(Number.isNaN(Date.parse(String(data.datePublished)))).toBe(false)
    expect(String(data.slug).length).toBeGreaterThan(0)
  })
})

describe('no third-party hotlinks in source', () => {
  const HOSTS = ['lh3.googleusercontent.com', 'images.unsplash.com', 'i.imgur.com', 'pbs.twimg.com']

  function collectSourceFiles(dir: string, acc: string[] = []): string[] {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name)
      if (entry.isDirectory()) collectSourceFiles(full, acc)
      else if (/\.(ts|tsx)$/.test(entry.name) && !entry.name.endsWith('.test.ts') && !entry.name.endsWith('.test.tsx')) acc.push(full)
    }
    return acc
  }

  it('does not reference external image hosts', () => {
    for (const file of collectSourceFiles(path.join(ROOT, 'src'))) {
      const source = fs.readFileSync(file, 'utf8')
      for (const host of HOSTS) {
        expect(source.includes(host), `${path.relative(ROOT, file)} references ${host}`).toBe(false)
      }
    }
  })
})

describe('navigation anchors', () => {
  function sectionSources(): string {
    const dir = path.join(ROOT, 'src/common')
    return fs
      .readdirSync(dir)
      .filter((f) => f.endsWith('.tsx') && !f.endsWith('.test.tsx'))
      .map((f) => fs.readFileSync(path.join(dir, f), 'utf8'))
      .join('\n')
  }

  it('defines id="sobre" for the footer about link', () => {
    expect(sectionSources()).toContain('id="sobre"')
  })
})

describe('P1 — icon hygiene for search crawlers', () => {
  function iconSpans(): { file: string; tag: string }[] {
    const found: { file: string; tag: string }[] = []
    const roots = [path.join(ROOT, 'src')]
    for (const rootDir of roots) {
      const stack = [rootDir]
      while (stack.length > 0) {
        const dir = stack.pop() as string
        for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
          const full = path.join(dir, entry.name)
          if (entry.isDirectory()) stack.push(full)
          else if (entry.name.endsWith('.tsx') && !entry.name.endsWith('.test.tsx')) {
            const source = fs.readFileSync(full, 'utf8')
            for (const match of source.matchAll(/<span\s[^>]*material-symbols-outlined[^>]*>/g)) {
              found.push({ file: path.relative(ROOT, full), tag: match[0] })
            }
          }
        }
      }
    }
    return found
  }

  it('every Material Symbols span is hidden from assistive tech and translators', () => {
    const spans = iconSpans()
    expect(spans.length).toBeGreaterThan(0)
    for (const { file, tag } of spans) {
      expect(tag.includes('aria-hidden="true"'), `${file}: ${tag}`).toBe(true)
      expect(tag.includes('translate="no"'), `${file}: ${tag}`).toBe(true)
    }
  })
})

describe('P1 — AEO', () => {
  it('every FAQ answer is a direct answer of 40 to 50 words', () => {
    for (const item of [...FAQ_TECHNICAL_DB, ...FAQ_COMMERCIAL_DB]) {
      const words = item.answer.trim().split(/\s+/).length
      expect(words, `"${item.question}" has ${words} words`).toBeGreaterThanOrEqual(40)
      expect(words, `"${item.question}" has ${words} words`).toBeLessThanOrEqual(50)
    }
  })

  it('FAQ questions are wrapped in h3 inside summary', () => {
    const faqSource = fs.readFileSync(path.join(ROOT, 'src/common/FAQSection.tsx'), 'utf8')
    expect(faqSource).toContain('<summary')
    expect(faqSource).toMatch(/<summary[^>]*>[\s\S]*?<h3[^>]*>\{item\.question\}<\/h3>/)
  })

  it('renders a direct-answer block at the top of the methodology page', () => {
    const directAnswer = fs.readFileSync(path.join(ROOT, 'src/common/DirectAnswer.tsx'), 'utf8')
    expect(directAnswer).toContain('DIRECT_ANSWER.question')
    expect(directAnswer).toContain('DIRECT_ANSWER.answer')
    const pageSource = fs.readFileSync(path.join(ROOT, 'app/metodologia/page.tsx'), 'utf8')
    expect(pageSource.indexOf('<DirectAnswer')).toBeLessThan(pageSource.indexOf('<MethodologySection'))
  })
})

describe('P1 — AIO', () => {
  it('benefits strip uses a pure semantic list', () => {
    const source =
      fs.readFileSync(path.join(ROOT, 'src/common/BenefitsStrip.tsx'), 'utf8') +
      fs.readFileSync(path.join(ROOT, 'src/common/BenefitsCarousel.tsx'), 'utf8')
    expect(source).not.toContain('AI Overview')
    expect(source).toContain('<ul')
    expect(source).toContain('<li')
  })
})

describe('P1 — headings', () => {
  it('H1 states the offer', () => {
    const hero = fs.readFileSync(path.join(ROOT, 'src/common/HeroSection.tsx'), 'utf8')
    expect(hero).toMatch(/<h1[^>]*>[\s\S]*?Sistemas Sob Medida/)
    expect(hero).toContain('Sistemas Sob Medida')
  })
})

describe('P1 — conversion (SXO)', () => {
  it('distributes WhatsApp micro-CTAs with the architect anchor', () => {
    const microCta = fs.readFileSync(path.join(ROOT, 'src/common/MicroCta.tsx'), 'utf8')
    expect(microCta).toContain('SITE.whatsapp.url')
    expect(microCta).toContain('Atendimento técnico direto pelo arquiteto responsável')
    const pageSource = fs.readFileSync(path.join(ROOT, 'app/page.tsx'), 'utf8')
    expect(pageSource.split('<MicroCta').length - 1).toBeGreaterThanOrEqual(3)
  })

  it('offers a direct WhatsApp button in the contact section', () => {
    const contact = fs.readFileSync(path.join(ROOT, 'src/common/ContactSection.tsx'), 'utf8')
    expect(contact).toContain('SITE.whatsapp.url')
    expect(contact).toContain('Atendimento direto com quem projeta')
  })
})

describe('Fase 3 — schema graph with canonical @ids', () => {
  it('Organization, WebSite and ProfessionalService share canonical @ids', () => {
    const organization = parseSchema(buildOrganizationSchema())
    const website = parseSchema(buildWebSiteSchema())
    const service = parseSchema(buildProfessionalServiceSchema())
    expect(organization['@id']).toBe(SCHEMA_IDS.organization)
    expect(website['@type']).toBe('WebSite')
    expect(website['@id']).toBe(SCHEMA_IDS.website)
    const publisher = website.publisher as Record<string, unknown>
    expect(publisher['@id']).toBe(SCHEMA_IDS.organization)
    expect(service['@id']).toBe(SCHEMA_IDS.professionalService)
    const provider = service.provider as Record<string, unknown>
    expect(provider['@id']).toBe(SCHEMA_IDS.organization)
  })

  it('every service Offer declares national coverage', () => {
    const service = parseSchema(buildProfessionalServiceSchema())
    const catalog = service.hasOfferCatalog as Record<string, unknown>
    const offers = catalog.itemListElement as Record<string, unknown>[]
    expect(offers.length).toBeGreaterThan(0)
    for (const offer of offers) {
      expect(offer.areaServed).toBe('BR')
    }
  })

  it('WebPage nodes are linked into the website graph', () => {
    const home = parseSchema(buildWebPageSchema())
    const knowledge = parseSchema(
      buildWebPageSchema({
        title: 'Metodologia STE-DEV',
        description: 'Os 4 pilares da metodologia.',
        path: '/conhecimento/2-metodologia-ste-dev',
      })
    )
    for (const page of [home, knowledge]) {
      const isPartOf = page.isPartOf as Record<string, unknown>
      expect(isPartOf['@id']).toBe(SCHEMA_IDS.website)
    }
    expect(String(knowledge['@id'])).toContain('/conhecimento/2-metodologia-ste-dev')
  })

  it('Article author is the founder Person linked to the organization', () => {
    const article = parseSchema(
      buildArticleSchema({
        title: 'T',
        description: 'D',
        slug: 's',
        datePublished: '2026-01-01',
      })
    )
    const author = article.author as Record<string, unknown>
    expect(author['@type']).toBe('Person')
    expect(author.name).toBe(SITE.founder.name)
    const worksFor = author.worksFor as Record<string, unknown>
    expect(worksFor['@id']).toBe(SCHEMA_IDS.organization)
  })

  it('layout injects the WebSite node', () => {
    const layout = fs.readFileSync(path.join(ROOT, 'app/layout.tsx'), 'utf8')
    expect(layout).toContain('buildWebSiteSchema')
  })
})

describe('Fase 3 — public knowledge base (/conhecimento)', () => {
  it('serves every content/conhecimento document with metadata within limits', () => {
    const docs = getAllKnowledgeDocs()
    expect(docs.length).toBeGreaterThanOrEqual(7)
    for (const doc of docs) {
      expect(doc.title.length).toBeLessThanOrEqual(MAX_TITLE)
      expect(doc.description.length).toBeLessThanOrEqual(MAX_DESCRIPTION)
      expect(doc.content.length).toBeGreaterThan(0)
    }
  })

  it('loads the consolidated knowledge-context document', () => {
    const doc = getKnowledgeDocBySlug('knowledge-context')
    expect(doc).not.toBeNull()
    expect(doc?.title).toContain('Contexto Consolidado')
  })

  it('rejects path traversal in knowledge slugs', () => {
    expect(getKnowledgeDocBySlug('../artigos/page')).toBeNull()
    expect(getKnowledgeDocBySlug('..\\windows')).toBeNull()
  })

  it('knowledge routes are static and emit schema plus breadcrumb', () => {
    const index = fs.readFileSync(path.join(ROOT, 'app/conhecimento/page.tsx'), 'utf8')
    const detail = fs.readFileSync(path.join(ROOT, 'app/conhecimento/[slug]/page.tsx'), 'utf8')
    expect(detail).toContain('generateStaticParams')
    expect(detail).toContain('buildWebPageSchema')
    expect(detail).toContain('buildBreadcrumbSchema')
    expect(index).toContain('buildWebPageSchema')
    expect(index).toContain('buildBreadcrumbSchema')
  })
})

describe('Fase 3 — robots and sitemap', () => {
  it('disallows the api directory for every crawler at runtime', () => {
    const result = robots()
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules]
    expect(rules.length).toBe(11)
    for (const rule of rules) {
      expect(rule.allow).toBe('/')
      expect(rule.disallow).toBe('/api/')
    }
    expect(result.sitemap).toBe(`${SITE.domain}/sitemap.xml`)
  })

  it('sitemap lists the knowledge base with real file mtimes', () => {
    const source = fs.readFileSync(path.join(ROOT, 'app/sitemap.ts'), 'utf8')
    expect(source).toContain('modifiedAt')
    expect(source).toContain('getKnowledgeMtime')
    const urls = sitemap().map((entry) => entry.url)
    expect(urls.some((url) => url === `${SITE.domain}/conhecimento`)).toBe(true)
    expect(urls.some((url) => url.includes('/conhecimento/knowledge-context'))).toBe(true)
    expect(urls.some((url) => url.includes('/conhecimento/2-metodologia-ste-dev'))).toBe(true)
  })
})

describe('Fase 3 — hero performance', () => {
  it('defers the 3D scene to idle time and disables it on mobile', () => {
    const hero = fs.readFileSync(path.join(ROOT, 'src/common/HeroVisual.tsx'), 'utf8')
    expect(hero).toContain('requestIdleCallback')
    expect(hero).toContain('(max-width: 767px)')
  })
})

describe('Fase 3 — llms manifests', () => {
  it('llms.txt links every public knowledge document with current titles', () => {
    const llms = readPublicFile('llms.txt').toString('utf8')
    expect(llms).toContain('https://omni-sistemas.com/conhecimento')
    expect(llms).toContain('O que é a Metodologia STE-DEV de Engenharia Preventiva')
    for (const doc of getAllKnowledgeDocs()) {
      expect(llms, `llms.txt must link ${doc.slug}`).toContain(`/conhecimento/${doc.slug}`)
    }
  })

  it('llms-full.txt consolidates the knowledge base section', () => {
    const full = readPublicFile('llms-full.txt').toString('utf8')
    expect(full).toContain('/conhecimento/knowledge-context')
    expect(full).toContain('Base de Conhecimento Pública')
  })
})

describe('Fase 5 — Omni Saúde (/omni-saude)', () => {
  it('sitemap lists the six public routes and keeps /cadastro out', () => {
    const urls = sitemap().map((entry) => entry.url)
    const routes = [
      '/omni-saude',
      '/omni-saude/para-voce',
      '/omni-saude/para-labs',
      '/omni-saude/medicos',
      '/omni-saude/seguranca',
      '/omni-saude/contato',
    ]
    for (const route of routes) {
      expect(urls, `sitemap must list ${route}`).toContain(`${SITE.domain}${route}`)
    }
    expect(urls.some((url) => url.includes('/omni-saude/cadastro'))).toBe(false)
  })

  it('every Omni Saúde page declares a canonical path', () => {
    const pages = [
      'page.tsx',
      'para-voce/page.tsx',
      'para-labs/page.tsx',
      'medicos/page.tsx',
      'seguranca/page.tsx',
      'contato/page.tsx',
    ]
    for (const page of pages) {
      const source = fs.readFileSync(path.join(ROOT, 'app/omni-saude', page), 'utf8')
      expect(source, `${page} must build metadata via omniPageSeo`).toContain('omniPageSeo')
    }
    const cadastro = fs.readFileSync(path.join(ROOT, 'app/omni-saude/cadastro/page.tsx'), 'utf8')
    expect(cadastro).toContain('canonical')
    const seo = omniPageSeo({ title: 'T', description: 'D', path: '/omni-saude/seguranca' })
    expect(seo.metadata.alternates?.canonical).toBe('/omni-saude/seguranca')
  })

  it('the cadastro shell opts out of indexing', () => {
    const source = fs.readFileSync(path.join(ROOT, 'app/omni-saude/cadastro/page.tsx'), 'utf8')
    expect(source).toContain('index: false')
    expect(source).toContain('follow: false')
  })

  it('the LP project card links internally while the app card links to the product', () => {
    const lp = PROJECTS_DB.find((row) => row.id === 'omni-saude-lp')
    const app = PROJECTS_DB.find((row) => row.id === 'omni-saude-app')
    expect(lp?.url).toBe('/omni-saude')
    expect(app?.url).toBe('https://saude.omni-sistemas.com')
  })
})

