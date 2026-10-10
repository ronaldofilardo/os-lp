import type { ProjectDTO } from '@/types'

interface ProjectCardProps {
  readonly project: ProjectDTO
}

const sectorColorMap = {
  primary: 'bg-primary/10 text-primary border-primary/30',
  secondary: 'bg-secondary/10 text-secondary border-secondary/30',
  tertiary: 'bg-tertiary-container/20 text-on-surface border-tertiary-container/40',
} as const

export function ProjectCard({ project }: ProjectCardProps): JSX.Element {
  const sectorColors = sectorColorMap[project.sectorColor]

  return (
    <div className="rounded-lg bg-surface-container-low border border-outline-variant/50 overflow-hidden flex flex-col justify-between hover:border-primary/50 transition-all duration-200">
      <div>
        <div className="h-44 bg-surface-container-lowest flex flex-col items-center justify-center p-4 border-b border-outline-variant/30 relative text-center">
          <span className="material-symbols-outlined text-outline text-[32px] mb-1">query_stats</span>
          <span className="font-code-sm text-code-sm text-on-surface font-medium">Mockup do projeto</span>
          <span className="font-code-sm text-code-sm text-on-surface-variant">{project.techTags.slice(0, 2).join(' • ')}</span>
        </div>
        <div className="p-space-lg flex flex-col gap-space-sm">
          <div className="flex items-center justify-between">
            <span className="font-headline-md text-headline-md text-on-surface">{project.displayName}</span>
            <span className={`font-label-caps text-label-caps px-2 py-0.5 rounded ${sectorColors} font-semibold uppercase`}>
              {project.sectorLabel}
            </span>
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant" style={{ lineHeight: 1.6 }}>
            <strong className="text-on-surface">Objetivo:</strong> {project.summary.split(' ').slice(0, 20).join(' ')}...
          </p>
        </div>
      </div>
    </div>
  )
}