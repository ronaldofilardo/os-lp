import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FinalCta } from './FinalCta'

describe('FinalCta', () => {
  it('renders the title as h2 with the description', () => {
    render(
      <FinalCta
        title="Pronto para ter seu histórico médico sempre à mão?"
        description="Crie sua conta em menos de 2 minutos."
        primaryCta={{ label: 'Criar minha conta grátis agora', href: 'https://saude.omni-sistemas.com/login' }}
      />
    )
    expect(
      screen.getByRole('heading', { level: 2, name: 'Pronto para ter seu histórico médico sempre à mão?' })
    ).toBeInTheDocument()
    expect(screen.getByText('Crie sua conta em menos de 2 minutos.')).toBeInTheDocument()
  })

  it('links the primary CTA and the optional secondary CTA', () => {
    render(
      <FinalCta
        title="Título"
        primaryCta={{ label: 'Criar conta', href: 'https://saude.omni-sistemas.com/login' }}
        secondaryCta={{ label: 'Para Médicos', href: '/omni-saude/medicos' }}
      />
    )
    expect(screen.getByRole('link', { name: /Criar conta/ })).toHaveAttribute(
      'href',
      'https://saude.omni-sistemas.com/login'
    )
    expect(screen.getByRole('link', { name: 'Para Médicos' })).toHaveAttribute(
      'href',
      '/omni-saude/medicos'
    )
  })

  it('keeps a single heading and the gradient band', () => {
    const { container } = render(
      <FinalCta title="Título" primaryCta={{ label: 'Criar conta', href: '/login' }} />
    )
    expect(container.querySelectorAll('h2')).toHaveLength(1)
    expect(container.querySelector('.from-emerald-700')).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /Secundário/ })).not.toBeInTheDocument()
  })
})
