import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/config/site'
import {
  Header,
  DirectAnswer,
  TechMarquee,
  StatsStrip,
  MethodologySection,
  AuditProcessSection,
  MicroCta,
  AuditTerminal,
  CodeComparison,
  ASDSTE100Section,
  ComplianceSection,
  FAQSection,
  Footer,
} from '@/common'
import { NAV_LINKS_METODOLOGIA, type NavLink } from '@/common/navLinks'
import { JsonLd } from '@/common/JsonLd'
import { FAQ_TECHNICAL_DB } from '@/data'
import {
  buildWebPageSchema,
  buildFaqPageSchema,
  buildBreadcrumbSchema,
} from '@/lib/schemas'

const TITLE = `Metodologia STE-DEV — ${SITE.name}`
const DESCRIPTION =
  'Framework STE-DEV: engenharia preventiva baseada na norma aeroespacial ASD-STE100, com módulos de menos de 100 linhas, auditoria em 4 etapas e matriz de conformidade para softwares de missão crítica.'

const CTA = {
  label: 'Falar sobre meu projeto',
  href: '/#contato',
  icon: 'chat',
} as const

const FOOTER_ANCHORS: readonly NavLink[] = [
  { href: '#metodologia', label: '// 01. Metodologia STE-DEV' },
  { href: '#auditoria-processo', label: '// 02. Processo de Auditoria' },
  { href: '#asd-ste100', label: '// 03. Norma ASD-STE100' },
  { href: '#conformidade', label: '// 04. Matriz de Conformidade' },
  { href: '/#projetos', label: '// 05. Projetos' },
] as const

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/metodologia' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.domain}/metodologia`,
    siteName: SITE.name,
    type: 'article',
    locale: 'pt_BR',
  },
}

export default function MetodologiaPage(): React.JSX.Element {
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans subpixel-antialiased dark">
      <JsonLd
        data={buildWebPageSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: '/metodologia',
        })}
      />
      <JsonLd data={buildFaqPageSchema(FAQ_TECHNICAL_DB)} />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Metodologia STE-DEV', path: '/metodologia' },
        ])}
      />
      <div className="scroll-progress" aria-hidden="true" />
      <Header links={NAV_LINKS_METODOLOGIA} cta={CTA} />
      <main>
        <section className="w-full pt-24 pb-space-md" id="topo">
          <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
            <nav aria-label="Breadcrumb" className="font-code-sm text-code-sm text-on-surface-variant mb-space-md">
              <Link href="/" className="hover:text-primary transition-colors">
                Omni Sistemas
              </Link>
              <span aria-hidden="true"> / </span>
              <span>Metodologia STE-DEV</span>
            </nav>
            <header className="max-w-3xl">
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                // Documentação Técnica STE-DEV
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight mt-space-xs">
                Metodologia STE-DEV
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                O framework de engenharia preventiva da Omni Sistemas, inspirado na norma
                aeroespacial ASD-STE100. Aqui estão os pilares, o protocolo de auditoria e a
                matriz de conformidade que sustentam softwares estáveis em ambientes de missão
                crítica.
              </p>
            </header>
          </div>
        </section>
        <DirectAnswer />
        <TechMarquee />
        <StatsStrip />
        <MethodologySection />
        <AuditProcessSection />
        <MicroCta
          label="Quer os 4 pilares aplicados ao seu projeto?"
          formHref="/#contato"
        />
        <AuditTerminal />
        <CodeComparison />
        <ASDSTE100Section />
        <ComplianceSection />
        <FAQSection
          items={FAQ_TECHNICAL_DB}
          eyebrow="// FAQ Técnico"
          title="Perguntas Frequentes sobre STE-DEV e Auditoria"
          description="Tudo sobre nossa metodologia, processo de auditoria e engenharia preventiva."
        />
      </main>
      <Footer anchors={FOOTER_ANCHORS} />
    </div>
  )
}
