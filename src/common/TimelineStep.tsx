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
    ? 'flex flex-col gap-space-sm p-space-md rounded bg-white border border-slate-200'
    : 'flex flex-col gap-space-sm p-space-md rounded bg-surface-container-low border border-outline-variant/40'
}

function labelClass(color: 'primary' | 'secondary', theme: TimelineTheme): string {
  if (color === 'secondary') return theme === 'light' ? 'text-emerald-600' : 'text-secondary'
  return theme === 'light' ? 'text-sky-600' : 'text-primary'
}

function ringClass(color: 'primary' | 'secondary', theme: TimelineTheme): string {
  if (color === 'secondary') return theme === 'light' ? 'bg-emerald-100' : 'bg-secondary/20'
  return theme === 'light' ? 'bg-sky-100' : 'bg-primary/20'
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
  return (
    <div className={cardClass(theme)}>
      <div className={`flex items-center gap-space-xs font-code-sm text-code-sm ${labelClass(color, theme)}`}>
        <span className={`w-6 h-6 rounded-full ${ringClass(color, theme)} flex items-center justify-center font-bold`}>{number}</span>
        <span className="font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <span className={titleClass(theme)}>{title}</span>
      {description ? <p className={descriptionClass(theme)}>{description}</p> : null}
    </div>
  )
}
