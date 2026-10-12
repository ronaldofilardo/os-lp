'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { CanvasHost } from './CanvasHost'
import { OrbitRing } from './OrbitRing'
import { Particles } from './Particles'
import { PALETTE } from './palette'

function CoreAssembly(): React.JSX.Element {
  const tiltRef = useRef<Group>(null)
  const spinRef = useRef<Group>(null)

  useFrame((state, delta) => {
    const tilt = tiltRef.current
    const spin = spinRef.current
    if (!tilt || !spin) return
    tilt.rotation.x += (state.pointer.y * -0.35 - tilt.rotation.x) * 0.05
    tilt.rotation.z += (state.pointer.x * 0.25 - tilt.rotation.z) * 0.05
    spin.rotation.y += delta * 0.28
  })

  return (
    <group ref={tiltRef}>
      <group ref={spinRef}>
        <mesh>
          <icosahedronGeometry args={[1.15, 1]} />
          <meshBasicMaterial color={PALETTE.primary} wireframe transparent opacity={0.85} />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.72, 0]} />
          <meshStandardMaterial color={PALETTE.surfaceHigh} emissive={PALETTE.primary} emissiveIntensity={0.35} flatShading />
        </mesh>
      </group>
      <OrbitRing radius={2} count={6} speed={0.35} tiltX={0.5} tiltZ={0.2} color={PALETTE.primary} />
      <OrbitRing radius={2.6} count={8} speed={-0.22} tiltX={-0.9} tiltZ={0} color={PALETTE.secondary} />
      <OrbitRing radius={3.2} count={10} speed={0.14} tiltX={0.2} tiltZ={-0.7} color={PALETTE.primary} />
    </group>
  )
}

export function HeroCoreScene(): React.JSX.Element {
  return (
    <CanvasHost cameraX={0} cameraY={0} cameraZ={7.4} designAspect={1.3}>
      <ambientLight intensity={0.7} />
      <pointLight position={[4, 4, 5]} intensity={70} color={PALETTE.primarySoft} />
      <Particles />
      <CoreAssembly />
    </CanvasHost>
  )
}
