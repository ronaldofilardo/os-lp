'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Color, type Mesh, type MeshStandardMaterial } from 'three'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { PALETTE } from './palette'
import { MODULE_COUNT, resolveModule, type ModuleState } from './stranglerState'

interface ModuleProps {
  readonly index: number
  readonly step: number
  readonly positionX: number
  readonly positionZ: number
}

const STATE_COLORS: Record<ModuleState, string> = {
  legacy: PALETTE.outline,
  violation: PALETTE.error,
  converted: PALETTE.primary,
  governed: PALETTE.secondary,
}

function scanGlow(positionX: number, elapsed: number): number {
  const scanX = ((elapsed * 0.7) % 1) * 8 - 4
  return Math.max(0, 1 - Math.abs(positionX - scanX) / 1.2) * 1.1
}

export function Module({ index, step, positionX, positionZ }: ModuleProps): React.JSX.Element {
  const isReduced = useReducedMotion()
  const meshRef = useRef<Mesh>(null)
  const materialRef = useRef<MeshStandardMaterial>(null)
  const first = resolveModule(step, index, MODULE_COUNT)
  const heightRef = useRef(isReduced ? first.height : 0.05)
  const colorRef = useRef(new Color(STATE_COLORS[first.state]))
  const goalColorRef = useRef(new Color())

  useFrame((state, delta) => {
    const mesh = meshRef.current
    const material = materialRef.current
    if (!mesh || !material) return
    const target = resolveModule(step, index, MODULE_COUNT)
    const smoothing = 1 - Math.exp(-5 * delta)
    heightRef.current += (target.height - heightRef.current) * smoothing
    mesh.scale.y = heightRef.current
    mesh.position.y = heightRef.current / 2
    colorRef.current.lerp(goalColorRef.current.set(STATE_COLORS[target.state]), smoothing)
    material.color.copy(colorRef.current)
    material.emissive.copy(colorRef.current)
    const elapsed = state.clock.elapsedTime
    const pulse = target.state === 'violation' ? (0.5 + 0.5 * Math.sin(elapsed * 4 + index)) * 0.5 : 0
    const scan = step === 0 ? scanGlow(positionX, elapsed) : 0
    material.emissiveIntensity = target.glow + pulse + scan
  })

  return (
    <mesh ref={meshRef} position={[positionX, 0.025, positionZ]} scale={[1, heightRef.current, 1]}>
      <boxGeometry args={[0.72, 1, 0.72]} />
      <meshStandardMaterial ref={materialRef} metalness={0.25} roughness={0.45} />
    </mesh>
  )
}
