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
    <section className="w-full py-space-xl border-t border-outline-variant/30" id="conformidade">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-3xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Laudo de Auditoria</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Resumo Executivo de Conformidade STE-DEV
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Padrão rigoroso de entrega emitido ao final da auditoria. Cada indicador reflete os contratos inegociáveis do protocolo STE-DEV aplicado ao desenvolvimento (DEV) e à engenharia reversa de sistemas.
          </p>
        </div>

        <div className="rounded-lg bg-surface-container-low border border-outline-variant/60 overflow-hidden shadow-xl">
          <div className="px-space-md py-3 bg-surface-container-high/60 border-b border-outline-variant/40 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-[20px]">verified_user</span>
              <span className="font-headline-sm text-headline-sm text-on-surface">Matriz Oficial de Invariantes</span>
            </div>
            <span className="font-code-sm text-code-sm text-secondary bg-secondary/10 px-2 py-0.5 rounded border border-secondary/30">
              Score Geral: 100% Conforme
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-outline-variant/30 bg-surface-container-lowest/50 font-label-caps text-label-caps text-on-surface-variant uppercase">
                  <th className="py-3 px-space-md">Métrica Avaliada</th>
                  <th className="py-3 px-space-md">Situação Pós-Auditoria</th>
                  <th className="py-3 px-space-md">Meta STE-DEV</th>
                  <th className="py-3 px-space-md text-right">Status do Laudo</th>
                </tr>
              </thead>
              <tbody className="font-code-sm text-code-sm divide-y divide-outline-variant/20">
                {metrics.map((m, idx) => (
                  <tr key={idx} className="hover:bg-surface-container-high/30 transition-colors">
                    <td className="py-3 px-space-md text-on-surface font-sans text-body-md font-medium">
                      {m.metric}
                    </td>
                    <td className="py-3 px-space-md text-on-surface-variant">
                      {m.current}
                    </td>
                    <td className="py-3 px-space-md text-primary font-semibold">
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