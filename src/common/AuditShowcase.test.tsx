import { describe, it, expect, vi, beforeEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { REDUCED_MOTION, installMatchMedia, setIntersecting } from '@/test/mocks'
import { AuditShowcase } from './AuditShowcase'

vi.mock('@/three/LazyOnView', () => ({
  LazyOnView: ({ children }: { readonly children: ReactNode }) => <>{children}</>,
}))

vi.mock('@/three/lazy', () => ({
  LazyStrangler: ({ step }: { readonly step: number }) => <div data-testid="strangler-3d" data-step={step} />,
}))

const INTERVAL = 3800

function advance(ms: number): void {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

function stepsContainer(): HTMLElement {
  const parent = screen.getByRole('button', { name: /Varredura Sistemática/ }).parentElement
  if (!parent) throw new Error('steps container not found')
  return parent
}

describe('AuditShowcase', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('starts on the first step', () => {
    render(<AuditShowcase />)
    expect(screen.getByText('Etapa 01 // Varredura Sistemática')).toBeInTheDocument()
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '0')
  })

  it('jumps to a step when its card is clicked', () => {
    render(<AuditShowcase />)
    fireEvent.click(screen.getByRole('button', { name: /Plano Atômico/ }))
    expect(screen.getByText('Etapa 03 // Plano Atômico em 5 Passos')).toBeInTheDocument()
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '2')
    expect(screen.getByRole('button', { name: /Plano Atômico/ })).toHaveAttribute('aria-pressed', 'true')
  })

  it('does not advance while off screen', () => {
    render(<AuditShowcase />)
    advance(INTERVAL * 3)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '0')
  })

  it('advances on its own while on screen and wraps after the last step', () => {
    render(<AuditShowcase />)
    setIntersecting(true)
    advance(INTERVAL)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '1')
    advance(INTERVAL * 3)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '0')
  })

  it('pauses while a mouse hovers the steps and resumes after it leaves', () => {
    render(<AuditShowcase />)
    setIntersecting(true)
    fireEvent.pointerEnter(stepsContainer(), { pointerType: 'mouse' })
    advance(INTERVAL * 3)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '0')
    fireEvent.pointerLeave(stepsContainer(), { pointerType: 'mouse' })
    advance(INTERVAL)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '1')
  })

  it('does NOT get stuck paused after a touch (regression)', () => {
    render(<AuditShowcase />)
    setIntersecting(true)
    fireEvent.pointerEnter(stepsContainer(), { pointerType: 'touch' })
    advance(INTERVAL)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '1')
  })

  it('does not advance when reduced motion is requested', () => {
    installMatchMedia({ [REDUCED_MOTION]: true })
    render(<AuditShowcase />)
    setIntersecting(true)
    advance(INTERVAL * 4)
    expect(screen.getByTestId('strangler-3d')).toHaveAttribute('data-step', '0')
  })
})
