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
          eyebrow="// Ofertas Comerciais de Alto Valor"
          title="Como aceleramos e escalamos a sua operação"
          description="Três rotas de engenharia para eliminar gargalos: construir uma plataforma operacional dedicada, automatizar rotinas de APIs e finanças ou modernizar legados com risco zero."
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
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">assignment</span>
            <span>Solicitar Diagnóstico de Viabilidade</span>
          </a>
          <span className="text-sm text-slate-500">
            Triagem técnica preliminar sem custo • Atendimento direto com Arquiteto Sênior
          </span>
        </div>
      </div>
    </section>
  )
}
