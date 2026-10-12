import type { ServiceDTO } from '@/types'

interface ServiceCardProps {
  readonly service: ServiceDTO
}

const iconMap: Record<string, string> = {
  rocket_launch: 'rocket_launch',
  troubleshoot: 'troubleshoot',
  autorenew: 'autorenew',
  hub: 'hub',
} as const

const tierColors = {
  recommended: 'skeuo-card-sky border border-sky-400 relative',
  standard: 'skeuo-card',
  'legacy-repair': 'skeuo-card',
} as const

export function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  const Icon = iconMap[service.icon] || 'rocket_launch'
  const isHighlighted = service.isHighlighted

  return (
    <div className={`p-space-lg md:p-space-xl rounded-2xl ${tierColors[service.tier]} flex flex-col justify-between hover:-translate-y-1 transition-all duration-200`}>
      {isHighlighted && (
        <div className="absolute -top-3 left-6">
          <span className="skeuo-button-primary px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-wider">
            Porta de entrada recomendada
          </span>
        </div>
      )}
      <div className="flex flex-col gap-space-sm">
        <div className={`skeuo-chip w-12 h-12 rounded-xl flex items-center justify-center ${isHighlighted ? 'text-sky-600' : 'text-slate-600'}`}>
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{Icon}</span>
        </div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">{service.title}</h3>
        <p className="text-sm font-normal text-slate-700 leading-relaxed">{service.description}</p>
      </div>
      <div className="pt-space-lg">
        <a
          className={`w-full inline-flex items-center justify-center px-space-md py-2.5 rounded-xl text-sm font-semibold ${
            isHighlighted
              ? 'skeuo-button-primary text-white'
              : 'skeuo-button-ghost text-slate-700'
          }`}
          href="#contato"
        >
          {service.ctaLabel}
        </a>
      </div>
    </div>
  )
}
