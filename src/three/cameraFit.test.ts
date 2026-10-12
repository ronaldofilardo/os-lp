import { describe, it, expect } from 'vitest'
import { fitFactor } from './cameraFit'

const STRANGLER_ASPECT = 1.55

describe('fitFactor', () => {
  it('keeps the camera untouched on wide panels', () => {
    expect(fitFactor(900, 450, STRANGLER_ASPECT)).toBe(1)
  })

  it('keeps the camera untouched when the panel matches the design aspect', () => {
    expect(fitFactor(620, 400, STRANGLER_ASPECT)).toBe(1)
  })

  it('pulls the camera back on narrow panels', () => {
    expect(fitFactor(300, 300, STRANGLER_ASPECT)).toBeCloseTo(1.55, 5)
  })

  it('pulls back more as the panel gets narrower', () => {
    const portrait = fitFactor(300, 600, STRANGLER_ASPECT)
    const square = fitFactor(300, 300, STRANGLER_ASPECT)
    expect(portrait).toBeGreaterThan(square)
  })

  it('never returns less than 1', () => {
    for (const width of [100, 390, 800, 1600]) {
      expect(fitFactor(width, 400, 1.3)).toBeGreaterThanOrEqual(1)
    }
  })

  it('stays finite when the height is zero', () => {
    expect(Number.isFinite(fitFactor(300, 0, 1.3))).toBe(true)
  })
})
