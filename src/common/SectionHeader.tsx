import type { ReactNode } from 'react'
import { Reveal } from '@/motion/Reveal'

export type SectionTone = 'primary' | 'secondary' | 'error'
export type SectionTheme = 'dark' | 'light'

const TONE_CLASS = {
  dark: {
    primary: 'text-primary',
    secondary: 'text-secondary',
    error: 'text-error',
  },
  light: {
    primary: 'text-sky-600',
    secondary: 'text-emerald-600',
    error: 'text-rose-600',
  },
} as const

const TITLE_CLASS = {
  dark: 'text-on-surface',
  light: 'text-slate-900',
} as const

const DESC_CLASS = {
  dark: 'text-on-surface-variant',
  light: 'text-slate-600',
} as const

interface SectionHeaderProps {
  readonly eyebrow: string
  readonly title: string
  readonly description?: ReactNode
  readonly tone?: SectionTone
  readonly theme?: SectionTheme
  readonly maxWidthClass?: string
  readonly titleId?: string
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  tone = 'primary',
  theme = 'dark',
  maxWidthClass = 'max-w-2xl',
  titleId,
}: SectionHeaderProps): React.JSX.Element {
  return (
    <Reveal className={`flex flex-col gap-space-xs mb-space-md md:mb-space-xl ${maxWidthClass}`}>
      <span className={`font-label-caps text-label-caps ${TONE_CLASS[theme][tone]} uppercase tracking-wider`}>{eyebrow}</span>
      <h2 id={titleId} className={`font-headline-lg text-2xl md:text-3xl lg:text-[32px] font-semibold leading-tight md:leading-snug ${TITLE_CLASS[theme]}`}>{title}</h2>
      {description ? <p className={`font-body-md text-body-md ${DESC_CLASS[theme]}`}>{description}</p> : null}
    </Reveal>
  )
}
