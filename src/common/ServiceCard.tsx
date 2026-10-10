import type { ServiceDTO } from '@/types'

interface ServiceCardProps {
  readonly service: ServiceDTO
}

const iconMap: Record<string, string> = {
  rocket_launch: 'rocket_launch',
  troubleshoot: 'troubleshoot',
  autorenew: 'autorenew',
} as const

const tierColors = {
  recommended: 'border-2 border-primary-container shadow-[0_0_24px_rgba(56,189,248,0.18)] relative',
  standard: 'border border-outline-variant/40',
  'legacy-repair': 'border border-outline-variant/40',
} as const

export function ServiceCard({ service }: ServiceCardProps): JSX.Element {
  const Icon = iconMap[service.icon] || 'rocket_launch'
  const isHighlighted = service.isHighlighted

  return (
    <div className={`p-space-xl rounded-lg bg-surface-container-low ${tierColors[service.tier]} flex flex-col justify-between ${isHighlighted ? 'relative' : ''}`}>
      {isHighlighted && (
        <div className="absolute -top-3 left-6">
          <span className="px-3 py-1 rounded bg-primary-container text-on-primary-container font-label-caps text-label-caps font-bold uppercase tracking-wider">
            Porta de entrada recomendada
          </span>
        </div>
      )}
      <div className="flex flex-col gap-space-sm {isHighlighted ? 'pt-2' : ''}">
        <div className={`w-10 h-10 rounded flex items-center justify-center ${isHighlighted ? 'bg-primary-container/20 text-primary-container' : 'bg-surface-container-high text-primary'}`}>
          <span className="material-symbols-outlined text-[22px]">{Icon}</span>
        </div>
        <h3 className="font-headline-md text-headline-md text-on-surface">{service.title}</h3>
        <p className="font-body-md text-body-md text-on-surface-variant">{service.description}</p>
        {isHighlighted && (
          <span className="font-code-sm text-code-sm text-secondary block mt-0.5">Porta de entrada recomendada</span>
        )}
      </div>
      <div className="pt-space-lg">
        <a
          className={`w-full inline-flex items-center justify-center px-space-md py-2.5 rounded font-headline-sm text-body-md font-semibold hover:bg-surface-variant transition-colors ${
            isHighlighted
              ? 'bg-primary-container text-on-primary-container hover:bg-primary shadow-md'
              : 'bg-surface-container-high border border-outline-variant text-on-surface'
          }`}
          href="#contato"
        >
          {service.ctaLabel}
        </a>
      </div>
    </div>
  )
}