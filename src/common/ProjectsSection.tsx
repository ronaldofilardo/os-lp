import { getAllProjectsDTO } from '@/utils/adapter'
import { ProjectCard } from './ProjectCard'

export function ProjectsSection(): React.JSX.Element {
  const projects = getAllProjectsDTO()

  return (
    <section className="w-full py-space-xl" id="projetos">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Portfólio de Engenharia</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Projetos em Destaque
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Aplicações de missão crítica projetadas com tolerância zero à falha arquitetural.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
