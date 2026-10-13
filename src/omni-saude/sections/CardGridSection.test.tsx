import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CardGridSection } from './CardGridSection'
import { TextCard } from './TextCard'

describe('CardGridSection', () => {
  it('renders the title as h2 with the description', () => {
    render(
      <CardGridSection title="Por Que Usar" description="Motivos claros.">
        <TextCard title="Card A" description="Descrição A." />
      </CardGridSection>
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Por Que Usar' })).toBeInTheDocument()
    expect(screen.getByText('Motivos claros.')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Card A' })).toBeInTheDocument()
  })

  it('omits the header when no title is given', () => {
    const { container } = render(
      <CardGridSection>
        <TextCard title="Card A" description="Descrição A." />
      </CardGridSection>
    )
    expect(container.querySelector('h2')).not.toBeInTheDocument()
  })

  it('applies the anchor id and white surface', () => {
    const { container } = render(
      <CardGridSection anchorId="integration" surface="white">
        <TextCard title="Card A" description="Descrição A." />
      </CardGridSection>
    )
    const section = container.querySelector('section')
    expect(section).toHaveAttribute('id', 'integration')
    expect(section).toHaveClass('bg-white')
  })
})
