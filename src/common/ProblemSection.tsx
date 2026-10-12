import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'
import { ProblemCard } from './ProblemCard'

const problems = [
  {
    icon: "edit_off",
    title: 'Rotina manual que consome horas',
    description: 'Cobranças, emissão de boletos e confirmações feitas à mão, gerando erros e inadimplência.',
  },
  {
    icon: 'hub_off',
    title: 'Sistemas desconectados',
    description: 'Informações espalhadas em planilhas que não conversam com seus programas.',
  },
  {
    icon: 'history_toggle_off',
    title: 'Sistema antigo travando a operação',
    description: 'Software legado lento, que ninguém mais sabe consertar ou atualizar.',
  },
  {
    icon: 'inventory_2',
    title: 'Soluções prontas que não encaixam',
    description: 'Softwares de prateleira caros que não atendem às particularidades do seu nicho.',
  },
] as const

export function ProblemSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-[#f8fafc] border-y border-slate-200" id="problema">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Gargalos Operacionais"
          title="Sua empresa enfrenta algum desses gargalos?"
          description="Se qualquer uma dessas situações parece familiar, um sistema bem desenhado pode devolver horas da sua semana e reduzir erros custosos."
          tone="error"
          theme="light"
          maxWidthClass="max-w-2xl"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md lg:gap-space-lg">
          {problems.map((problem, index) => (
            <Reveal key={problem.title} delayMs={index * 90} className="h-full">
              <ProblemCard icon={problem.icon} title={problem.title} description={problem.description} theme="light" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
