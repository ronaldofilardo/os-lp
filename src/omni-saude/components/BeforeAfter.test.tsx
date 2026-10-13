import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BeforeAfter } from './BeforeAfter'

const SIDES = {
  before: { label: 'Antes', description: 'Paciente chega sem exame.' },
  after: { label: 'Com OmniSaúde', description: 'Histórico disponível na tela.' },
} as const

describe('BeforeAfter', () => {
  it('renders the title as h2 and both side labels', () => {
    render(<BeforeAfter title="O que muda na sua rotina" before={SIDES.before} after={SIDES.after} />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'O que muda na sua rotina' })
    ).toBeInTheDocument()
    expect(screen.getByText('Antes')).toBeInTheDocument()
    expect(screen.getByText('Com OmniSaúde')).toBeInTheDocument()
  })

  it('renders both descriptions', () => {
    render(<BeforeAfter before={SIDES.before} after={SIDES.after} />)
    expect(screen.getByText('Paciente chega sem exame.')).toBeInTheDocument()
    expect(screen.getByText('Histórico disponível na tela.')).toBeInTheDocument()
  })

  it('paints the accent bar per side', () => {
    const { container } = render(<BeforeAfter before={SIDES.before} after={SIDES.after} />)
    expect(container.querySelector('.bg-rose-300')).toBeInTheDocument()
    expect(container.querySelector('.bg-emerald-400')).toBeInTheDocument()
  })

  it('omits the section title when it is not provided', () => {
    const { container } = render(<BeforeAfter before={SIDES.before} after={SIDES.after} />)
    expect(container.querySelector('h2')).not.toBeInTheDocument()
  })
})
