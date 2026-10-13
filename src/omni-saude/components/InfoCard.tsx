import type { ReactNode } from 'react'
import { TiltCard } from '@/motion/TiltCard'

export type CardTone = 'sky' | 'emerald' | 'primary'

interface InfoCardProps {
  readonly icon: string
  readonly tone?: CardTone
  readonly title: string
  readonly description?: string
  readonly bullets?: readonly string[]
  readonly children?: ReactNode
}

const TONE_TILE: Record<CardTone, string> = {
  sky: 'bg-sky-100 text-sky-700 border-sky-200',
  emerald: 'bg-emerald-100 text-emerald-700 border-emerald-200',
  primary: 'bg-[#0A2F51]/10 text-[#0A2F51] border-[#0A2F51]/20',
}

export function InfoCard({
  icon,
  tone = 'sky',
  title,
  description,
  bullets,
  children,
}: InfoCardProps): React.JSX.Element {
  return (
    <TiltCard className="h-full rounded-2xl">
      <article className="skeuo-card h-full rounded-2xl p-6 flex flex-col gap-space-sm">
        <span className={`w-11 h-11 rounded-xl border flex items-center justify-center shrink-0 ${TONE_TILE[tone]}`}>
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[22px]">{icon}</span>
        </span>
        <h3 className="font-headline-sm text-headline-sm text-slate-900">{title}</h3>
        {description ? <p className="text-body-md text-slate-600 leading-relaxed">{description}</p> : null}
        {bullets && bullets.length > 0 ? (
          <ul className="flex flex-col gap-space-xs list-none m-0 p-0 mt-1">
            {bullets.map((bullet) => (
              <li key={bullet} className="flex items-start gap-space-xs text-body-sm text-slate-600">
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px] text-emerald-600 mt-0.5">check</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children ? <div className="mt-auto pt-space-xs">{children}</div> : null}
      </article>
    </TiltCard>
  )
}
