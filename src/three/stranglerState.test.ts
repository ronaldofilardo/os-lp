import { describe, it, expect } from 'vitest'
import {
  GRID_COLUMNS,
  GRID_ROWS,
  MODULE_COUNT,
  conversionOrder,
  isViolation,
  legacyHeight,
  resolveModule,
  type ModuleState,
} from './stranglerState'

function countStates(step: number): Record<ModuleState, number> {
  const counts: Record<ModuleState, number> = { legacy: 0, violation: 0, converted: 0, governed: 0 }
  for (let index = 0; index < MODULE_COUNT; index += 1) {
    counts[resolveModule(step, index, MODULE_COUNT).state] += 1
  }
  return counts
}

describe('stranglerState', () => {
  it('derives the module count from the grid size', () => {
    expect(MODULE_COUNT).toBe(GRID_COLUMNS * GRID_ROWS)
  })

  it('visits every conversion slot exactly once', () => {
    const slots = new Set<number>()
    for (let index = 0; index < MODULE_COUNT; index += 1) {
      slots.add(conversionOrder(index, MODULE_COUNT))
    }
    expect(slots.size).toBe(MODULE_COUNT)
  })

  it('flags some, but not all, modules as violations', () => {
    const flagged = Array.from({ length: MODULE_COUNT }, (_, index) => index).filter(isViolation)
    expect(flagged.length).toBeGreaterThan(0)
    expect(flagged.length).toBeLessThan(MODULE_COUNT / 2)
  })

  it('keeps legacy heights irregular but bounded', () => {
    const heights = new Set<number>()
    for (let index = 0; index < MODULE_COUNT; index += 1) {
      const height = legacyHeight(index)
      expect(height).toBeGreaterThanOrEqual(0.4)
      expect(height).toBeLessThanOrEqual(1.8)
      heights.add(height)
    }
    expect(heights.size).toBeGreaterThan(1)
  })

  it('keeps every module legacy during the scan step', () => {
    expect(countStates(0).legacy).toBe(MODULE_COUNT)
  })

  it('flags violations during the diagnosis step', () => {
    const counts = countStates(1)
    expect(counts.violation).toBeGreaterThan(0)
    expect(counts.converted).toBe(0)
  })

  it('converts 17 of 28 modules during the atomic plan step', () => {
    const counts = countStates(2)
    expect(counts.converted).toBe(17)
    expect(counts.converted).toBeLessThan(MODULE_COUNT)
  })

  it('gives every atomic module the same height', () => {
    const heights = new Set<number>()
    for (let index = 0; index < MODULE_COUNT; index += 1) {
      const target = resolveModule(2, index, MODULE_COUNT)
      if (target.state === 'converted') heights.add(target.height)
    }
    expect(heights.size).toBe(1)
  })

  it('governs every module on the last step', () => {
    expect(countStates(3).governed).toBe(MODULE_COUNT)
  })

  it('treats steps outside the range safely', () => {
    expect(resolveModule(-1, 0, MODULE_COUNT).state).toBe('legacy')
    expect(resolveModule(99, 0, MODULE_COUNT).state).toBe('governed')
  })
})
