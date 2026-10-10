const auditLines = [
  { type: 'violation' as const, code: 'VIOLAÇÃO', label: 'Componentes > 100 linhas', detail: 'app/components/BillingTable.tsx (248 lines)' },
  { type: 'violation' as const, code: 'VIOLAÇÃO', label: 'Tipagem permissiva detectada', detail: 'uso de \'any\' em 14 assinaturas de API' },
  { type: 'violation' as const, code: 'VIOLAÇÃO', label: 'Falha de acoplamento', detail: 'DB-Row exposto diretamente na camada de apresentação' },
  { type: 'conform' as const, code: 'CONFORME', label: 'Tratamento de exceções assíncronas', detail: '100% dos hooks com boundaries protegidos' },
  { type: 'conform' as const, code: 'CONFORME', label: 'Separação DB-Row / DTO', detail: 'Entidade Tenant isolada via mapper' },
  { type: 'conform' as const, code: 'CONFORME', label: 'Cobertura semântica ASD-STE100', detail: 'Vocabulário padronizado' },
] as const

export function AuditTerminal(): JSX.Element {
  return (
    <section className="w-full py-space-xl" id="auditoria">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-lg">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Telemetria e Diagnóstico</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Relatório de Conformidade
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Console de telemetria emitido pelo analisador estático Omni Sistemas durante a varredura da árvore de código.
          </p>
        </div>
        <div className="rounded-lg bg-surface-container-lowest border border-outline-variant/60 shadow-xl overflow-hidden">
          <div className="px-space-md py-2.5 bg-surface-container-low border-b border-outline-variant/40 flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container/70" />
                <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
              </div>
              <span className="font-code-sm text-code-sm text-on-surface-variant font-medium">omni-sistemas ste-audit --target=legacy-core --format=evidence</span>
            </div>
            <span className="font-label-caps text-label-caps px-2 py-0.5 rounded bg-surface-container-high text-on-surface-variant border border-outline-variant/40">
              Exemplo de saída de auditoria
            </span>
          </div>
          <div className="p-space-lg font-code-sm text-code-sm flex flex-col gap-2.5 leading-relaxed overflow-x-auto">
            <div className="text-on-surface-variant/70 pb-1">
              [Omni Sistemas STE-DEV] Protocolo de Auditoria e Engenharia Reversa // 184 módulos analisados...
            </div>
            {auditLines.map((line, i) => (
              <div
                key={i}
                className={`flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-2 rounded border ${
                  line.type === 'violation'
                    ? 'bg-error-container/10 border-error/30 text-error'
                    : 'bg-secondary-container/10 border-secondary/30 text-secondary'
                }`}
              >
                <div className="flex items-center gap-2">
                  <span className={`px-1.5 py-0.5 rounded font-bold text-label-caps ${line.type === 'violation' ? 'bg-error/20' : 'bg-secondary/20'}`}>
                    [{line.code}]
                  </span>
                  <span>{line.label}</span>
                </div>
                <span className="text-on-surface-variant font-mono">{line.detail}</span>
              </div>
            ))}
            <div className="pt-2 text-on-surface-variant/80 flex items-center justify-between border-t border-outline-variant/30 mt-2">
              <span>Métricas de Invariantes: <strong className="text-primary font-bold">50.0%</strong> (3 violações bloqueantes mapeadas)</span>
              <span className="text-warning font-semibold text-tertiary-container">// AUDITORIA CONCLUÍDA: MATRIZ DE REFATORAÇÃO GERADA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}