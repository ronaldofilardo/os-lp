import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { REDUCED_MOTION, installMatchMedia, setIntersecting } from '@/test/mocks'
import { AUTOPLAY_MS } from '@/hooks/useScrollCarousel'
import { BenefitsCarousel, type Benefit } from './BenefitsCarousel'

const BENEFITS: readonly Benefit[] = [
  { icon: 'architecture', title: 'Primeiro', text: 'Texto um' },
  { icon: 'cable', title: 'Segundo', text: 'Texto dois' },
  { icon: 'shield_lock', title: 'Terceiro', text: 'Texto três' },
  { icon: 'groups', title: 'Quarto', text: 'Texto quatro' },
]

const SLIDE_STEP = 100
const scrollTo = vi.fn()
const saved = new Map<string, PropertyDescriptor | undefined>()

function stub(target: object, name: string, descriptor: PropertyDescriptor): void {
  saved.set(name, Object.getOwnPropertyDescriptor(target, name))
  Object.defineProperty(target, name, { configurable: true, ...descriptor })
}

beforeEach(() => {
  scrollTo.mockClear()
  stub(HTMLElement.prototype, 'offsetLeft', {
    get(this: HTMLElement) {
      return Array.from(this.parentElement?.children ?? []).indexOf(this) * SLIDE_STEP
    },
  })
  stub(Element.prototype, 'scrollWidth', { get: function (this: Element) { return this.tagName === 'UL' ? 400 : 0 } })
  stub(Element.prototype, 'clientWidth', { get: function (this: Element) { return this.tagName === 'UL' ? 100 : 0 } })
  stub(Element.prototype, 'scrollTo', { value: scrollTo, writable: true })
})

afterEach(() => {
  for (const [name, descriptor] of saved) {
    const target = name === 'offsetLeft' ? HTMLElement.prototype : Element.prototype
    if (descriptor) Object.defineProperty(target, name, descriptor)
    else delete (target as unknown as Record<string, unknown>)[name]
  }
  saved.clear()
})

function advance(ms: number): void {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

describe('BenefitsCarousel', () => {
  it('renders every slide, a dot per slide and a pause button', () => {
    render(<BenefitsCarousel benefits={BENEFITS} />)
    expect(screen.getAllByRole('listitem')).toHaveLength(4)
    expect(screen.getAllByRole('button', { name: /Ir para o motivo/ })).toHaveLength(4)
    expect(screen.getByRole('button', { name: 'Pausar carrossel' })).toBeInTheDocument()
    for (const benefit of BENEFITS) expect(screen.getByText(benefit.title)).toBeInTheDocument()
  })

  it('is announced as a carousel', () => {
    render(<BenefitsCarousel benefits={BENEFITS} />)
    expect(screen.getByRole('group', { name: /Quatro motivos/ })).toHaveAttribute('aria-roledescription', 'carrossel')
  })

  it('scrolls to a slide when its dot is clicked', () => {
    render(<BenefitsCarousel benefits={BENEFITS} />)
    fireEvent.click(screen.getByRole('button', { name: 'Ir para o motivo 3' }))
    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ left: 2 * SLIDE_STEP }))
  })

  it('scrolls to a neighbouring slide when it is clicked', () => {
    render(<BenefitsCarousel benefits={BENEFITS} />)
    fireEvent.click(screen.getAllByRole('listitem')[1] as HTMLElement)
    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ left: SLIDE_STEP }))
  })

  it('advances on its own while it is on screen', () => {
    vi.useFakeTimers()
    render(<BenefitsCarousel benefits={BENEFITS} />)
    setIntersecting(true)
    advance(AUTOPLAY_MS)
    expect(scrollTo).toHaveBeenCalledWith(expect.objectContaining({ left: SLIDE_STEP }))
  })

  it('does not advance while it is off screen', () => {
    vi.useFakeTimers()
    render(<BenefitsCarousel benefits={BENEFITS} />)
    advance(AUTOPLAY_MS * 2)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('stops advancing when paused and resumes when played again', () => {
    vi.useFakeTimers()
    render(<BenefitsCarousel benefits={BENEFITS} />)
    setIntersecting(true)
    fireEvent.click(screen.getByRole('button', { name: 'Pausar carrossel' }))
    advance(AUTOPLAY_MS * 2)
    expect(scrollTo).not.toHaveBeenCalled()
    fireEvent.click(screen.getByRole('button', { name: 'Reproduzir carrossel' }))
    advance(AUTOPLAY_MS)
    expect(scrollTo).toHaveBeenCalledTimes(1)
  })

  it('never autoplays for users who prefer reduced motion', () => {
    installMatchMedia({ [REDUCED_MOTION]: true })
    vi.useFakeTimers()
    render(<BenefitsCarousel benefits={BENEFITS} />)
    setIntersecting(true)
    advance(AUTOPLAY_MS * 2)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('shows the progress bar only on the active dot', () => {
    const { container } = render(<BenefitsCarousel benefits={BENEFITS} />)
    expect(container.querySelectorAll('.bn-progress')).toHaveLength(1)
  })
})
