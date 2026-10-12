import { getAllProjectsDTO } from '@/utils/adapter'
import { Reveal } from '@/motion/Reveal'
import { ProjectCard } from './ProjectCard'
import { SectionHeader } from './SectionHeader'

const TRACK_CLASS =
  '-mx-margin-mobile px-margin-mobile flex gap-space-md overflow-x-auto snap-x snap-mandatory pb-space-sm no-scrollbar ' +
  'md:mx-0 md:px-0 md:pb-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-space-lg md:overflow-visible'

export function ProjectsSection(): React.JSX.Element {
  const projects = getAllProjectsDTO()

  return (
    <section className="w-full py-space-lg md:py-space-xl bg-white" id="projetos">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Cases e Portfólio"
          title="Resultados reais para empresas como a sua"
          description="Sistemas em produção que resolveram problemas concretos de gestão, cobrança e operação."
          theme="light"
        />
        <div
          className={TRACK_CLASS}
          role="region"
          aria-label="Projetos em destaque"
          tabIndex={0}
        >
          {projects.map((project, index) => (
            <Reveal key={project.id} delayMs={(index % 3) * 100} threshold={0} className="h-full w-[82%] shrink-0 snap-center md:w-auto">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
        <p className="md:hidden mt-space-sm text-center text-sm text-slate-500">← deslize para ver os projetos →</p>
      </div>
    </section>
  )
}
