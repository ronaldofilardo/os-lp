import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoCard } from './InfoCard'

describe('InfoCard', () => {
  it('renders the title as h3 with the description', () => {
    render(<InfoCard icon="group" title="Timeline de Saúde" description="Visualize tudo." />)
    expect(screen.getByRole('heading', { level: 3, name: 'Timeline de Saúde' })).toBeInTheDocument()
    expect(screen.getByText('Visualize tudo.')).toBeInTheDocument()
  })

  it('keeps the icon accessible hygiene', () => {
    render(<InfoCard icon="schedule" title="Título" />)
    const icon = screen.getByText('schedule')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('translate', 'no')
  })

  it('lists every bullet with a check mark', () => {
    render(
      <InfoCard icon="folder" title="Arquivos" bullets={['Organização automática', 'Busca rápida']} />
    )
    expect(screen.getByText('Organização automática')).toBeInTheDocument()
    expect(screen.getByText('Busca rápida')).toBeInTheDocument()
  })

  it('applies the tone palette to the icon tile', () => {
    const { container } = render(<InfoCard icon="lock" tone="emerald" title="Segurança" />)
    expect(container.querySelector('.bg-emerald-100')).toBeInTheDocument()
    expect(screen.getByText('lock').parentElement).toHaveClass('bg-emerald-100')
  })

  it('renders children as the extra action area', () => {
    render(
      <InfoCard icon="link" title="Com link">
        <a href="/omni-saude/seguranca">Ver segurança</a>
      </InfoCard>
    )
    expect(screen.getByRole('link', { name: 'Ver segurança' })).toHaveAttribute(
      'href',
      '/omni-saude/seguranca'
    )
  })
})
