import type { ReactNode } from 'react'
import { Reveal } from '@/motion/Reveal'

export interface HeroCta {
  readonly label: string
  readonly href: string
}

interface PageHeroProps {
  readonly eyebrow?: string
  readonly icon?: string
  readonly title: string
  readonly titleHighlight?: string
  readonly description?: string
  readonly checks?: readonly string[]
  readonly primaryCta?: HeroCta
  readonly secondaryCta?: HeroCta
  readonly afterCta?: ReactNode
  readonly children?: ReactNode
}

function ctaClass(primary: boolean): string {
  return primary
    ? 'skeuo-button-emerald inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-white text-sm font-semibold'
    : 'skeuo-button-ghost inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-slate-700 text-sm font-semibold'
}

function ArrowIcon(): React.JSX.Element {
  return (
    <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">
      arrow_forward
    </span>
  )
}

export function PageHero({
  eyebrow,
  icon,
  title,
  titleHighlight,
  description,
  checks,
  primaryCta,
  secondaryCta,
  afterCta,
  children,
}: PageHeroProps): React.JSX.Element {
  const shell = 'mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin'
  return (
    <section className="py-12 md:py-16">
      <div
        className={
          children
            ? `max-w-container ${shell} grid lg:grid-cols-2 gap-10 lg:gap-16 items-center`
            : `max-w-4xl ${shell}`
        }
      >
        <Reveal className="flex flex-col gap-space-md">
          {eyebrow ? (
            <span className="font-label-caps text-label-caps uppercase tracking-wider text-emerald-700">
              {`// ${eyebrow}`}
            </span>
          ) : null}
          {icon ? (
            <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 border border-sky-200 flex items-center justify-center text-sky-700">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{icon}</span>
            </span>
          ) : null}
          <h1 className="text-display-lg-mobile md:text-display-lg text-slate-900">
            {title}
            {titleHighlight ? <span className="text-emerald-600">{` ${titleHighlight}`}</span> : null}
          </h1>
          {description ? <p className="text-body-lg text-slate-600 max-w-2xl">{description}</p> : null}
          {checks && checks.length > 0 ? (
            <ul className="flex flex-col gap-space-sm list-none m-0 p-0">
              {checks.map((check) => (
                <li key={check} className="flex items-center gap-space-sm text-slate-700 font-medium text-body-lg">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px] text-emerald-600">check_circle</span>
                  <span>{check}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {primaryCta || secondaryCta ? (
            <div className="flex flex-col sm:flex-row gap-space-sm mt-space-xs">
              {primaryCta ? (
                <a href={primaryCta.href} className={ctaClass(true)}>
                  <span>{primaryCta.label}</span>
                  <ArrowIcon />
                </a>
              ) : null}
              {secondaryCta ? <a href={secondaryCta.href} className={ctaClass(false)}>{secondaryCta.label}</a> : null}
            </div>
          ) : null}
          {afterCta}
        </Reveal>
        {children ? <Reveal>{children}</Reveal> : null}
      </div>
    </section>
  )
}
