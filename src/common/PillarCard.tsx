interface PillarCardProps {
  readonly number: string
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly rule: string
}

export function PillarCard({ number, icon, title, description, rule }: PillarCardProps): JSX.Element {
  return (
    <div className="p-space-xl rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col justify-between">
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-code-sm text-code-sm text-primary font-semibold">PILAR {number}</span>
          <span className="material-symbols-outlined text-primary text-[24px]">{icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      <div className="mt-space-md pt-space-sm border-t border-outline-variant/30 font-code-sm text-code-sm text-on-surface-variant">
        {rule}
      </div>
    </div>
  )
}