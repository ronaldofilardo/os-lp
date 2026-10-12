import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ProcessSection } from './ProcessSection'

const TITLES = [
  'Reunião de Descoberta',
  'Planejamento & Arquitetura',
  'Desenvolvimento & Integrações',
  'Entrega, Treinamento & Suporte',
]

describe('ProcessSection', () => {
  it('lists the four steps in order', () => {
    render(<ProcessSection />)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
  })

  it('keeps each step title readable by assistive tech', () => {
    render(<ProcessSection />)
    for (const title of TITLES) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }
  })

  it('animates the letters of every step title', () => {
    const { container } = render(<ProcessSection />)
    for (const heading of Array.from(container.querySelectorAll('h3'))) {
      expect(heading.querySelectorAll('.letter-wave').length).toBeGreaterThan(5)
    }
  })

  it('keeps the section anchor used by the navigation', () => {
    const { container } = render(<ProcessSection />)
    expect(container.querySelector('#como-trabalhamos')).toBeInTheDocument()
  })
})
