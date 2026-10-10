import { ProblemCard } from './ProblemCard'

const problems = [
  {
    icon: 'timer_off',
    title: 'Dívida técnica acumulada',
    description: 'Bases inchadas e complexidade acidental que tornam cada nova feature 3x mais lenta.',
  },
  {
    icon: 'shuffle',
    title: 'Código inconsistente',
    description: 'Múltiplos padrões no mesmo repositório, quebrando a manutenibilidade do time.',
  },
  {
    icon: 'bug_report',
    title: 'Bugs em produção',
    description: 'Vazamento de estados nulos e falhas silenciosas em runtime por ausência de contratos.',
  },
  {
    icon: 'payments',
    title: 'Custo de manutenção',
    description: 'Refatorações constantes e horas gastas apagando incêndios em vez de tracionar produto.',
  },
] as const

export function ProblemSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl bg-surface-container-lowest/50 border-y border-outline-variant/30" id="problema">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-error uppercase tracking-wider">// Dívida Oculta em Escala</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Por que código de IA sem supervisão custa caro
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            O atalho imediato promovido por copilotos sem isolamento arquitetural resulta em alucinações silenciosas, acoplamento perigoso e estagnação precoce de squads inteiros.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">
          {problems.map((p, i) => (
            <ProblemCard key={i} icon={p.icon} title={p.title} description={p.description} />
          ))}
        </div>
      </div>
    </section>
  )
}