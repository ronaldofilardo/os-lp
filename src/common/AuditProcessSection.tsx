import { AuditShowcase } from './AuditShowcase'
import { SectionHeader } from './SectionHeader'

export function AuditProcessSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-surface-container-lowest/70 border-t border-outline-variant/30" id="auditoria-processo">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Engenharia Reversa e Auditoria"
          title="Como funciona a auditoria e a modernização de legados?"
          description="Nada de reescrita cega: engenharia reversa metódica, blindada contra regressão."
          tone="secondary"
          maxWidthClass="max-w-3xl"
        />
        <AuditShowcase />
      </div>
    </section>
  )
}
