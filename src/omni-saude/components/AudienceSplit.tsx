import { Reveal } from '@/motion/Reveal'

export interface SplitCard {
  readonly tag: string
  readonly title: string
  readonly description: string
  readonly bullets?: readonly string[]
  readonly ctaLabel: string
  readonly ctaHref: string
  readonly icon: string
  readonly tone: 'emerald' | 'sky'
}

interface AudienceSplitProps {
  readonly sectionTitle?: string
  readonly sectionDescription?: string
  readonly cards: readonly SplitCard[]
  readonly headingLevel?: 'h2' | 'h3'
}

const TONE_TILE: Record<SplitCard['tone'], string> = {
  emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  sky: 'bg-sky-100 text-sky-700 border-sky-200',
}

function ctaClass(tone: SplitCard['tone']): string {
  return tone === 'emerald'
    ? 'skeuo-button-emerald inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-white text-sm font-semibold w-full sm:w-auto'
    : 'skeuo-button-ghost inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-slate-700 text-sm font-semibold w-full sm:w-auto'
}

export function AudienceSplit({
  sectionTitle,
  sectionDescription,
  cards,
  headingLevel = 'h3',
}: AudienceSplitProps): React.JSX.Element {
  const Heading = headingLevel
  return (
    <section className="py-12 md:py-16 bg-white border-y border-slate-200">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {sectionTitle ? (
          <Reveal className="max-w-2xl mb-space-xl">
            <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{sectionTitle}</h2>
            {sectionDescription ? (
              <p className="text-body-md text-slate-600 mt-space-xs">{sectionDescription}</p>
            ) : null}
          </Reveal>
        ) : null}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {cards.map((card) => (
            <Reveal key={card.title} className="h-full">
              <article className="skeuo-card h-full rounded-2xl p-6 md:p-8 flex flex-col gap-space-sm">
                <div className="flex items-center justify-between gap-3">
                  <span className={`w-12 h-12 rounded-2xl border flex items-center justify-center shrink-0 ${TONE_TILE[card.tone]}`}>
                    <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{card.icon}</span>
                  </span>
                  <span className={`font-label-caps text-label-caps uppercase tracking-wider ${card.tone === 'emerald' ? 'text-emerald-700' : 'text-sky-700'}`}>
                    {card.tag}
                  </span>
                </div>
                <Heading className="font-headline-md text-headline-md text-slate-900">{card.title}</Heading>
                <p className="text-body-md text-slate-600 leading-relaxed">{card.description}</p>
                {card.bullets && card.bullets.length > 0 ? (
                  <ul className="flex flex-col gap-space-xs list-none m-0 p-0 mt-1">
                    {card.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-space-xs text-body-sm text-slate-600">
                        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px] text-emerald-600 mt-0.5">check</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                <div className="mt-auto pt-space-md">
                  <a href={card.ctaHref} className={ctaClass(card.tone)}>{card.ctaLabel}</a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
