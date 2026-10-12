import type { ProjectDTO } from '@/types'
import { TiltCard } from '@/motion/TiltCard'
import { firstSentence } from './firstSentence'
import { sectorColorMapLight, statusDotMapLight } from './projectStyles'

interface ProjectCardProps {
  readonly project: ProjectDTO
}

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const sectorColors = sectorColorMapLight[project.sectorColor]

  return (
    <TiltCard className="h-full rounded-2xl">
      <div className="skeuo-card h-full rounded-2xl overflow-hidden flex flex-col hover:border-sky-300 transition-all duration-200">
        <div className="h-32 md:h-40 bg-[#f8fafc] flex items-center justify-center p-4 border-b border-slate-100 relative text-center overflow-hidden group">
          <div className="absolute inset-0 opacity-30 bg-gradient-to-br from-sky-100 via-transparent to-emerald-100" />
          {project.logo ? (
            <div className="relative z-10 w-full h-full flex items-center justify-center p-2">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full h-full"
                  aria-label={`Acessar ${project.displayName}`}
                >
                  <img
                    src={project.logo}
                    alt={`Logo ${project.displayName}`}
                    className="max-h-20 max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105 drop-shadow-sm rounded"
                  />
                </a>
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
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold text-slate-900 hover:text-sky-600 transition-colors inline-flex items-center gap-1.5 group/link"
              >
                <span>{project.displayName}</span>
                <span
                  aria-hidden="true"
                  translate="no"
                  className="material-symbols-outlined text-[16px] text-slate-400 group-hover/link:text-sky-600 transition-colors"
                >
                  open_in_new
                </span>
              </a>
            ) : (
              <span className="text-lg font-semibold text-slate-900">{project.displayName}</span>
            )}
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded border uppercase tracking-wide shrink-0 ${sectorColors}`}>
              {project.sectorLabel}
            </span>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">{firstSentence(project.summary)}</p>
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:underline mt-1 w-fit"
            >
              <span>Acessar plataforma</span>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[14px]">
                arrow_outward
              </span>
            </a>
          )}
        </div>
      </div>
    </TiltCard>
  )
}
