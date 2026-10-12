import { getAllServicesDTO } from '@/utils/adapter'
import { ServiceCard } from './ServiceCard'
import { ServicesComparisonTable } from './ServicesComparisonTable'
import { SectionHeader } from './SectionHeader'

export function ServicesSection(): React.JSX.Element {
  const services = getAllServicesDTO()

  return (
    <section className="w-full py-space-lg md:py-space-xl bg-[#f8fafc] border-t border-slate-200" id="servicos">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Soluções e Serviços"
          title="Como podemos ajudar sua empresa"
          description="Três caminhos para resolver gargalos operacionais: criar um sistema novo, integrar plataformas ou modernizar o que já existe."
          theme="light"
          maxWidthClass="max-w-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <ServicesComparisonTable />
        <div className="mt-space-md flex flex-col sm:flex-row sm:items-center gap-space-sm">
          <a
            href="#contato"
            className="skeuo-button-primary inline-flex items-center gap-space-xs px-space-lg py-3 rounded-xl text-white text-sm font-semibold w-fit"
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">description</span>
            <span>Falar sobre o meu projeto</span>
          </a>
          <span className="text-sm text-slate-500">
            Retorno em até 24h úteis • Atendimento direto com quem projeta, sem intermediários
          </span>
        </div>
      </div>
    </section>
  )
}
