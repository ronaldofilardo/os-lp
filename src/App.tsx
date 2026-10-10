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

export function App(): JSX.Element {
  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <Header />
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
       <Footer />
    </div>
  )
}