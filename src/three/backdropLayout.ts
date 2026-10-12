import type { BackdropShapeProps } from './BackdropShape'

const BRAND_BLUE = '#81D4FA'
const BRAND_GREEN = '#2ECC71'
const BRAND_GRAY = '#4A4A4A'

export const BACKDROP_SHAPES: readonly BackdropShapeProps[] = [
  { kind: 'server', position: [-8.6, 3.8, -4], size: 1.4, color: BRAND_BLUE, spin: 0.22, phase: 0 },
  { kind: 'chip', position: [-7.2, -4.2, -5], size: 1.0, color: BRAND_GREEN, spin: -0.3, phase: 1.4 },
  { kind: 'cloud', position: [-10.4, -2.4, -6], size: 1.2, color: BRAND_GRAY, spin: 0.18, phase: 2.6 },
  { kind: 'cube', position: [1.2, 4.4, -7], size: 0.85, color: BRAND_BLUE, spin: 0.26, phase: 0.8 },
  { kind: 'database', position: [4.2, -3.8, -4], size: 0.9, color: BRAND_GRAY, spin: -0.2, phase: 3.1 },
  { kind: 'cloud', position: [7.8, 2.8, -4], size: 1.3, color: BRAND_BLUE, spin: 0.28, phase: 2.0 },
  { kind: 'database', position: [9.2, -1.8, -5], size: 1.4, color: BRAND_GREEN, spin: -0.16, phase: 4.2 },
  { kind: 'server', position: [6.8, 0.4, -7], size: 1.1, color: BRAND_GRAY, spin: 0.2, phase: 5.0 },
] as const
