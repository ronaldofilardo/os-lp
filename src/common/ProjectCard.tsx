import type { ProjectDTO } from '@/types'
import { TiltCard } from '@/motion/TiltCard'
import { firstSentence } from './firstSentence'
import { isInternalHref, ProjectLink } from './ProjectLink'
import { sectorColorMapLight, statusDotMapLight } from './projectStyles'

interface ProjectCardProps {
  readonly project: ProjectDTO
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const sectorColors = sectorColorMapLight[project.sectorColor]
  const isInternal = project.url !== undefined && isInternalHref(project.url)

  return (
    <TiltCard className="h-full rounded-2xl">
      <div className="skeuo-card h-full rounded-2xl overflow-hidden flex flex-col hover:border-sky-300 transition-all duration-200">
        <div className="h-32 md:h-40 bg-[#f8fafc] flex items-center justify-center p-4 border-b border-slate-100 relative text-center overflow-hidden group">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-sky-100 via-transparent to-emerald-100" />
          {project.video ? (
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              {project.url ? (
                <ProjectLink
                  href={project.url}
                  className="flex items-center justify-center w-full h-full"
                  ariaLabel={`Acessar ${project.displayName}`}
                >
                  <video
                    src={project.video}
                    poster={project.logo}
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="auto"
                    aria-label={`Demonstração ${project.displayName}`}
                    className="max-h-24 md:max-h-28 max-w-[85%] object-contain rounded transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                  />
                </ProjectLink>
              ) : (
                <video
                  src={project.video}
                  poster={project.logo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  aria-label={`Demonstração ${project.displayName}`}
                  className="max-h-24 md:max-h-28 max-w-[85%] object-contain rounded transition-transform duration-300 group-hover:scale-105 drop-shadow-sm"
                />
              )}
            </div>
          ) : project.logo ? (
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              {project.url ? (
                <ProjectLink
                  href={project.url}
                  className="flex items-center justify-center w-full h-full"
                  ariaLabel={`Acessar ${project.displayName}`}
                >
                  <img
                    src={project.logo}
                    alt={`Logo ${project.displayName}`}
                    className="max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded"
                  />
                </ProjectLink>
              ) : (
                <img
                  src={project.logo}
                  alt={`Logo ${project.displayName}`}
                  className="max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded"
                />
              )}
            </div>
          ) : (
            <div className="relative z-10 flex flex-col items-center justify-center">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-slate-400 text-[32px] mb-1">
                query_stats
              </span>
              <span className="text-sm text-slate-500">Sistema Sob Medida</span>
            </div>
          )}
          <span className="absolute top-3 right-3 flex items-center gap-1.5 text-xs text-slate-600 z-20 bg-white/90 px-2 py-0.5 rounded backdrop-blur-sm border border-slate-200">
            <span className={`w-2 h-2 rounded-full ${statusDotMapLight[project.statusVariant]}`} />
            {project.statusLabel}
          </span>
        </div>
        <div className="p-space-lg flex flex-col gap-space-sm">
          <div className="flex items-center justify-between gap-2">
            {project.url ? (
              <ProjectLink
                href={project.url}
                className="text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors inline-flex items-center gap-1.5 group/link"
              >
                <span>{project.displayName}</span>
                <span
                  aria-hidden="true"
                  translate="no"
                  className="material-symbols-outlined text-[16px] text-slate-400 group-hover/link:text-sky-600 transition-colors"
                >
                  {isInternal ? 'arrow_forward' : 'open_in_new'}
                </span>
              </ProjectLink>
            ) : (
              <span className="text-lg font-semibold text-slate-900">{project.displayName}</span>
            )}
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border uppercase tracking-wide shrink-0 ${sectorColors}`}>
              {project.sectorLabel}
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{firstSentence(project.summary)}</p>
          {project.url && (
            <ProjectLink
              href={project.url}
              className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:underline mt-1 w-fit"
            >
              <span>{isInternal ? 'Ver landing page' : 'Acessar plataforma'}</span>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[14px]">
                {isInternal ? 'arrow_forward' : 'arrow_outward'}
              </span>
            </ProjectLink>
          )}
        </div>
      </div>
    </TiltCard>
  )
}
