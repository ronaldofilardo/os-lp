import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { PageHero } from './PageHero'

describe('PageHero', () => {
  it('renders a single h1 with the optional highlight', () => {
    const { container } = render(
      <PageHero title="Seus exames" titleHighlight="no seu celular." description="Descrição." />
    )
    const h1 = screen.getByRole('heading', { level: 1, name: /Seus exames\s*no seu celular\./ })
    expect(h1).toBeInTheDocument()
    expect(container.querySelectorAll('h1')).toHaveLength(1)
  })

  it('renders the eyebrow as a technical mono label', () => {
    render(<PageHero eyebrow="Atendimento & Suporte" title="Título" />)
    expect(screen.getByText('// Atendimento & Suporte')).toHaveClass('font-label-caps', 'text-emerald-700')
  })

  it('renders the check list with icon hygiene', () => {
    render(<PageHero title="Título" checks={['Histórico unificado para toda a sua família']} />)
    expect(screen.getByText('Histórico unificado para toda a sua família')).toBeInTheDocument()
    const icon = screen.getByText('check_circle')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('translate', 'no')
  })

  it('links the primary and secondary CTAs', () => {
    render(
      <PageHero
        title="Título"
        primaryCta={{ label: 'Criar conta', href: 'https://saude.omni-sistemas.com/login' }}
        secondaryCta={{ label: 'Sou Laboratório', href: '/omni-saude/para-labs' }}
      />
    )
    const primary = screen.getByRole('link', { name: /Criar conta/ })
    expect(primary).toHaveAttribute('href', 'https://saude.omni-sistemas.com/login')
    expect(screen.getByRole('link', { name: 'Sou Laboratório' })).toHaveAttribute(
      'href',
      '/omni-saude/para-labs'
    )
  })

  it('omits optional blocks and renders the side slot', () => {
    render(
      <PageHero title="Título">
        <img src="/omni-saude/hero_app_mockup.webp" alt="Mockup" width={1024} height={1024} />
      </PageHero>
    )
    expect(screen.queryByText(/\/\/ /)).not.toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Mockup' })).toBeInTheDocument()
    expect(screen.queryByRole('link')).not.toBeInTheDocument()
  })
})
