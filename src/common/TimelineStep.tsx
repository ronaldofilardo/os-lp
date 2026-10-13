type TimelineTheme = 'dark' | 'light'

interface TimelineStepProps {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description?: string
  readonly color?: 'primary' | 'secondary'
  readonly theme?: TimelineTheme
}

function cardClass(theme: TimelineTheme): string {
  return theme === 'light'
    ? 'skeuo-card group relative overflow-hidden flex flex-col gap-space-sm p-6 rounded-2xl bg-white border border-slate-200 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/10 hover:border-emerald-300 cursor-default h-full'
    : 'skeuo-card group relative overflow-hidden flex flex-col gap-space-sm p-6 rounded-2xl bg-surface-container-low border border-outline-variant/40 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/50 cursor-default h-full'
}

function labelClass(color: 'primary' | 'secondary', theme: TimelineTheme): string {
  if (color === 'secondary') return theme === 'light' ? 'text-emerald-600' : 'text-secondary'
  return theme === 'light' ? 'text-sky-600' : 'text-primary'
}

function ringClass(color: 'primary' | 'secondary', theme: TimelineTheme): string {
  if (color === 'secondary') return theme === 'light' ? 'bg-emerald-100 text-emerald-800' : 'bg-secondary/20 text-secondary'
  return theme === 'light' ? 'bg-sky-100 text-sky-800' : 'bg-primary/20 text-primary'
}

function titleClass(theme: TimelineTheme): string {
  return theme === 'light'
    ? 'font-headline-sm text-headline-sm text-slate-900'
    : 'font-headline-sm text-headline-sm text-on-surface'
}

function descriptionClass(theme: TimelineTheme): string {
  return theme === 'light'
    ? 'font-body-sm text-body-sm text-slate-600'
    : 'font-body-sm text-body-sm text-on-surface-variant'
}

export function TimelineStep({
  number,
  label,
  title,
  description,
  color = 'primary',
  theme = 'dark',
}: TimelineStepProps): JSX.Element {
  const gradientClass =
    color === 'secondary'
      ? 'from-emerald-400 via-teal-300 to-emerald-500'
      : 'from-sky-400 via-blue-400 to-sky-500'

  return (
    <div className={cardClass(theme)}>
      <div
        aria-hidden="true"
        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradientClass} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />
      <div className={`flex items-center gap-space-xs font-code-sm text-code-sm ${labelClass(color, theme)}`}>
        <span className={`w-6 h-6 rounded-full ${ringClass(color, theme)} flex items-center justify-center font-bold text-xs transition-all duration-300 ease-out group-hover:scale-115 group-hover:rotate-6 group-hover:shadow-xs`}>
          {number}
        </span>
        <span className="font-semibold uppercase tracking-wider transition-all duration-300 group-hover:tracking-widest">
          {label}
        </span>
      </div>
      <span className={`${titleClass(theme)} transition-colors duration-200 group-hover:text-slate-950`}>
        {title}
      </span>
      {description ? (
        <p className={`${descriptionClass(theme)} transition-colors duration-200 group-hover:text-slate-700`}>
          {description}
        </p>
      ) : null}
    </div>
  )
}
