interface ProblemCardProps {
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly theme?: 'dark' | 'light'
}

export function ProblemCard({ icon, title, description, theme = 'dark' }: ProblemCardProps): JSX.Element {
  const light = theme === 'light'

  return (
    <div
      className={
        light
          ? 'group h-full p-space-lg rounded-2xl skeuo-card flex flex-col gap-space-sm hover:border-rose-300 hover:-translate-y-1 transition-all duration-200'
          : 'group h-full p-space-lg rounded-2xl bg-surface-container-low border border-outline-variant/40 flex flex-col gap-space-sm hover:border-error/50 hover:-translate-y-1 hover:shadow-[0_0_24px_rgba(255,180,171,0.12)] transition-all duration-300'
      }
    >
      <div
        className={
          light
            ? 'pop-icon skeuo-chip w-12 h-12 rounded-xl flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform duration-200'
            : 'pop-icon w-12 h-12 rounded-xl bg-error-container/20 flex items-center justify-center text-error group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300'
        }
      >
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{icon}</span>
      </div>
      <h3 className={light ? 'text-lg font-semibold text-slate-900' : 'font-headline-sm text-headline-sm text-on-surface'}>
        {title}
      </h3>
      <p className={light ? 'text-sm text-slate-600 leading-relaxed' : 'font-body-sm text-body-sm text-on-surface-variant'}>
        {description}
      </p>
    </div>
  )
}
