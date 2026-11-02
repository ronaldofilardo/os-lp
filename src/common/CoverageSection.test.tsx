import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CoverageSection } from './CoverageSection'

describe('CoverageSection', () => {
  it('displays the standardized technical history since 1996', () => {
    render(<CoverageSection />)
    expect(screen.getByText(/histórico técnico desde 1996/i)).toBeInTheDocument()
  })

  it('renders all three coverage differential pillars', () => {
    render(<CoverageSection />)
    expect(screen.getByText('Engenharia Remota de Alta Agilidade')).toBeInTheDocument()
    expect(screen.getByText('Imersão Presencial In Loco')).toBeInTheDocument()
    expect(screen.getByText('Empresa Verificada no Google')).toBeInTheDocument()
  })
})

