import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TimelineStep } from './TimelineStep'

describe('TimelineStep', () => {
  it('renders the number, the label, the title and the description', () => {
    render(<TimelineStep number="1" label="Passo" title="Título" description="Descrição." />)
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('Passo')).toBeInTheDocument()
    expect(screen.getByText('Título')).toBeInTheDocument()
    expect(screen.getByText('Descrição.')).toBeInTheDocument()
  })

  it('defaults to the dark theme', () => {
    const { container } = render(
      <TimelineStep number="1" label="Etapa" title="Título" description="Texto." />
    )
    expect(container.firstElementChild).toHaveClass('bg-surface-container-low')
    expect(screen.getByText('Título')).toHaveClass('text-on-surface')
  })

  it('switches to light theme colors when theme is light', () => {
    const { container } = render(
      <TimelineStep number="2" label="Etapa" title="Título" description="Texto." theme="light" />
    )
    expect(container.firstElementChild).toHaveClass('bg-white', 'border-slate-200')
    expect(screen.getByText('Título')).toHaveClass('text-slate-900')
    expect(screen.getByText('Texto.')).toHaveClass('text-slate-600')
  })

  it('keeps the secondary palette for both themes', () => {
    const { container } = render(
      <TimelineStep number="3" label="Passo" title="Secundário" color="secondary" theme="light" />
    )
    expect(screen.getByText('Passo').parentElement).toHaveClass('text-emerald-600')
    expect(container.querySelector('.bg-emerald-100')).toBeInTheDocument()
  })

  it('omits the description paragraph when it is not provided', () => {
    const { container } = render(
      <TimelineStep number="4" label="Passo" title="Sem descrição" />
    )
    expect(container.querySelector('p')).not.toBeInTheDocument()
  })
})
