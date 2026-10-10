interface ProblemCardProps {
  readonly icon: string
  readonly title: string
  readonly description: string
}

export function ProblemCard({ icon, title, description }: ProblemCardProps): JSX.Element {
  return (
    <div className="p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/40 flex flex-col gap-space-sm hover:border-error/40 transition-colors">
      <div className="w-10 h-10 rounded bg-error-container/20 flex items-center justify-center text-error">
        <span className="material-symbols-outlined text-[22px]">{icon}</span>
      </div>
      <span className="font-headline-sm text-headline-sm text-on-surface">{title}</span>
      <p className="font-body-sm text-body-sm text-on-surface-variant">{description}</p>
    </div>
  )
}