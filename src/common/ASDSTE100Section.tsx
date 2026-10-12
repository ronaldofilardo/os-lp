import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'

const cards = [
  { icon: 'airplanemode_active', tag: 'ORIGEM', title: 'Indústria Aeroespacial', text: 'Manuais onde a ambiguidade causa acidentes.' },
  { icon: 'rule', tag: 'REGRAS', title: 'Vocabulário Controlado', text: '~3.000 palavras, cada uma com um só significado.' },
  { icon: 'code', tag: 'APLICAÇÃO', title: 'No Código Fonte', text: 'Sem handle, sem utils. Hooks separados de funções puras.' },
  { icon: 'verified', tag: 'RESULTADO', title: 'Código Inequívoco', text: 'Menos refatoração e onboarding mais barato.' },
] as const

export function ASDSTE100Section(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl border-t border-outline-variant/30" id="asd-ste100">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Origem Aeronáutica"
          title="O que é ASD-STE100 e como ela fundamenta a STE-DEV?"
          description="Linguagem técnica controlada da aviação, adaptada ao código e à geração por IA."
          maxWidthClass="max-w-3xl"
        />
        <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-space-sm md:gap-space-lg">
          <div className="hidden lg:block absolute top-[3.1rem] left-[12%] right-[12%] h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" aria-hidden="true" />
          {cards.map((card, index) => (
            <Reveal key={card.tag} delayMs={index * 120} className="h-full">
              <div className="group relative h-full p-space-md md:p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col hover:border-primary/50 hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-space-sm mb-space-sm">
                  <span className="pop-icon w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors">
                    <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[22px]">{card.icon}</span>
                  </span>
                  <span className="font-code-sm text-code-sm text-primary font-semibold">{card.tag}</span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">{card.title}</h3>
                <p className="font-body-md text-body-md text-on-surface-variant">{card.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
