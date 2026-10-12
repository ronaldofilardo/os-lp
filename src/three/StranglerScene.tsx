'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { CanvasHost } from './CanvasHost'
import { Module } from './Module'
import { PALETTE } from './palette'
import { GRID_COLUMNS, MODULE_COUNT } from './stranglerState'

interface StranglerSceneProps {
  readonly step: number
}

function columnOf(index: number): number {
  return index % GRID_COLUMNS
}

function rowOf(index: number): number {
  return Math.floor(index / GRID_COLUMNS)
}

function ModuleGrid({ step }: StranglerSceneProps): React.JSX.Element {
  const gridRef = useRef<Group>(null)
  const indexes = Array.from({ length: MODULE_COUNT }, (_, index) => index)

  useFrame((state) => {
    const grid = gridRef.current
    if (!grid) return
    grid.rotation.y = Math.sin(state.clock.elapsedTime * 0.25) * 0.25 + state.pointer.x * 0.2
  })

  return (
    <group ref={gridRef}>
      {indexes.map((index) => (
        <Module
          key={index}
          index={index}
          step={step}
          positionX={columnOf(index) - (GRID_COLUMNS - 1) / 2}
          positionZ={rowOf(index) - 1.5}
        />
      ))}
    </group>
  )
}

export function StranglerScene({ step }: StranglerSceneProps): React.JSX.Element {
  return (
    <CanvasHost cameraX={0} cameraY={5.2} cameraZ={6.4} designAspect={1.55}>
      <ambientLight intensity={0.55} />
      <pointLight position={[3, 6, 4]} intensity={90} color={PALETTE.primarySoft} />
      <ModuleGrid step={step} />
    </CanvasHost>
  )
}
