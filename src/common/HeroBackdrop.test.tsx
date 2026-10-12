import { describe, it, expect, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { installMatchMedia } from '@/test/mocks'
import { HeroBackdrop } from './HeroBackdrop'

vi.mock('@/three/lazy', () => ({
  LazyHeroBackdrop: () => <div data-testid="backdrop-3d" />,
}))

const MOBILE_QUERY = '(max-width: 767px)'

describe('HeroBackdrop', () => {
  it('waits a moment before mounting the 3D scene', () => {
    vi.useFakeTimers()
    render(<HeroBackdrop />)
    expect(screen.queryByTestId('backdrop-3d')).not.toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(400)
    })
    expect(screen.getByTestId('backdrop-3d')).toBeInTheDocument()
  })

  it('is decorative: hidden from assistive tech and ignores pointer events', () => {
    vi.useFakeTimers()
    const { container } = render(<HeroBackdrop />)
    act(() => {
      vi.advanceTimersByTime(400)
    })
    const layer = container.firstElementChild
    expect(layer).toHaveAttribute('aria-hidden', 'true')
    expect(layer).toHaveClass('pointer-events-none')
  })

  it('never mounts the 3D scene on mobile', () => {
    installMatchMedia({ [MOBILE_QUERY]: true })
    vi.useFakeTimers()
    const { container } = render(<HeroBackdrop />)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.queryByTestId('backdrop-3d')).not.toBeInTheDocument()
    expect(container).toBeEmptyDOMElement()
  })
})
