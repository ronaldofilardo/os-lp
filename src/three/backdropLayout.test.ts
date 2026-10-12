import { describe, it, expect } from 'vitest'
import { BACKDROP_SHAPES } from './backdropLayout'

const IT_KINDS = ['server', 'database', 'chip', 'cloud', 'cube']

describe('BACKDROP_SHAPES', () => {
  it('only uses information-technology shapes', () => {
    for (const shape of BACKDROP_SHAPES) expect(IT_KINDS).toContain(shape.kind)
  })

  it('uses every shape kind at least once', () => {
    for (const kind of IT_KINDS) expect(BACKDROP_SHAPES.some((shape) => shape.kind === kind)).toBe(true)
  })

  it('has unique render keys', () => {
    const keys = BACKDROP_SHAPES.map((shape) => `${shape.kind}-${shape.position[0]}`)
    expect(new Set(keys).size).toBe(keys.length)
  })

  it('has valid sizes and colours', () => {
    for (const shape of BACKDROP_SHAPES) {
      expect(shape.size).toBeGreaterThan(0)
      expect(shape.color).toMatch(/^#[0-9a-f]{6}$/i)
    }
  })

  it('keeps shapes behind the content plane', () => {
    for (const shape of BACKDROP_SHAPES) expect(shape.position[2]).toBeLessThan(0)
  })
})
