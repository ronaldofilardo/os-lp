import { describe, it, expect } from 'vitest'
import { createRandom } from './random'

function sample(seed: number, count: number): readonly number[] {
  const random = createRandom(seed)
  return Array.from({ length: count }, () => random())
}

describe('createRandom', () => {
  it('repeats the same sequence for the same seed', () => {
    expect(sample(2026, 50)).toEqual(sample(2026, 50))
  })

  it('changes the sequence for a different seed', () => {
    expect(sample(1, 10)).not.toEqual(sample(2, 10))
  })

  it('stays inside [0, 1)', () => {
    for (const value of sample(7, 1000)) {
      expect(value).toBeGreaterThanOrEqual(0)
      expect(value).toBeLessThan(1)
    }
  })
})
