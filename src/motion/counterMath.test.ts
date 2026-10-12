import { describe, it, expect } from 'vitest'
import { easeOutCubic, formatCount } from './counterMath'

describe('easeOutCubic', () => {
  it('starts at 0 and ends at 1', () => {
    expect(easeOutCubic(0)).toBe(0)
    expect(easeOutCubic(1)).toBe(1)
  })

  it('moves faster than linear at the start', () => {
    expect(easeOutCubic(0.5)).toBeCloseTo(0.875, 5)
  })

  it('never decreases', () => {
    let previous = 0
    for (let step = 1; step <= 20; step += 1) {
      const current = easeOutCubic(step / 20)
      expect(current).toBeGreaterThanOrEqual(previous)
      previous = current
    }
  })
})

describe('formatCount', () => {
  it('formats integers without decimals', () => {
    expect(formatCount(29, 0)).toBe('29')
    expect(formatCount(0, 0)).toBe('0')
  })

  it('uses the pt-BR decimal comma', () => {
    expect(formatCount(99.9, 1)).toBe('99,9')
  })

  it('uses the pt-BR thousands separator', () => {
    expect(formatCount(1500, 0)).toBe('1.500')
  })
})
