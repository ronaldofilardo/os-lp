import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HomeHero } from './HomeHero'
import { OMNISAUDE_APP_LOGIN } from '@/omni-saude/data/navigation'

describe('HomeHero', () => {
  it('renders a single h1 with the highlight', () => {
    const { container } = render(<HomeHero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Seus exames, laudos e receitas\s*no seu celular\./ })
    ).toBeInTheDocument()
    expect(container.querySelectorAll('h1')).toHaveLength(1)
  })

  it('renders the app preview and the badge', () => {
    render(<HomeHero />)
    expect(screen.getByRole('img', { name: /Prévia do aplicativo OmniSaúde/ })).toBeInTheDocument()
    expect(screen.getByText('Privacidade Total')).toBeInTheDocument()
    expect(screen.getByText('Você escolhe quem acessa')).toBeInTheDocument()
  })

  it('links both hero CTAs', () => {
    render(<HomeHero />)
    expect(screen.getByRole('link', { name: /Criar minha conta grátis/ })).toHaveAttribute('href', OMNISAUDE_APP_LOGIN)
    expect(screen.getByRole('link', { name: 'Sou Laboratório ou Clínica' })).toHaveAttribute('href', '/omni-saude/para-labs')
  })

  it('renders the checklist claims', () => {
    render(<HomeHero />)
    expect(screen.getByText('Histórico unificado para toda a sua família')).toBeInTheDocument()
    expect(screen.getByText('Proteção máxima de dados (LGPD + Criptografia)')).toBeInTheDocument()
  })
})
