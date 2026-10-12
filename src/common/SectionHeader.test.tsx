import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SectionHeader } from './SectionHeader'

describe('SectionHeader', () => {
  it('renders the eyebrow, the title as h2 and the description', () => {
    render(<SectionHeader eyebrow="// Teste" title="Título" description="Descrição curta" />)
    expect(screen.getByText('// Teste')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Título' })).toBeInTheDocument()
    expect(screen.getByText('Descrição curta')).toBeInTheDocument()
  })

  it('omits the paragraph when there is no description', () => {
    const { container } = render(<SectionHeader eyebrow="// Teste" title="Título" />)
    expect(container.querySelector('p')).not.toBeInTheDocument()
  })

  it('colors the eyebrow by tone', () => {
    render(<SectionHeader eyebrow="// Erro" title="Título" tone="error" />)
    expect(screen.getByText('// Erro')).toHaveClass('text-error')
  })

  it('defaults to the primary tone and the compact bottom margin', () => {
    const { container } = render(<SectionHeader eyebrow="// Padrão" title="Título" />)
    expect(screen.getByText('// Padrão')).toHaveClass('text-primary')
    expect(container.firstElementChild).toHaveClass('mb-space-md', 'md:mb-space-xl')
  })
})
