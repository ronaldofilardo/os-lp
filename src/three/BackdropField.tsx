'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'

const GRID_Z = -4
const FLOW_SPEED = 0.4

export function BackdropField(): React.JSX.Element {
  const gridRef = useRef<Group>(null)

  useFrame((state) => {
    const grid = gridRef.current
    if (grid) grid.position.z = GRID_Z + ((state.clock.elapsedTime * FLOW_SPEED) % 1)
  })

  return (
    <group ref={gridRef} position={[0, -5.4, GRID_Z]}>
      <gridHelper args={[40, 40, '#bae6fd', '#f1f5f9']} />
    </group>
  )
}
