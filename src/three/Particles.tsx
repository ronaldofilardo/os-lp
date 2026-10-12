'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Points } from 'three'
import { createRandom } from './random'
import { PALETTE } from './palette'

const PARTICLE_COUNT = 260

function buildPositions(): Float32Array {
  const random = createRandom(2026)
  const positions = new Float32Array(PARTICLE_COUNT * 3)
  for (let index = 0; index < PARTICLE_COUNT; index += 1) {
    const radius = 3.6 + random() * 3
    const theta = random() * Math.PI * 2
    const phi = Math.acos(2 * random() - 1)
    positions[index * 3] = radius * Math.sin(phi) * Math.cos(theta)
    positions[index * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta)
    positions[index * 3 + 2] = radius * Math.cos(phi)
  }
  return positions
}

export function Particles(): React.JSX.Element {
  const pointsRef = useRef<Points>(null)
  const positions = useMemo(buildPositions, [])

  useFrame((_state, delta) => {
    const points = pointsRef.current
    if (points) points.rotation.y += delta * 0.03
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial color={PALETTE.primarySoft} size={0.035} transparent opacity={0.7} sizeAttenuation />
    </points>
  )
}
