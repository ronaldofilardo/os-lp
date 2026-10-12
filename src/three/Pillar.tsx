'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Mesh, MeshStandardMaterial } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PALETTE } from './palette'

interface PillarProps {
  readonly index: number
  readonly positionX: number
  readonly targetHeight: number
  readonly isActive: boolean
  readonly onSelect: (_index: number) => void
}

const STAGGER_SECONDS = 0.18
const ACTIVE_BOOST = 1.14

export function Pillar({ index, positionX, targetHeight, isActive, onSelect }: PillarProps): React.JSX.Element {
  const isReduced = useReducedMotion()
  const bodyRef = useRef<Mesh>(null)
  const materialRef = useRef<MeshStandardMaterial>(null)
  const heightRef = useRef(isReduced ? targetHeight : 0.05)

  useFrame((state, delta) => {
    const body = bodyRef.current
    const material = materialRef.current
    if (!body || !material) return
    if (state.clock.elapsedTime < index * STAGGER_SECONDS) return
    const goal = isActive ? targetHeight * ACTIVE_BOOST : targetHeight
    const smoothing = 1 - Math.exp(-4 * delta)
    heightRef.current += (goal - heightRef.current) * smoothing
    body.scale.y = heightRef.current
    body.position.y = heightRef.current / 2
    const glow = isActive ? 0.95 : 0.12
    material.emissiveIntensity += (glow - material.emissiveIntensity) * smoothing
  })

  return (
    <group position={[positionX, 0, 0]} onPointerOver={() => onSelect(index)}>
      <mesh ref={bodyRef} position={[0, 0.025, 0]} scale={[1, heightRef.current, 1]}>
        <boxGeometry args={[0.9, 1, 0.9]} />
        <meshStandardMaterial
          ref={materialRef}
          color={PALETTE.surfaceHigh}
          emissive={isActive ? PALETTE.secondary : PALETTE.primary}
          emissiveIntensity={0.12}
          metalness={0.35}
          roughness={0.4}
        />
      </mesh>
    </group>
  )
}
