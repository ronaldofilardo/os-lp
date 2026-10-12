'use client'

import type { ReactNode } from 'react'
import { Canvas } from '@react-three/fiber'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { FitCamera } from './FitCamera'
import { SceneBoundary } from './SceneBoundary'
import { SceneFallback } from './SceneFallback'

interface CanvasHostProps {
  readonly children: ReactNode
  readonly cameraX: number
  readonly cameraY: number
  readonly cameraZ: number
  readonly designAspect: number
}

export function CanvasHost({ children, cameraX, cameraY, cameraZ, designAspect }: CanvasHostProps): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>()
  const isReduced = useReducedMotion()
  const frameloop = isInView && !isReduced ? 'always' : 'demand'

  return (
    <div ref={ref} className="absolute inset-0">
      <SceneBoundary fallback={<SceneFallback />}>
        <Canvas
          dpr={[1, 1.5]}
          frameloop={frameloop}
          camera={{ position: [cameraX, cameraY, cameraZ], fov: 45 }}
          gl={{ antialias: true, alpha: true, powerPreference: 'low-power' }}
          onCreated={({ gl }) => {
            gl.debug.checkShaderErrors = false
          }}
        >
          <FitCamera x={cameraX} y={cameraY} z={cameraZ} designAspect={designAspect} />
          {children}
        </Canvas>
      </SceneBoundary>
    </div>
  )
}
