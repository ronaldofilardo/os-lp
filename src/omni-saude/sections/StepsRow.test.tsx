import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StepsRow } from './StepsRow'

const STEPS = [
  { number: '1', label: 'Passo', title: 'Laboratório libera o laudo pelo seu sistema' },
  { number: '2', label: 'Passo', title: 'O resultado chega no celular do paciente', description: 'Push instantâneo.' },
] as const

describe('StepsRow', () => {
  it('renders the section title as h2 with the description', () => {
    render(<StepsRow title="Como funciona" description="Três passos." steps={STEPS} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Como funciona' })).toBeInTheDocument()
    expect(screen.getByText('Três passos.')).toBeInTheDocument()
  })

  it('renders every step title and the optional description', () => {
    render(<StepsRow title="Como funciona" steps={STEPS} />)
    expect(screen.getByText('Laboratório libera o laudo pelo seu sistema')).toBeInTheDocument()
    expect(screen.getByText('O resultado chega no celular do paciente')).toBeInTheDocument()
    expect(screen.getByText('Push instantâneo.')).toBeInTheDocument()
  })

  it('renders the timeline in the light theme', () => {
    const { container } = render(<StepsRow title="Como funciona" steps={STEPS} />)
    expect(container.querySelector('.bg-white')).toBeInTheDocument()
  })

  it('applies the anchor id', () => {
    const { container } = render(<StepsRow title="Fluxo" anchorId="fluxo" steps={STEPS} />)
    expect(container.querySelector('section')).toHaveAttribute('id', 'fluxo')
  })
})
