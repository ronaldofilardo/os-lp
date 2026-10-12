export function PanelRow({
  icon,
  label,
  value,
  tone,
  isActive,
  index,
  spinIcon = false,
}: {
  readonly icon: string
  readonly label: string
  readonly value: string
  readonly tone: 'green' | 'blue'
  readonly isActive: boolean
  readonly index: number
  readonly spinIcon?: boolean
}): JSX.Element {
  const isGreen = tone === 'green'
  return (
    <div
      style={{ animationDelay: `${300 + index * 120}ms` }}
      className={`panel-row-in -mx-2 px-2 flex items-center justify-between py-2.5 border-b border-slate-100 last:border-0 rounded-lg transition-colors duration-500 ${isActive ? 'bg-sky-50/80' : ''}`}
    >
      <div className="flex items-center gap-2.5">
        <span
          className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform duration-500 ${isActive ? 'scale-110' : ''} ${isGreen ? 'bg-emerald-50 text-emerald-600' : 'bg-sky-50 text-sky-600'}`}
        >
          <span aria-hidden="true" translate="no" className={`material-symbols-outlined text-[18px] ${spinIcon ? 'panel-spin' : ''}`}>{icon}</span>
        </span>
        <span className="text-sm font-medium text-slate-900">{label}</span>
      </div>
      <span key={value} className={`panel-flash text-sm font-semibold tabular-nums ${isGreen ? 'text-emerald-600' : 'text-sky-600'}`}>{value}</span>
    </div>
  )
}

export function IntegrationChip({ label, index }: { readonly label: string; readonly index: number }): JSX.Element {
  return (
    <span className="skeuo-chip inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-slate-900">
      <span
        style={{ animationDelay: `${index * 450}ms` }}
        className="panel-led w-1.5 h-1.5 rounded-full bg-emerald-500 skeuo-led-green"
        aria-hidden="true"
      />
      {label}
    </span>
  )
}
