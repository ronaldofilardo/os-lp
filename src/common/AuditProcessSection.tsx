interface AuditStep {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description: string
  readonly color: 'primary' | 'secondary'
}

const steps: readonly AuditStep[] = [
  {
    number: '01',
    label: 'Etapa 01',
    title: 'Engenharia Reversa e Varredura Sistemática',
    description: 'O código existente é inspecionado sob o protocolo formal de auditoria STE-DEV. Nossos engenheiros realizam a varredura profunda em busca de violações das Proibições Absolutas da metodologia (componentes > 100 linhas, lógica de API na UI, complexidade ciclomática > 10, tipagem fraca com any e magic numbers).',
    color: 'primary',
  },
  {
    number: '02',
    label: 'Etapa 02',
    title: 'Diagnóstico Baseado em Evidências',
    description: 'Sem sugestões vagas: geramos o Resumo Executivo de Conformidade com tabela de métricas objetivas e o Inventário Detalhado onde cada infração é mapeada com precisão (arquivo:linha), causa raiz, trecho ofensivo e impacto na manutenção.',
    color: 'primary',
  },
  {
    number: '03',
    label: 'Etapa 03',
    title: 'Matriz de Sequência e Plano Atômico',
    description: 'Execução estrita e segura em 5 passos para prevenir regressões: (1) Linha Base e Testes de Caracterização para blindar o comportamento atual; (2) Tipos e DTOs isolando DB-Row de DTO; (3) Extração de Lógica e Hooks; (4) Modularização de UI para componentes < 100 linhas; (5) Limpeza Semântica STE.',
    color: 'secondary',
  },
  {
    number: '04',
    label: 'Etapa 04',
    title: 'Governança e Padrão DEV Contínuo',
    description: 'Com o módulo modernizado, as novas funcionalidades e módulos (DEV) passam a nascer diretamente sob as premissas preventivas da STE-DEV: atômicos, com vocabulário técnico controlado e livres de dívida técnica ou necessidade de refatoração futura.',
    color: 'primary',
  },
] as const

export function AuditProcessSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest/70 border-t border-outline-variant/30" id="auditoria-processo">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-3xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">// Engenharia Reversa e Auditoria</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Modernização Segura via Engenharia Reversa e Auditoria STE-DEV
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            A modernização de um sistema legado ou em produção não deve ser feita por reescrita cega, mas por engenharia reversa metódica e passos atômicos blindados contra regressão:
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`flex flex-col gap-space-sm p-space-md rounded bg-surface-container-low border border-outline-variant/40 ${
                s.color === 'secondary' ? 'ring-1 ring-secondary/30' : ''
              }`}
            >
              <div className={`flex items-center gap-space-xs font-code-sm text-code-sm ${s.color === 'secondary' ? 'text-secondary' : 'text-primary'}`}>
                <span className={`w-6 h-6 rounded-full ${s.color === 'secondary' ? 'bg-secondary/20' : 'bg-primary/20'} flex items-center justify-center font-bold`}>{s.number}</span>
                <span className="font-semibold uppercase tracking-wider">{s.label}</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-on-surface">{s.title}</span>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}