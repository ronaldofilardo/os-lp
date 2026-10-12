'use client'

import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { Group } from 'three'
import { CanvasHost } from './CanvasHost'
import { Pillar } from './Pillar'
import { PALETTE } from './palette'

interface PillarsSceneProps {
  readonly activeIndex: number
  readonly onSelect: (_index: number) => void
}

const PILLARS = [
  { positionX: -1.8, targetHeight: 1.4 },
  { positionX: -0.6, targetHeight: 2.0 },
  { positionX: 0.6, targetHeight: 2.6 },
  { positionX: 1.8, targetHeight: 3.2 },
] as const

function PillarsStage({ activeIndex, onSelect }: PillarsSceneProps): React.JSX.Element {
  const stageRef = useRef<Group>(null)

  useFrame((state) => {
    const stage = stageRef.current
    if (!stage) return
    const sway = Math.sin(state.clock.elapsedTime * 0.35) * 0.18
    stage.rotation.y += (-0.45 + sway + state.pointer.x * 0.25 - stage.rotation.y) * 0.05
  })

  return (
    <group ref={stageRef} position={[0.4, -1.5, 0]}>
      <mesh position={[0, -0.1, 0]}>
        <boxGeometry args={[5.4, 0.2, 1.8]} />
        <meshStandardMaterial color={PALETTE.surfaceLow} metalness={0.2} roughness={0.6} />
      </mesh>
      <mesh position={[0, 0.005, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[5.2, 1.6]} />
        <meshStandardMaterial color={PALETTE.surfaceHigh} metalness={0.1} roughness={0.8} />
      </mesh>
      {PILLARS.map((pillar, index) => (
        <Pillar
          key={pillar.positionX}
          index={index}
          positionX={pillar.positionX}
          targetHeight={pillar.targetHeight}
          isActive={index === activeIndex}
          onSelect={onSelect}
        />
      ))}
    </group>
  )
}

export function PillarsScene({ activeIndex, onSelect }: PillarsSceneProps): React.JSX.Element {
  return (
    <CanvasHost cameraX={0} cameraY={2.6} cameraZ={9.2} designAspect={1.05}>
      <ambientLight intensity={0.6} />
      <pointLight position={[3, 5, 5]} intensity={80} color={PALETTE.primarySoft} />
      <pointLight position={[-4, 2, 3]} intensity={25} color={PALETTE.secondary} />
      <PillarsStage activeIndex={activeIndex} onSelect={onSelect} />
    </CanvasHost>
  )
}
