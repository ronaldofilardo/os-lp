'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

export type BackdropKind = 'server' | 'database' | 'chip' | 'cloud' | 'cube'

export interface BackdropShapeProps {
  readonly kind: BackdropKind
  readonly position: readonly [number, number, number]
  readonly size: number
  readonly color: string
  readonly spin: number
  readonly phase: number
}

const STACK_Y = [-0.55, 0, 0.55] as const
const PINS = [-0.5, -0.17, 0.17, 0.5] as const
const CLOUD = [
  { x: -0.55, y: -0.1, r: 0.5 },
  { x: 0.05, y: 0.18, r: 0.68 },
  { x: 0.65, y: -0.1, r: 0.46 },
] as const

function Wire({ args, color, y = 0, x = 0, z = 0, shape = 'box' }: {
  readonly args: readonly number[]
  readonly color: string
  readonly x?: number
  readonly y?: number
  readonly z?: number
  readonly shape?: 'box' | 'cylinder' | 'sphere'
}): React.JSX.Element {
  return (
    <mesh position={[x, y, z]}>
      {shape === 'box' && <boxGeometry args={args as [number, number, number]} />}
      {shape === 'cylinder' && <cylinderGeometry args={args as [number, number, number, number]} />}
      {shape === 'sphere' && <sphereGeometry args={args as [number, number, number]} />}
      <meshBasicMaterial color={color} wireframe transparent opacity={0.22} />
    </mesh>
  )
}

function Parts({ kind, color }: { readonly kind: BackdropKind; readonly color: string }): React.JSX.Element {
  if (kind === 'server') return <>{STACK_Y.map((y) => <Wire color={color} key={y} y={y} args={[1.7, 0.42, 1.1]} />)}</>
  if (kind === 'database') return <>{STACK_Y.map((y) => <Wire color={color} key={y} y={y} shape="cylinder" args={[0.85, 0.85, 0.4, 20]} />)}</>
  if (kind === 'cloud') return <>{CLOUD.map((c) => <Wire color={color} key={c.x} x={c.x} y={c.y} shape="sphere" args={[c.r, 8, 6]} />)}</>
  if (kind === 'chip') {
    return (
      <>
        <Wire color={color} args={[1.2, 0.2, 1.2]} />
        <Wire color={color} y={0.2} args={[0.7, 0.2, 0.7]} />
        {PINS.map((p) => <Wire color={color} key={`a${p}`} x={p} z={0.78} args={[0.1, 0.1, 0.3]} />)}
        {PINS.map((p) => <Wire color={color} key={`b${p}`} x={p} z={-0.78} args={[0.1, 0.1, 0.3]} />)}
      </>
    )
  }
  return <Wire color={color} args={[1.3, 1.3, 1.3]} />
}

export function BackdropShape({ kind, position, size, color, spin, phase }: BackdropShapeProps): React.JSX.Element {
  const groupRef = useRef<Group>(null)

  useFrame((state, delta) => {
    const group = groupRef.current
    if (!group) return
    group.rotation.y += delta * spin
    group.position.y = position[1] + Math.sin(state.clock.elapsedTime * 0.6 + phase) * 0.35
  })

  return (
    <group ref={groupRef} position={[position[0], position[1], position[2]]} scale={size}>
      <group rotation={[0.45, 0, 0.08]}>
        <Parts kind={kind} color={color} />
      </group>
    </group>
  )
}
