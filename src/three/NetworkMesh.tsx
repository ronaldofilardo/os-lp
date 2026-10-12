'use client'

import { useMemo, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import type { BufferAttribute, Group } from 'three'
import { buildNetwork } from './networkData'

const PACKET_COUNT = 18

export function NetworkMesh(): React.JSX.Element {
  const groupRef = useRef<Group>(null)
  const packetRef = useRef<BufferAttribute>(null)
  const network = useMemo(buildNetwork, [])
  const packets = useMemo(() => new Float32Array(PACKET_COUNT * 3), [])

  useFrame((state) => {
    const group = groupRef.current
    const attribute = packetRef.current
    if (!group || !attribute) return
    const time = state.clock.elapsedTime
    group.rotation.y = Math.sin(time * 0.08) * 0.12
    for (let index = 0; index < PACKET_COUNT; index += 1) {
      const edge = network.edges[(index * 5) % network.edges.length]
      if (!edge) continue
      const progress = (time * 0.35 + index * 0.37) % 1
      for (let axis = 0; axis < 3; axis += 1) {
        const start = network.nodes[edge[0] * 3 + axis] ?? 0
        const end = network.nodes[edge[1] * 3 + axis] ?? 0
        packets[index * 3 + axis] = start + (end - start) * progress
      }
    }
    attribute.needsUpdate = true
  })

  return (
    <group ref={groupRef}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[network.lines, 3]} />
        </bufferGeometry>
        <lineBasicMaterial color="#81D4FA" transparent opacity={0.28} />
      </lineSegments>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[network.nodes, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#81D4FA" size={0.14} transparent opacity={0.75} sizeAttenuation />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute ref={packetRef} attach="attributes-position" args={[packets, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#2ECC71" size={0.16} transparent opacity={0.95} sizeAttenuation />
      </points>
    </group>
  )
}
