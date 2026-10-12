export interface Benefit {
  readonly icon: string
  readonly title: string
  readonly text: string
}

interface SlideTheme {
  readonly surface: string
  readonly headline: string
  readonly iconColor: string
  readonly ring: string
}

export const SLIDE_THEMES: readonly SlideTheme[] = [
  { surface: 'from-sky-50 via-white to-sky-100', headline: 'from-sky-700 to-sky-500', iconColor: 'text-sky-600', ring: 'border-sky-300' },
  { surface: 'from-emerald-50 via-white to-emerald-100', headline: 'from-emerald-700 to-emerald-500', iconColor: 'text-emerald-600', ring: 'border-emerald-300' },
  { surface: 'from-sky-50 via-white to-slate-100', headline: 'from-sky-700 to-slate-700', iconColor: 'text-sky-700', ring: 'border-sky-300' },
  { surface: 'from-slate-50 via-white to-sky-50', headline: 'from-slate-800 to-sky-600', iconColor: 'text-slate-700', ring: 'border-slate-300' },
] as const

export function SlideVisual({ icon, theme }: { readonly icon: string; readonly theme: SlideTheme }): JSX.Element {
  return (
    <div className="relative w-44 h-44 md:w-64 md:h-64 flex items-center justify-center shrink-0" aria-hidden="true">
      <span className={`orbit-cw absolute inset-0 rounded-full border-2 border-dashed ${theme.ring}`} />
      <span className={`orbit-ccw absolute inset-5 md:inset-8 rounded-full border ${theme.ring}`}>
        <span className="absolute -top-1.5 left-1/2 w-3 h-3 rounded-full bg-sky-500 skeuo-led-green" />
      </span>
      <span className="float-y skeuo-chip w-24 h-24 md:w-32 md:h-32 rounded-[2rem] flex items-center justify-center">
        <span aria-hidden="true" translate="no" className={`material-symbols-outlined text-[48px] md:text-[64px] ${theme.iconColor}`}>{icon}</span>
      </span>
    </div>
  )
}
