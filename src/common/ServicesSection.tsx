import { getAllServicesDTO } from '@/utils/adapter'
import { ServiceCard } from './ServiceCard'
import { ServicesComparisonTable } from './ServicesComparisonTable'

export function ServicesSection(): React.JSX.Element {
  const services = getAllServicesDTO()

  return (
    <section className="w-full py-space-xl bg-surface-container-lowest/50 border-t border-outline-variant/30" id="servicos">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Modelos de Engajamento</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Serviços de Engenharia
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Formatos focados em resolver gargalos estruturais em bases de missão crítica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <ServicesComparisonTable />
        <div className="mt-space-md flex flex-col sm:flex-row sm:items-center gap-space-sm">
          <a
            href="#contato"
            className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors w-fit"
          >
            <span className="material-symbols-outlined text-icon-lg">terminal</span>
            <span>Falar com um engenheiro</span>
          </a>
          <span className="font-code-sm text-code-sm text-on-surface-variant">
            Resposta em até 24h úteis • Atendimento direto com engenheiro, sem intermediários
          </span>
        </div>
      </div>
    </section>
  )
}
