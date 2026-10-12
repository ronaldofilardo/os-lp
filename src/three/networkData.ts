import { createRandom } from './random'

const NODE_COUNT = 26
const LINKS_PER_NODE = 2

export interface NetworkData {
  readonly nodes: Float32Array
  readonly lines: Float32Array
  readonly edges: readonly (readonly [number, number])[]
}

function distance(nodes: Float32Array, a: number, b: number): number {
  const dx = (nodes[a * 3] ?? 0) - (nodes[b * 3] ?? 0)
  const dy = (nodes[a * 3 + 1] ?? 0) - (nodes[b * 3 + 1] ?? 0)
  const dz = (nodes[a * 3 + 2] ?? 0) - (nodes[b * 3 + 2] ?? 0)
  return Math.hypot(dx, dy, dz)
}

export function buildNetwork(): NetworkData {
  const random = createRandom(1997)
  const nodes = new Float32Array(NODE_COUNT * 3)
  for (let index = 0; index < NODE_COUNT; index += 1) {
    nodes[index * 3] = (random() - 0.5) * 24
    nodes[index * 3 + 1] = (random() - 0.5) * 9 + 0.5
    nodes[index * 3 + 2] = -2 - random() * 7
  }
  const edges: [number, number][] = []
  for (let from = 0; from < NODE_COUNT; from += 1) {
    const others = Array.from({ length: NODE_COUNT }, (_, index) => index)
      .filter((index) => index !== from)
      .sort((a, b) => distance(nodes, from, a) - distance(nodes, from, b))
    for (const to of others.slice(0, LINKS_PER_NODE)) edges.push([from, to])
  }
  const lines = new Float32Array(edges.length * 6)
  edges.forEach(([from, to], index) => {
    for (let axis = 0; axis < 3; axis += 1) {
      lines[index * 6 + axis] = nodes[from * 3 + axis] ?? 0
      lines[index * 6 + 3 + axis] = nodes[to * 3 + axis] ?? 0
    }
  })
  return { nodes, lines, edges }
}
