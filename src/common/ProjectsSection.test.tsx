import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { getAllProjectsDTO } from '@/utils/adapter'
import { setIntersecting } from '@/test/mocks'
import { ProjectsSection } from './ProjectsSection'

describe('ProjectsSection', () => {
  it('renders the section heading and the anchor target', () => {
    const { container } = render(<ProjectsSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Resultados reais para empresas como a sua' })).toBeInTheDocument()
    expect(container.querySelector('section#projetos')).toBeInTheDocument()
  })

  it('renders one card per project', () => {
    render(<ProjectsSection />)
    for (const project of getAllProjectsDTO()) {
      expect(screen.getByText(project.displayName)).toBeInTheDocument()
    }
  })

  it('lays the cards out as a swipeable carousel on mobile and a grid on desktop', () => {
    const { container } = render(<ProjectsSection />)
    const track = container.querySelector('.snap-x')
    expect(track).toBeInTheDocument()
    expect(track).toHaveClass('overflow-x-auto', 'md:grid')
  })

  it('shows the swipe hint only on small screens', () => {
    render(<ProjectsSection />)
    expect(screen.getByText(/deslize para ver os projetos/)).toHaveClass('md:hidden')
  })

  it('reveals a card that swipes into view', () => {
    const { container } = render(<ProjectsSection />)
    expect(container.querySelectorAll('.reveal-in')).toHaveLength(0)
    setIntersecting(true)
    expect(container.querySelectorAll('.reveal-in').length).toBeGreaterThan(0)
  })
})
