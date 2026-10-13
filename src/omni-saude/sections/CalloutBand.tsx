import type { HeroCta } from '@/omni-saude/components/PageHero'
import { Reveal } from '@/motion/Reveal'

interface CalloutBandProps {
  readonly eyebrow?: string
  readonly icon?: string
  readonly title: string
  readonly description?: string
  readonly cta?: HeroCta
  readonly tone?: 'sky' | 'emerald'
  readonly headingLevel?: 'h2' | 'p'
}

const TONE = {
  sky: {
    band: 'bg-gradient-to-r from-sky-50 via-white to-sky-100 border-sky-200',
    icon: 'bg-sky-100 text-sky-700 border-sky-200',
    eyebrow: 'text-sky-700',
  },
  emerald: {
    band: 'bg-gradient-to-r from-emerald-50 via-white to-emerald-100 border-emerald-200',
    icon: 'bg-emerald-100 text-emerald-700 border-emerald-200',
    eyebrow: 'text-emerald-700',
  },
} as const

export function CalloutBand({
  eyebrow,
  icon,
  title,
  description,
  cta,
  tone = 'emerald',
  headingLevel = 'h2',
}: CalloutBandProps): React.JSX.Element {
  const style = TONE[tone]
  const Heading = headingLevel
  return (
    <section className="py-6 md:py-8">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className={`rounded-2xl border ${style.band} p-6 md:p-8 flex flex-col md:flex-row md:items-center gap-space-md shadow-sm`}>
          <div className="flex flex-col gap-space-xs flex-1">
            {eyebrow ? (
              <span className={`font-label-caps text-label-caps uppercase tracking-wider ${style.eyebrow}`}>
                {`// ${eyebrow}`}
              </span>
            ) : null}
            <Heading className="font-headline-md text-headline-md text-slate-900">{title}</Heading>
            {description ? (
              <p className="text-body-md text-slate-600 leading-relaxed max-w-3xl">{description}</p>
            ) : null}
          </div>
          {icon ? (
            <span className={`w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 self-start md:self-center ${style.icon}`}>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[28px]">{icon}</span>
            </span>
          ) : null}
          {cta ? (
            <a
              href={cta.href}
              className="skeuo-button-ghost inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-slate-700 text-sm font-semibold shrink-0 self-start md:self-center"
            >
              <span>{cta.label}</span>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </a>
          ) : null}
        </Reveal>
      </div>
    </section>
  )
}
