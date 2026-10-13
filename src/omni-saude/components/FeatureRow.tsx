import type { ReactNode } from 'react'
import { Reveal } from '@/motion/Reveal'
import type { HeroCta } from './PageHero'

interface FeatureRowMedia {
  readonly src: string
  readonly alt: string
  readonly width: number
  readonly height: number
}

interface FeatureRowProps {
  readonly icon?: string
  readonly image?: FeatureRowMedia
  readonly badge?: string
  readonly title: string
  readonly description?: string
  readonly bullets?: readonly string[]
  readonly cta?: HeroCta
  readonly reverse?: boolean
  readonly headingLevel?: 'h2' | 'h3'
  readonly children?: ReactNode
}

function Media({
  icon,
  image,
}: {
  readonly icon?: string | undefined
  readonly image?: FeatureRowMedia | undefined
}): React.JSX.Element | null {
  if (image) {
    return (
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="w-full h-auto rounded-2xl border border-slate-200 shadow-lg object-cover"
      />
    )
  }
  if (!icon) return null
  return (
    <span className="w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 border border-sky-200 flex items-center justify-center text-sky-700">
      <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[32px]">{icon}</span>
    </span>
  )
}

export function FeatureRow({
  icon,
  image,
  badge,
  title,
  description,
  bullets,
  cta,
  reverse = false,
  headingLevel = 'h2',
  children,
}: FeatureRowProps): React.JSX.Element {
  const Heading = headingLevel
  const hasMedia = Boolean(image ?? icon)
  return (
    <Reveal className={`grid gap-8 lg:gap-12 items-center ${hasMedia ? 'lg:grid-cols-2' : ''}`}>
      {hasMedia ? (
        <div className={reverse ? 'lg:order-2' : undefined}>
          <Media icon={icon} image={image} />
        </div>
      ) : null}
      <div className="flex flex-col gap-space-sm">
        {badge ? (
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-sky-700">
            {`// ${badge}`}
          </span>
        ) : null}
        <Heading className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{title}</Heading>
        {description ? <p className="text-body-lg text-slate-600 leading-relaxed">{description}</p> : null}
        {bullets && bullets.length > 0 ? (
          <ul className="flex flex-col gap-space-sm list-none m-0 p-0 mt-1">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-space-xs text-body-md text-slate-600">
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-emerald-600 mt-0.5">check</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children}
        {cta ? (
          <a
            href={cta.href}
            className="skeuo-button-ghost inline-flex items-center gap-space-xs px-6 py-3 rounded-xl text-slate-700 text-sm font-semibold w-fit mt-space-xs"
          >
            <span>{cta.label}</span>
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </a>
        ) : null}
      </div>
    </Reveal>
  )
}
