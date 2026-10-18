import { SITE } from '@/config/site'

const ORGANIZATION_ID = `${SITE.domain}/#organization`
const WEBSITE_ID = `${SITE.domain}/#website`
const FOUNDER_ID = `${SITE.domain}/#ronaldo-domingues-filardo`
const PROFESSIONAL_SERVICE_ID = `${SITE.domain}/#professional-service`

export const SCHEMA_IDS = {
  organization: ORGANIZATION_ID,
  website: WEBSITE_ID,
  founder: FOUNDER_ID,
  professionalService: PROFESSIONAL_SERVICE_ID,
} as const

function organizationRef(): Record<string, unknown> {
  return { '@type': 'Organization', '@id': ORGANIZATION_ID }
}

function publisherRef(): Record<string, unknown> {
  return {
    ...organizationRef(),
    name: SITE.name,
    logo: { '@type': 'ImageObject', url: SITE.logo },
  }
}

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORGANIZATION_ID,
    name: SITE.name,
    url: SITE.domain,
    logo: SITE.logo,
    description:
      'Softhouse especializada em sistemas sob medida, integrações via API (Asaas, bancos, ERPs) e modernização de legados. Metodologia proprietária STE-DEV baseada em ASD-STE100.',
    foundingDate: SITE.foundingDate,
    founder: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: SITE.founder.name,
      jobTitle: SITE.founder.jobTitle,
      description: SITE.founder.description,
    },
    knowsAbout: [...SITE.knowsAbout],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    sameAs: [...SITE.sameAs],
    areaServed: 'BR',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'technical sales',
        telephone: SITE.whatsapp.international,
        email: SITE.email,
        areaServed: 'BR',
        availableLanguage: ['Portuguese', 'English'],
      },
    ],
  }
}

export function buildWebSiteSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    name: SITE.name,
    url: SITE.domain,
    description: SITE.shortDescription,
    inLanguage: SITE.lang,
    publisher: organizationRef(),
  }
}

export function buildProfessionalServiceSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': PROFESSIONAL_SERVICE_ID,
    name: `${SITE.name} — Serviços de Engenharia Preventiva`,
    url: SITE.domain,
    areaServed: 'BR',
    provider: organizationRef(),
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços da Omni Sistemas',
      itemListElement: [
        {
          '@type': 'Offer',
          areaServed: 'BR',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento Sob Medida',
            description:
              'Sistemas web e plataformas criadas especificamente para o modelo de negócio do cliente, com integrações e conformidade LGPD desde o início.',
          },
        },
        {
          '@type': 'Offer',
          areaServed: 'BR',
          itemOffered: {
            '@type': 'Service',
            name: 'Integrações e Automações de API',
            description:
              'Conexão com o Asaas, gateways, bancos, ERPs e ferramentas externas para automatizar cobranças, notificações e conciliação.',
          },
        },
        {
          '@type': 'Offer',
          areaServed: 'BR',
          itemOffered: {
            '@type': 'Service',
            name: 'Diagnóstico e Modernização de Legados',
            description:
              'Atualização de sistemas antigos sem interromper a operação diária, com migração segura e acompanhamento contínuo.',
          },
        },
        {
          '@type': 'Offer',
          areaServed: 'BR',
          itemOffered: {
            '@type': 'Service',
            name: 'Consultoria e Imersão In Loco',
            description:
              'Atendimento consultivo presencial na sede da empresa do cliente em todo o Brasil para diagnóstico de arquitetura e alinhamento executivo.',
          },
        },
      ],
    },
  }
}

export function buildWebPageSchema(input?: {
  readonly title?: string
  readonly description?: string
  readonly path?: string
}): Record<string, unknown> {
  const path = input?.path ?? '/'
  const url = path === '/' ? SITE.domain : `${SITE.domain}${path}`
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': url,
    name: input?.title ?? `${SITE.name} — ${SITE.tagline}`,
    description: input?.description ?? SITE.shortDescription,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    isPartOf: {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
    },
    publisher: publisherRef(),
    inLanguage: SITE.lang,
  }
}

export function buildFaqPageSchema(
  items: readonly { readonly question: string; readonly answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildArticleSchema(input: {
  readonly title: string
  readonly description: string
  readonly slug: string
  readonly datePublished: string
  readonly dateModified?: string
}): Record<string, unknown> {
  const url = `${SITE.domain}/artigos/${input.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    '@id': url,
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Person',
      '@id': FOUNDER_ID,
      name: SITE.founder.name,
      jobTitle: SITE.founder.jobTitle,
      url: SITE.domain,
      worksFor: organizationRef(),
    },
    publisher: publisherRef(),
    inLanguage: SITE.lang,
  }
}

export function buildBreadcrumbSchema(
  items: readonly { readonly name: string; readonly path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  }
}
