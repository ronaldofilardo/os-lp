import { getAllServicesDTO } from '@/utils/adapter'

const COMPARISON_ROWS = [
  { label: 'Melhor para', values: ['Criar um sistema do zero', 'Automatizar cobranças e integrações', 'Modernizar um sistema antigo'] },
  { label: 'Primeiro passo', values: ['Reunião de descoberta', 'Mapeamento das integrações', 'Diagnóstico do sistema atual'] },
  { label: 'Você acompanha', values: ['Validações periódicas', 'Testes de conexão em cada API', 'Migração etapa por etapa'] },
  { label: 'Entregável-chave', values: ['Sistema em operação', 'Fluxos automáticos rodando', 'Sistema estável sem parar a operação'] },
  {
    label: 'vs. Software de Prateleira',
    values: [
      'Feito para o seu processo real, não para o mercado médio',
      'Conecta as ferramentas que você já usa',
      'Renova sem perder o histórico da operação',
    ],
  },
] as const

const COLUMN_ACCENTS = [
  { top: 'border-t-sky-500', text: 'text-sky-700', icon: 'text-sky-500' },
  { top: 'border-t-emerald-500', text: 'text-emerald-700', icon: 'text-emerald-500' },
  { top: 'border-t-indigo-500', text: 'text-indigo-700', icon: 'text-indigo-500' },
] as const

export function ServicesComparisonTable(): React.JSX.Element {
  const services = getAllServicesDTO()

  return (
    <div className="bg-white mt-space-lg rounded-2xl overflow-hidden border border-slate-200 shadow-md">
      <div className="px-space-md py-4 bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 flex items-center gap-2.5">
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-white text-[24px]">compare_arrows</span>
        <span className="text-lg font-bold text-white tracking-tight">Comparativo de Serviços</span>
      </div>
      <p className="md:hidden px-space-md pt-2 text-sm font-medium text-sky-700">Deslize para comparar →</p>
      <div
        className="overflow-x-auto"
        role="region"
        aria-label="Comparativo de serviços"
        tabIndex={0}
      >
        <table className="w-full min-w-[560px] md:min-w-0 text-left border-collapse">
          <caption className="sr-only">
            Comparativo dos serviços da Omni Sistemas: Desenvolvimento Sob Medida, Integrações e Automações de API e Modernização de Legados
          </caption>
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50">
              <th scope="col" className="sticky left-0 bg-slate-100 py-3.5 px-space-md text-xs font-bold text-slate-700 uppercase tracking-wide border-t-4 border-t-slate-300">
                Aspecto
              </th>
              {services.map((service, column) => (
                <th
                  key={service.id}
                  scope="col"
                  className={`py-3.5 px-space-md bg-white text-xs font-bold uppercase tracking-wide border-t-4 ${COLUMN_ACCENTS[column % COLUMN_ACCENTS.length]?.top ?? ''} ${COLUMN_ACCENTS[column % COLUMN_ACCENTS.length]?.text ?? ''}`}
                >
                  {service.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-sm divide-y divide-slate-100">
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.label} className="odd:bg-white even:bg-slate-50/70 hover:bg-sky-50/60 transition-colors">
                <th
                  scope="row"
                  className="sticky left-0 bg-sky-50/90 py-3.5 px-space-md text-slate-900 font-semibold text-left border-r border-slate-200 text-sm"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={value} className="py-3.5 px-space-md text-slate-900 font-normal">
                    <span className="flex items-start gap-2">
                      <span aria-hidden="true" translate="no" className={`material-symbols-outlined text-[18px] mt-0.5 shrink-0 ${COLUMN_ACCENTS[i % COLUMN_ACCENTS.length]?.icon ?? ''}`}>check_circle</span>
                      <span>{value}</span>
                    </span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
