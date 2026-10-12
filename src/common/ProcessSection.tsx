import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'
import { AnimatedLetters } from './AnimatedLetters'

interface Step {
  readonly number: string
  readonly icon: string
  readonly title: string
  readonly description: string
}

const STEPS: readonly Step[] = [
  {
    number: '01',
    icon: 'forum',
    title: 'Reunião de Descoberta',
    description: 'Conversa inicial sem compromisso para mapear seus processos, gargalos e necessidades reais da operação.',
  },
  {
    number: '02',
    icon: 'draw',
    title: 'Planejamento & Arquitetura',
    description: 'Apresentação da solução em linguagem simples e clara, com prazos e escopo bem definidos antes de começar.',
  },
  {
    number: '03',
    icon: 'code',
    title: 'Desenvolvimento & Integrações',
    description: 'Construção do sistema com validações periódicas e integração das APIs necessárias (Asaas, bancos, ERPs).',
  },
  {
    number: '04',
    icon: 'support_agent',
    title: 'Entrega, Treinamento & Suporte',
    description: 'Colocação em operação assistida, treinamento da sua equipe e acompanhamento contínuo pós-entrega.',
  },
] as const

export function ProcessSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-[#f0f9ff] border-y border-sky-100" id="como-trabalhamos">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Como Trabalhamos"
          title="Simples do primeiro contato à entrega"
          description="Um processo transparente em 4 etapas, pensado para gestores que querem resultados sem complicação."
          theme="light"
          tone="primary"
          maxWidthClass="max-w-2xl"
        />
        <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg list-none m-0 p-0 relative">
          {STEPS.map((step, index) => (
            <li key={step.number} className="h-full">
              <Reveal delayMs={index * 100} className="h-full">
                <div className="skeuo-card relative h-full rounded-2xl p-space-lg flex flex-col gap-space-sm hover:-translate-y-1 transition-all duration-200">
                  <div className="flex items-center justify-between mb-1">
                    <span className="pop-icon skeuo-chip w-12 h-12 rounded-xl text-sky-600 flex items-center justify-center">
                      <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{step.icon}</span>
                    </span>
                    <span className="text-4xl font-bold text-sky-100 leading-none tabular-nums" aria-hidden="true">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900"><AnimatedLetters text={step.title} offset={index * 6} /></h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
