interface TimelineStepProps {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description: string
  readonly color?: 'primary' | 'secondary'
}

export function TimelineStep({ number, label, title, description, color = 'primary' }: TimelineStepProps): JSX.Element {
  const ringColor = color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/20'
  const labelColor = color === 'secondary' ? 'text-secondary' : 'text-primary'

  return (
    <div className="flex flex-col gap-space-sm p-space-md rounded bg-surface-container-low border border-outline-variant/40">
      <div className={`flex items-center gap-space-xs font-code-sm text-code-sm ${labelColor}`}>
        <span className={`w-6 h-6 rounded-full ${ringColor} flex items-center justify-center font-bold`}>{number}</span>
        <span className="font-semibold uppercase tracking-wider">{label}</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface">{title}</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  )
}