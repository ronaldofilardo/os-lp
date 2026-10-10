import { getAllServicesDTO } from '@/utils/adapter'

const COMPARISON_ROWS = [
  { label: 'Melhor para', values: ['Projeto novo do zero', 'Sistema legado em produção', 'Legado com dívida crítica'] },
  { label: 'Ponto de entrada', values: ['Primeiro commit', 'Laudo de auditoria', 'Laudo + Strangler Pattern'] },
  { label: 'Prazo do laudo', values: ['—', 'Até 5 dias úteis', 'Até 5 dias úteis'] },
  { label: 'Entregável-chave', values: ['Código governado STE-DEV', 'Inventário arquivo:linha', 'Módulo novo em produção'] },
  { label: 'Regras STE-DEV', values: ['Desde o commit 1', 'Aplicadas na remediação', 'Aplicadas na extração'] },
] as const

export function ServicesComparisonTable(): React.JSX.Element {
  const services = getAllServicesDTO()

  return (
    <div className="mt-space-lg rounded-lg bg-surface-container-low border border-outline-variant/60 overflow-hidden">
      <div className="px-space-md py-3 bg-surface-container-high/60 border-b border-outline-variant/40 flex items-center gap-2">
        <span className="material-symbols-outlined text-primary text-icon-lg">compare_arrows</span>
        <span className="font-headline-sm text-headline-sm text-on-surface">Comparativo de Serviços</span>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <caption className="sr-only">Comparativo entre os três serviços de engenharia da Omni Sistemas</caption>
          <thead>
            <tr className="border-b border-outline-variant/30 bg-surface-container-lowest/50">
              <th scope="col" className="py-3 px-space-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider">
                Aspecto
              </th>
              {services.map((service) => (
                <th
                  key={service.id}
                  scope="col"
                  className="py-3 px-space-md font-label-caps text-label-caps text-on-surface-variant uppercase tracking-wider"
                >
                  {service.title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="font-code-sm text-code-sm divide-y divide-outline-variant/20">
            {COMPARISON_ROWS.map((row) => (
              <tr key={row.label} className="hover:bg-surface-container-high/30 transition-colors">
                <th
                  scope="row"
                  className="py-3 px-space-md text-on-surface font-sans text-body-md font-medium text-left"
                >
                  {row.label}
                </th>
                {row.values.map((value, i) => (
                  <td key={i} className="py-3 px-space-md text-on-surface-variant">
                    {value}
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
