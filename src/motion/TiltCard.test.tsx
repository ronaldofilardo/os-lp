import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { TiltCard } from './TiltCard'

function mockBox(): void {
  vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
    left: 0, top: 0, width: 200, height: 100, right: 200, bottom: 100, x: 0, y: 0,
    toJSON: () => ({}),
  })
}

describe('TiltCard', () => {
  it('renders its children and the glare layer', () => {
    const { container } = render(<TiltCard>cartão</TiltCard>)
    expect(screen.getByText('cartão')).toBeInTheDocument()
    expect(container.querySelector('.tilt-glare')).toBeInTheDocument()
  })

  it('tilts toward the mouse pointer', () => {
    mockBox()
    render(<TiltCard maxTiltDeg={10}>cartão</TiltCard>)
    const card = screen.getByText('cartão')
    fireEvent.pointerMove(card, { pointerType: 'mouse', clientX: 200, clientY: 0 })
    expect(card.style.getPropertyValue('--ry')).toBe('10deg')
    expect(card.style.getPropertyValue('--rx')).toBe('10deg')
    expect(card.style.getPropertyValue('--mx')).toBe('100%')
  })

  it('ignores touch pointers', () => {
    mockBox()
    render(<TiltCard>cartão</TiltCard>)
    const card = screen.getByText('cartão')
    fireEvent.pointerMove(card, { pointerType: 'touch', clientX: 200, clientY: 0 })
    expect(card.style.getPropertyValue('--ry')).toBe('')
  })

  it('returns to flat when the pointer leaves', () => {
    mockBox()
    render(<TiltCard>cartão</TiltCard>)
    const card = screen.getByText('cartão')
    fireEvent.pointerMove(card, { pointerType: 'mouse', clientX: 200, clientY: 0 })
    fireEvent.pointerLeave(card)
    expect(card.style.getPropertyValue('--rx')).toBe('0deg')
    expect(card.style.getPropertyValue('--ry')).toBe('0deg')
  })
})
