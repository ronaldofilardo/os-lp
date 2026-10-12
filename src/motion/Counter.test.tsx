import { describe, it, expect, vi, beforeEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { REDUCED_MOTION, installMatchMedia, setIntersecting } from '@/test/mocks'
import { Counter } from './Counter'

function advance(ms: number): void {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

function readNumber(text: string | null): number {
  return Number((text ?? '').replace(/[^\d,]/g, '').replace(',', '.'))
}

describe('Counter', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['requestAnimationFrame', 'cancelAnimationFrame', 'performance'] })
  })

  it('renders the final value before it is in view', () => {
    render(<Counter target={30} suffix=" anos" />)
    expect(screen.getByText('30 anos')).toBeInTheDocument()
  })

  it('counts up from zero and lands on the target', () => {
    render(<Counter target={30} suffix=" anos" durationMs={1000} />)
    setIntersecting(true)
    advance(100)
    const midway = readNumber(document.body.textContent)
    expect(midway).toBeGreaterThan(0)
    expect(midway).toBeLessThan(30)
    advance(1500)
    expect(screen.getByText('30 anos')).toBeInTheDocument()
  })

  it('formats decimals with the pt-BR comma', () => {
    render(<Counter target={99.9} decimals={1} suffix="%" durationMs={500} />)
    setIntersecting(true)
    advance(1000)
    expect(screen.getByText('99,9%')).toBeInTheDocument()
  })

  it('applies the prefix', () => {
    render(<Counter target={100} prefix="< " durationMs={500} />)
    setIntersecting(true)
    advance(1000)
    expect(screen.getByText('< 100')).toBeInTheDocument()
  })

  it('skips the animation when reduced motion is requested', () => {
    installMatchMedia({ [REDUCED_MOTION]: true })
    render(<Counter target={30} suffix=" anos" />)
    setIntersecting(true)
    advance(50)
    expect(screen.getByText('30 anos')).toBeInTheDocument()
  })
})
