import { useServices } from '@/hooks'
import { ServiceCard } from './ServiceCard'

export function ServicesSection(): JSX.Element {
  const { services } = useServices()

  return (
    <section className="w-full py-space-xl bg-surface-container-lowest/50 border-t border-outline-variant/30" id="servicos">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
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
      </div>
    </section>
  )
}