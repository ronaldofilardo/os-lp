'use client'

import { useEffect } from 'react'
import { useThree } from '@react-three/fiber'
import { fitFactor } from './cameraFit'

interface FitCameraProps {
  readonly x: number
  readonly y: number
  readonly z: number
  readonly designAspect: number
}

export function FitCamera({ x, y, z, designAspect }: FitCameraProps): null {
  const camera = useThree((state) => state.camera)
  const width = useThree((state) => state.size.width)
  const height = useThree((state) => state.size.height)

  useEffect(() => {
    const factor = fitFactor(width, height, designAspect)
    camera.position.set(x * factor, y * factor, z * factor)
    camera.lookAt(0, 0, 0)
  }, [camera, width, height, x, y, z, designAspect])

  return null
}
