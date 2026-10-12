import { describe, it, expect, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { REDUCED_MOTION, TOUCH_ONLY, installMatchMedia, setIntersecting } from '@/test/mocks'
import { MethodologyShowcase } from './MethodologyShowcase'
import { PILLARS } from './pillars'

vi.mock('@/three/LazyOnView', () => ({
  LazyOnView: ({ children }: { readonly children: ReactNode }) => <>{children}</>,
}))

vi.mock('@/three/lazy', () => ({
  LazyPillars: (props: { readonly activeIndex: number; readonly onSelect: (_index: number) => void }) => (
    <button type="button" data-testid="pillars-3d" data-active={props.activeIndex} onClick={() => props.onSelect(3)}>
      3d
    </button>
  ),
}))

function cardOf(title: string): Element {
  const card = screen.getByRole('heading', { name: title }).closest('[tabindex]')
  if (!card) throw new Error(`card not found: ${title}`)
  return card
}

function advance(ms: number): void {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

describe('MethodologyShowcase', () => {
  it('renders the four pillar cards with the first one active', () => {
    render(<MethodologyShowcase />)
    for (const pillar of PILLARS) {
      expect(screen.getByRole('heading', { name: pillar.title })).toBeInTheDocument()
    }
    expect(screen.getByText('Pilar 01 // ativo')).toBeInTheDocument()
    expect(screen.getByTestId('pillars-3d')).toHaveAttribute('data-active', '0')
  })

  it('activates the pillar of the hovered card in the 3D scene', () => {
    render(<MethodologyShowcase />)
    fireEvent.mouseEnter(cardOf('Desenvolvimento Preventivo'))
    expect(screen.getByText('Pilar 03 // ativo')).toBeInTheDocument()
    expect(screen.getByTestId('pillars-3d')).toHaveAttribute('data-active', '2')
  })

  it('activates the card when a pillar is picked in the 3D scene', () => {
    render(<MethodologyShowcase />)
    fireEvent.click(screen.getByTestId('pillars-3d'))
    expect(screen.getByText('Pilar 04 // ativo')).toBeInTheDocument()
  })

  it('cycles pillars on its own on touch-only screens', () => {
    vi.useFakeTimers()
    installMatchMedia({ [TOUCH_ONLY]: true })
    render(<MethodologyShowcase />)
    setIntersecting(true)
    advance(3200)
    expect(screen.getByText('Pilar 02 // ativo')).toBeInTheDocument()
    advance(3200)
    expect(screen.getByText('Pilar 03 // ativo')).toBeInTheDocument()
  })

  it('does not cycle while off screen', () => {
    vi.useFakeTimers()
    installMatchMedia({ [TOUCH_ONLY]: true })
    render(<MethodologyShowcase />)
    advance(10000)
    expect(screen.getByText('Pilar 01 // ativo')).toBeInTheDocument()
  })

  it('leaves desktop users in control (no auto cycle with hover support)', () => {
    vi.useFakeTimers()
    render(<MethodologyShowcase />)
    setIntersecting(true)
    advance(10000)
    expect(screen.getByText('Pilar 01 // ativo')).toBeInTheDocument()
  })

  it('does not cycle when reduced motion is requested', () => {
    vi.useFakeTimers()
    installMatchMedia({ [TOUCH_ONLY]: true, [REDUCED_MOTION]: true })
    render(<MethodologyShowcase />)
    setIntersecting(true)
    advance(10000)
    expect(screen.getByText('Pilar 01 // ativo')).toBeInTheDocument()
  })
})
