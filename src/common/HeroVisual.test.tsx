import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import { setIntersecting, setMedia } from '@/test/mocks'
import { HeroVisual } from './HeroVisual'

vi.mock('@/three/lazy', () => ({
  LazyHeroCore: () => <div data-testid="hero-core-3d" />,
}))

const MOBILE_QUERY = '(max-width: 767px)'

beforeEach(() => {
  vi.stubGlobal(
    'requestIdleCallback',
    (callback: () => void): number => {
      callback()
      return 1
    },
  )
})

describe('HeroVisual', () => {
  it('shows the animated placeholder until the 3D scene is needed', () => {
    const { container } = render(<HeroVisual />)
    expect(screen.queryByTestId('hero-core-3d')).not.toBeInTheDocument()
    expect(container.querySelector('.css-cube')).toBeInTheDocument()
  })

  it('mounts the 3D core once it is on screen', () => {
    render(<HeroVisual />)
    setIntersecting(true)
    expect(screen.getByTestId('hero-core-3d')).toBeInTheDocument()
  })

  it('keeps a static layout and never mounts the 3D scene on mobile', () => {
    const { container } = render(<HeroVisual />)
    setMedia(MOBILE_QUERY, true)
    setIntersecting(true)
    expect(screen.queryByTestId('hero-core-3d')).not.toBeInTheDocument()
    expect(container.querySelector('.css-cube')).toBeInTheDocument()
  })

  it('renders the HUD chips and the process badge', () => {
    render(<HeroVisual />)
    expect(screen.getByText('any: 0')).toBeInTheDocument()
    expect(screen.getByText('LOC < 100')).toBeInTheDocument()
    expect(screen.getByText('ASD-STE100 ✓')).toBeInTheDocument()
    expect(screen.getByText('ISO/IEC 25010')).toBeInTheDocument()
    expect(screen.queryByText('100% CONFORME')).not.toBeInTheDocument()
  })
})
