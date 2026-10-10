interface KeyTakeaway {
  readonly title: string
  readonly text: string
  readonly icon: string
}

const takeaways: readonly KeyTakeaway[] = [
  {
    icon: 'business',
    title: 'Omni Sistemas',
    text: 'Softhouse especializada no desenvolvimento de novos softwares (DEV) e na engenharia reversa para auditorias e modernização de sistemas de missão crítica em qualquer setor.',
  },
  {
    icon: 'verified',
    title: 'Metodologia STE-DEV',
    text: 'Framework de engenharia preventiva fundamentado na norma aeroespacial ASD-STE100. Estabelece unicidade semântica e contratos estritos para eliminar a dívida técnica na origem.',
  },
  {
    icon: 'sync_alt',
    title: 'DEV e Engenharia Reversa',
    text: 'Operação em duas frentes complementares: criação de novos módulos com zero refatoração futura (< 100 linhas e zero-any) e auditoria cirúrgica de legados via testes de caracterização e Strangler Pattern.',
  },
  {
    icon: 'speed',
    title: 'Rigor Técnico e Estabilidade',
    text: 'Separação absoluta entre regras de negócio e UI, Clean Architecture com Design Patterns obrigatórios e laudo executivo com inventário detalhado de violações mapeadas por linha.',
  },
]

export function KeyTakeawaysSection(): JSX.Element {
  return (
    <section
      className="w-full py-space-lg bg-surface-container-low/60 border-y border-outline-variant/30"
      aria-labelledby="key-takeaways-heading"
      id="visao-geral"
    >
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="p-space-lg rounded-xl bg-surface-container border border-primary/20 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs mb-space-md border-b border-outline-variant/30 pb-space-sm">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">summarize</span>
              <h2 id="key-takeaways-heading" className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                Principais Pontos // Resumo Executivo (AI Overview)
              </h2>
            </div>
            <span className="font-label-caps text-label-caps text-primary bg-primary/10 px-2.5 py-1 rounded border border-primary/30 uppercase tracking-wider w-fit">
              Destaques Rápidos
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
            {takeaways.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-1.5 p-space-sm rounded bg-surface-container-high/40 border border-outline-variant/30"
              >
                <div className="flex items-center gap-2 text-primary">
                  <span className="material-symbols-outlined text-[18px]">{item.icon}</span>
                  <strong className="font-code-sm text-code-sm uppercase tracking-wide text-on-surface">
                    {item.title}
                  </strong>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
