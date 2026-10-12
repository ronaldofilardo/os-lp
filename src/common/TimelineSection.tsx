import { TimelineStep } from './TimelineStep'

const steps = [
  {
    number: '01',
    label: 'Etapa 01',
    title: 'Ingestão e varredura',
    description: 'Mapeamento estático integral da base, identificando vazamentos de escopo, duplicidades e acoplamentos.',
  },
  {
    number: '02',
    label: 'Etapa 02',
    title: 'Relatório de conformidade',
    description: 'Emissão de inventário detalhado separando violações críticas de invariantes operacionais validados.',
  },
  {
    number: '03',
    label: 'Etapa 03',
    title: 'Plano de ação atômico',
    description: 'Sequenciamento estruturado de refatoração para neutralizar riscos sem paralisar deploys.',
    color: 'secondary' as const,
  },
  {
    number: '04',
    label: 'Etapa 04',
    title: 'Governança e Padrão Preventivo',
    description: 'Padronização permanente sob a metodologia STE-DEV para novos módulos (DEV), assegurando código atômico, tipado e livre de refatorações.',
  },
] as const

export function TimelineSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-surface-container-lowest/70 border-t border-outline-variant/30" id="timeline">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">// Fluxo de Implementação</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Linha do Tempo: Protocolo de 4 Etapas
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Do diagnóstico inicial à barreira contínua contra entropia de software.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg relative">
          {steps.map((s, i) => (
            <TimelineStep key={i} {...s} />
          ))}
        </div>
        <div className="mt-space-lg p-space-lg rounded-lg bg-surface-container border border-outline-variant/50">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm mb-space-sm">
            <div className="flex items-center gap-space-xs font-code-sm text-code-sm text-on-surface">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-secondary text-[18px]">alt_route</span>
              <span className="font-semibold">Detalhamento dos 5 Passos do Plano de Ação Atômico (Etapa 03):</span>
            </div>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase">Execução Sequencial • Sem Regressão</span>
          </div>
          <div className="flex flex-wrap gap-space-sm pt-space-xs">
            <span className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/60 font-code-sm text-code-sm text-on-surface flex items-center gap-1.5">
              <span className="text-secondary font-bold">1.</span> Testes automatizados
            </span>
            <span className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/60 font-code-sm text-code-sm text-on-surface flex items-center gap-1.5">
              <span className="text-secondary font-bold">2.</span> Tipagem e DTOs
            </span>
            <span className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/60 font-code-sm text-code-sm text-on-surface flex items-center gap-1.5">
              <span className="text-secondary font-bold">3.</span> Extração de lógica
            </span>
            <span className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/60 font-code-sm text-code-sm text-on-surface flex items-center gap-1.5">
              <span className="text-secondary font-bold">4.</span> Refatoração de UI
            </span>
            <span className="px-3 py-1.5 rounded bg-surface-container-high border border-outline-variant/60 font-code-sm text-code-sm text-on-surface flex items-center gap-1.5">
              <span className="text-secondary font-bold">5.</span> Limpeza semântica
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}