import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { getAllProjectsDTO } from '@/utils/adapter'
import { firstSentence } from './firstSentence'
import { ProjectCard } from './ProjectCard'

const [project] = getAllProjectsDTO()

describe('ProjectCard', () => {
  it('shows the name, sector and status', () => {
    if (!project) throw new Error('missing project fixture')
    render(<ProjectCard project={project} />)
    expect(screen.getByText(project.displayName)).toBeInTheDocument()
    expect(screen.getByText(project.sectorLabel)).toBeInTheDocument()
    expect(screen.getByText(project.statusLabel)).toBeInTheDocument()
  })

  it('shows only the first sentence of the summary', () => {
    if (!project) throw new Error('missing project fixture')
    const { container } = render(<ProjectCard project={project} />)
    const first = firstSentence(project.summary)
    expect(screen.getByText(first)).toBeInTheDocument()
    const rest = project.summary.slice(first.length).trim()
    if (rest) expect(container).not.toHaveTextContent(rest.slice(0, 40))
  })

  it('hides technology tags on the commercial home page', () => {
    if (!project) throw new Error('missing project fixture')
    const { container } = render(<ProjectCard project={project} />)
    const tags = container.querySelectorAll('ul > li')
    expect(tags.length).toBe(0)
  })

  it('renders the project logo when available', () => {
    if (!project) throw new Error('missing project fixture')
    render(<ProjectCard project={project} />)
    expect(screen.getByAltText(`Logo ${project.displayName}`)).toBeInTheDocument()
  })

  it('renders the fallback icon when project has no logo', () => {
    const noLogoProject = getAllProjectsDTO().find((p) => !p.logo)
    if (!noLogoProject) throw new Error('missing no-logo project fixture')
    render(<ProjectCard project={noLogoProject} />)
    expect(screen.getByText('Sistema Sob Medida')).toBeInTheDocument()
  })
})
