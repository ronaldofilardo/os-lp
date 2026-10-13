import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AudienceSplit } from './AudienceSplit'
import type { SplitCard } from './AudienceSplit'

const CARDS: readonly SplitCard[] = [
  {
    tag: 'Para Pessoas & Famílias',
    title: 'Para Você e Sua Família',
    description: 'Centralize os exames da família.',
    bullets: ['Alertas automáticos'],
    ctaLabel: 'Ver detalhes para você',
    ctaHref: '/omni-saude/para-voce',
    icon: 'group',
    tone: 'emerald',
  },
  {
    tag: 'Para Laboratórios & Clínicas',
    title: 'Para Sua Empresa de Saúde',
    description: 'Elimine chamadas na recepção.',
    ctaLabel: 'Conhecer soluções',
    ctaHref: '/omni-saude/para-labs',
    icon: 'domain',
    tone: 'sky',
  },
]

describe('AudienceSplit', () => {
  it('renders the section title as h2 and card titles as h3 by default', () => {
    render(<AudienceSplit sectionTitle="Feito para simplificar" cards={CARDS} />)
    expect(screen.getByRole('heading', { level: 2, name: 'Feito para simplificar' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Para Você e Sua Família' })).toBeInTheDocument()
  })

  it('promotes card titles to h2 when headingLevel is h2', () => {
    render(<AudienceSplit cards={CARDS} headingLevel="h2" />)
    expect(screen.getByRole('heading', { level: 2, name: 'Para Você e Sua Família' })).toBeInTheDocument()
    expect(screen.queryByRole('heading', { level: 3 })).not.toBeInTheDocument()
  })

  it('links each card to its target', () => {
    render(<AudienceSplit cards={CARDS} />)
    expect(screen.getByRole('link', { name: 'Ver detalhes para você' })).toHaveAttribute(
      'href',
      '/omni-saude/para-voce'
    )
    expect(screen.getByRole('link', { name: 'Conhecer soluções' })).toHaveAttribute(
      'href',
      '/omni-saude/para-labs'
    )
  })

  it('renders tags, bullets and icon hygiene', () => {
    render(<AudienceSplit cards={CARDS} />)
    expect(screen.getByText('Para Pessoas & Famílias')).toBeInTheDocument()
    expect(screen.getByText('Alertas automáticos')).toBeInTheDocument()
    const icon = screen.getByText('group')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('translate', 'no')
  })

  it('omits the section header when no title is given', () => {
    const { container } = render(<AudienceSplit cards={CARDS} />)
    expect(container.querySelector('h2')).not.toBeInTheDocument()
  })
})
