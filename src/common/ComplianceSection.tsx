import { SectionHeader } from './SectionHeader'
interface MetricItem {
  readonly metric: string
  readonly current: string
  readonly target: string
  readonly status: 'CONFORME' | 'VIOLAÇÃO'
}

const metrics: readonly MetricItem[] = [
  { metric: 'Componentes > 100 linhas', current: '0 arquivos', target: '0', status: 'CONFORME' },
  { metric: 'Funções com Verbos Vagos (handle, process, data)', current: '0 detectados', target: '0', status: 'CONFORME' },
  { metric: 'Uso de any explícito ou permissivo', current: '0 ocorrências', target: '0', status: 'CONFORME' },
  { metric: 'Chamadas async sem try/catch em I/O', current: '0 ocorrências', target: '0', status: 'CONFORME' },
  { metric: 'Complexidade Ciclomática > 10 (teto 15)', current: '0 módulos', target: '0', status: 'CONFORME' },
  { metric: 'Valores de estilo arbitrários / magic numbers', current: '0 classes', target: '0', status: 'CONFORME' },
  { metric: 'Textos sem componente tipográfico do DS', current: '0 tags', target: '0', status: 'CONFORME' },
  { metric: 'Elementos interativos sem estados/A11y', current: '0 botões/inputs', target: '0', status: 'CONFORME' },
]

export function ComplianceSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl border-t border-outline-variant/30" id="conformidade">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Laudo de Auditoria"
          title="Como é medida a conformidade STE-DEV?"
          description="Cada indicador reflete um contrato inegociável do protocolo STE-DEV."
          tone="primary"
          maxWidthClass="max-w-3xl"
        />

        <div className="rounded-lg bg-surface-container-low border border-outline-variant/60 overflow-hidden shadow-xl">
          <div className="px-space-md py-3 bg-surface-container-high/60 border-b border-outline-variant/40 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Matriz Oficial de Invariantes</span>
            </div>
            <span className="font-code-sm text-code-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30">
              Exemplo de Laudo STE-DEV
            </span>
          </div>

          <div
            className="overflow-x-auto"
            role="region"
            aria-label="Matriz de invariantes STE-DEV"
            tabIndex={0}
          >
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/30 bg-surface-container-lowest/50 font-label-caps text-label-caps text-on-surface-variant uppercase">
                  <th className="py-3 px-space-md">Métrica Avaliada</th>
                  <th className="hidden sm:table-cell py-3 px-space-md">Situação Pós-Auditoria</th>
                  <th className="hidden sm:table-cell py-3 px-space-md">Meta STE-DEV</th>
                  <th className="py-3 px-space-md text-right">Status do Laudo</th>
                </tr>
              </thead>
              <tbody className="font-code-sm text-code-sm divide-y divide-outline-variant/20">
                {metrics.map((m, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-high/30 transition-colors">
                    <td className="py-3 px-space-md text-on-surface font-sans text-body-md font-medium">
                      {m.metric}
                      <span className="sm:hidden block mt-1 font-code-sm text-[11px] text-on-surface-variant">{`${m.current} · meta ${m.target}`}</span>
                    </td>
                    <td className="hidden sm:table-cell py-3 px-space-md text-on-surface-variant">
                      {m.current}
                    </td>
                    <td className="hidden sm:table-cell py-3 px-space-md text-primary font-semibold">
                      {m.target}
                    </td>
                    <td className="py-3 px-space-md text-right">
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-secondary/15 text-secondary border border-secondary/30 font-bold text-label-caps">
                        <span className="w-1.5 h-1.5 rounded-full bg-secondary" />
                        [{m.status}]
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-space-md bg-surface-container-lowest/80 border-t border-outline-variant/30 flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm font-code-sm text-code-sm text-on-surface-variant">
            <span>Regra de Ouro: Código que exige refatoração posterior não é gerado na Omni Sistemas.</span>
            <span className="text-primary font-medium">Protocolo ASD-STE100 / STE-DEV Homologado</span>
          </div>
        </div>
      </div>
    </section>
  )
}