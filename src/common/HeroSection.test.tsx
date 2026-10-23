import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { HeroSection } from './HeroSection'

vi.mock('@/three/lazy', () => ({
  LazyHeroBackdrop: () => <div data-testid="backdrop-3d" />,
}))

describe('HeroSection', () => {
  it('keeps the H1 that states the offer, without repeating the brand name', () => {
    render(<HeroSection />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Sistemas Sob Medida: substitua processos manuais e softwares lentos por plataformas que escalam a sua operação.')
    expect(screen.getByRole('heading', { level: 1 })).not.toHaveTextContent(/Omni Sistemas/)
  })

  it('shows the animated operations panel next to the copy', () => {
    render(<HeroSection />)
    expect(screen.getByText('Painel de Operação')).toBeInTheDocument()
  })

  it('keeps both calls to action', () => {
    render(<HeroSection />)
    expect(screen.getByRole('link', { name: /Diagnóstico de Viabilidade/ })).toHaveAttribute('href', '#contato')
    expect(screen.getByRole('link', { name: /Entenda Como Trabalhamos/ })).toHaveAttribute('href', '#como-trabalhamos')
  })
})
