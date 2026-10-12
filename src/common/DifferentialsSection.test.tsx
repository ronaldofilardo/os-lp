import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DifferentialsSection } from './DifferentialsSection'

describe('DifferentialsSection', () => {
  it('renders the three differentials with their titles', () => {
    render(<DifferentialsSection />)
    expect(screen.getAllByRole('article')).toHaveLength(3)
    expect(screen.getByText('Conexão com APIs e Meios de Pagamento')).toBeInTheDocument()
    expect(screen.getByText('Diagnóstico Antes de Qualquer Linha de Código')).toBeInTheDocument()
    expect(screen.getByText('Privacidade Levada a Sério')).toBeInTheDocument()
  })

  it('gives each card its own animated background', () => {
    render(<DifferentialsSection />)
    const [api, listening, security] = screen.getAllByRole('article')
    expect(api?.querySelector('.bg-dash-flow')).toBeInTheDocument()
    expect(listening?.querySelector('.bg-eq-bar')).toBeInTheDocument()
    expect(listening?.querySelector('.bg-ripple')).toBeInTheDocument()
    expect(security?.querySelector('.bg-radar-sweep')).toBeInTheDocument()
    expect(security?.querySelector('.bg-scan-line')).toBeInTheDocument()
  })

  it('hides the decorative backgrounds from assistive tech', () => {
    render(<DifferentialsSection />)
    for (const card of screen.getAllByRole('article')) {
      expect(card.querySelector('[aria-hidden="true"]:not(.material-symbols-outlined)')).toBeInTheDocument()
    }
  })

  it('clips the animations inside the card', () => {
    render(<DifferentialsSection />)
    for (const card of screen.getAllByRole('article')) {
      expect(card).toHaveClass('relative', 'overflow-hidden')
    }
  })
})
