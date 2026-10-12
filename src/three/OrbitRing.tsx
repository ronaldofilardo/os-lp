'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

interface OrbitRingProps {
  readonly radius: number
  readonly count: number
  readonly speed: number
  readonly tiltX: number
  readonly tiltZ: number
  readonly color: string
}

const MODULE_SIZE = 0.17

export function OrbitRing({ radius, count, speed, tiltX, tiltZ, color }: OrbitRingProps): React.JSX.Element {
  const spinRef = useRef<Group>(null)

  useFrame((_state, delta) => {
    const spin = spinRef.current
    if (spin) spin.rotation.y += delta * speed
  })

  const angles = Array.from({ length: count }, (_, index) => (index / count) * Math.PI * 2)

  return (
    <group rotation={[tiltX, 0, tiltZ]}>
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[radius, 0.004, 8, 120]} />
        <meshBasicMaterial color={color} transparent opacity={0.35} />
      </mesh>
      <group ref={spinRef}>
        {angles.map((angle) => (
          <mesh key={angle} position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]} rotation={[angle, angle, 0]}>
            <boxGeometry args={[MODULE_SIZE, MODULE_SIZE, MODULE_SIZE]} />
            <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.55} roughness={0.35} />
          </mesh>
        ))}
      </group>
    </group>
  )
}
