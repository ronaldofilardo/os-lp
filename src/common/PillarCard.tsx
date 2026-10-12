import type { PillarItem } from './pillars'

interface PillarCardProps extends PillarItem {
  readonly isActive: boolean
  readonly onActivate: () => void
}

export function PillarCard({ number, icon, title, description, rule, isActive, onActivate }: PillarCardProps): JSX.Element {
  const stateClass = isActive
    ? 'border-primary/70 bg-surface-container shadow-[0_0_28px_rgba(129,212,250,0.22)] -translate-y-1'
    : 'border-outline-variant/60 hover:border-outline-variant'

  return (
    <div
      tabIndex={0}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      className={`h-full p-space-md md:p-space-lg rounded-lg bg-surface-container-low border transition-all duration-300 flex flex-col justify-between gap-space-md outline-none ${stateClass}`}
    >
      <div className="flex flex-col gap-space-sm">
        <div className="flex items-center justify-between">
          <span className="font-code-sm text-code-sm text-primary font-semibold whitespace-nowrap">PILAR {number}</span>
          <span aria-hidden="true" translate="no" className="pop-icon material-symbols-outlined text-primary text-[24px]">{icon}</span>
        </div>
        <h3 className="font-headline-sm text-headline-sm text-on-surface">{title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{description}</p>
      </div>
      <span className="font-code-sm text-code-sm text-secondary">{`// ${rule}`}</span>
    </div>
  )
}
