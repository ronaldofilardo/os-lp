import { describe, it, expect } from 'vitest'
import { PALETTE } from './palette'

describe('PALETTE', () => {
  it('exposes only valid hex colors', () => {
    for (const color of Object.values(PALETTE)) {
      expect(color).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })
})
