'use client'

import { CanvasHost } from './CanvasHost'
import { BackdropField } from './BackdropField'
import { NetworkMesh } from './NetworkMesh'
import { BackdropShape } from './BackdropShape'
import { BACKDROP_SHAPES } from './backdropLayout'

export function HeroBackdropScene(): React.JSX.Element {
  return (
    <CanvasHost cameraX={0} cameraY={0.6} cameraZ={10} designAspect={1.8}>
      <group scale={[-1, 1, 1]}>
        <BackdropField />
        <NetworkMesh />
        {BACKDROP_SHAPES.map((shape) => (
          <BackdropShape key={`${shape.kind}-${shape.position[0]}`} {...shape} />
        ))}
      </group>
    </CanvasHost>
  )
}
