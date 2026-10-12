import { MethodologyShowcase } from './MethodologyShowcase'
import { SectionHeader } from './SectionHeader'

export function MethodologySection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl" id="metodologia">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Governança e Rigor Técnico"
          title="Quais são os 4 pilares da engenharia preventiva STE-DEV?"
          description={
            <>
              Velocidade da IA com rigor de engenharia. Dúvidas? Veja o <a href="#faq" className="text-primary hover:underline">FAQ</a> ou os <a href="/artigos" className="text-primary hover:underline">artigos técnicos</a>.
            </>
          }
          maxWidthClass="max-w-3xl"
        />
        <MethodologyShowcase />
      </div>
    </section>
  )
}
