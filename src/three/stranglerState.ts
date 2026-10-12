export type ModuleState = 'legacy' | 'violation' | 'converted' | 'governed'

export interface ModuleTarget {
  readonly state: ModuleState
  readonly height: number
  readonly glow: number
}

export const GRID_COLUMNS = 7
export const GRID_ROWS = 4
export const MODULE_COUNT = GRID_COLUMNS * GRID_ROWS

const ATOMIC_HEIGHT = 0.7
const CONVERTED_FRACTION_BY_STEP = [0, 0, 0.6, 1] as const

export function isViolation(index: number): boolean {
  return (index * 7) % 5 < 2
}

export function conversionOrder(index: number, total: number): number {
  return (index * 11) % total
}

export function legacyHeight(index: number): number {
  return 0.4 + (((index * 37) % 10) / 10) * 1.4
}

export function resolveModule(step: number, index: number, total: number): ModuleTarget {
  if (step >= 3) return { state: 'governed', height: ATOMIC_HEIGHT, glow: 0.55 }
  const fraction = CONVERTED_FRACTION_BY_STEP[step] ?? 0
  if (conversionOrder(index, total) < fraction * total) {
    return { state: 'converted', height: ATOMIC_HEIGHT, glow: 0.4 }
  }
  if (step >= 1 && isViolation(index)) {
    return { state: 'violation', height: legacyHeight(index), glow: 0.5 }
  }
  return { state: 'legacy', height: legacyHeight(index), glow: 0.08 }
}
