import type { Metadata } from 'next'
import {
  Header,
  HeroSection,
  BenefitsStrip,
  MicroCta,
  ProblemSection,
  DifferentialsSection,
  ProcessSection,
  ServicesSection,
  ProjectsSection,
  AboutSection,
  CoverageSection,
  RigorStrip,
  FAQSection,
  ContactSection,
  MobileStickyCta,
  Footer,
} from '@/common'
import { JsonLd } from '@/common/JsonLd'
import { FAQ_COMMERCIAL_DB } from '@/data'
import { buildWebPageSchema, buildFaqPageSchema } from '@/lib/schemas'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: {
    canonical: '/',
  },
}

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans antialiased">
      <JsonLd data={buildWebPageSchema()} />
      <JsonLd data={buildFaqPageSchema(FAQ_COMMERCIAL_DB)} />
      <div className="scroll-progress" aria-hidden="true" />
      <Header theme="light" />
      <main>
        <HeroSection />
        <BenefitsStrip />
        <ProblemSection />
        <DifferentialsSection />
        <MicroCta label="Quer conversar sobre o seu projeto?" theme="light" />
        <ProcessSection />
        <ServicesSection />
        <ProjectsSection />
        <AboutSection />
        <MicroCta label="Pronto para eliminar os gargalos da sua operação?" theme="light" />
        <RigorStrip />
        <CoverageSection />
        <FAQSection
          items={FAQ_COMMERCIAL_DB}
          eyebrow="// Dúvidas Frequentes"
          title="Perguntas frequentes de clientes"
          description="Respostas diretas sobre processo, integrações, prazos e suporte."
          theme="light"
        />
        <MicroCta label="Ficou com alguma dúvida?" theme="light" />
        <ContactSection />
      </main>
      <Footer theme="light" />
      <MobileStickyCta />
    </div>
  )
}
