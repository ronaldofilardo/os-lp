import { describe, it, expect } from 'vitest'
import { nextStep } from './useAutoStep'

describe('nextStep', () => {
  it('advances by one', () => {
    expect(nextStep(0, 4)).toBe(1)
    expect(nextStep(2, 4)).toBe(3)
  })

  it('wraps around after the last step', () => {
    expect(nextStep(3, 4)).toBe(0)
  })
})
