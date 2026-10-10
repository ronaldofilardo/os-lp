import {
  Header,
  HeroSection,
  KeyTakeawaysSection,
  ProblemSection,
  MethodologySection,
  TimelineSection,
  AuditProcessSection,
  AuditTerminal,
  CodeComparison,
  ASDSTE100Section,
  ProjectsSection,
  ServicesSection,
  ComplianceSection,
  FAQSection,
  ContactSection,
  Footer,
} from '@/common'
import { JsonLd } from '@/common/JsonLd'
import { buildWebPageSchema } from '@/lib/schemas'

export default function HomePage(): React.JSX.Element {
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <JsonLd data={buildWebPageSchema()} />
      <Header />
      <main>
        <HeroSection />
        <KeyTakeawaysSection />
        <ProblemSection />
        <MethodologySection />
        <TimelineSection />
        <AuditProcessSection />
        <AuditTerminal />
        <CodeComparison />
        <ASDSTE100Section />
        <ProjectsSection />
        <ServicesSection />
        <ComplianceSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
