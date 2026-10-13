import { Reveal } from '@/motion/Reveal'
import type { HeroCta } from './PageHero'

interface FinalCtaProps {
  readonly title: string
  readonly description?: string
  readonly primaryCta: HeroCta
  readonly secondaryCta?: HeroCta
}

function primaryClass(): string {
  return 'inline-flex items-center justify-center gap-space-xs px-8 py-4 rounded-xl bg-white text-emerald-700 font-bold text-base shadow-xl transition-transform hover:-translate-y-0.5'
}

function secondaryClass(): string {
  return 'inline-flex items-center justify-center gap-space-xs px-8 py-4 rounded-xl border-2 border-white/70 text-white font-semibold text-base hover:bg-white/10 transition-colors'
}

export function FinalCta({
  title,
  description,
  primaryCta,
  secondaryCta,
}: FinalCtaProps): React.JSX.Element {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-2xl">
      <div className="max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin text-center">
        <Reveal className="flex flex-col items-center gap-space-md">
          <h2 className="text-display-lg-mobile md:text-display-lg text-white">{title}</h2>
          {description ? (
            <p className="text-body-lg text-emerald-50 max-w-2xl">{description}</p>
          ) : null}
          <div className="flex flex-col sm:flex-row gap-space-sm justify-center items-center w-full sm:w-auto">
            <a href={primaryCta.href} className={`${primaryClass()} w-full sm:w-auto`}>
              <span>{primaryCta.label}</span>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">arrow_forward</span>
            </a>
            {secondaryCta ? (
              <a href={secondaryCta.href} className={`${secondaryClass()} w-full sm:w-auto`}>
                {secondaryCta.label}
              </a>
            ) : null}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
