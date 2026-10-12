import { describe, it, expect } from 'vitest'
import { buildNetwork } from './networkData'

describe('buildNetwork', () => {
  const network = buildNetwork()

  it('builds the same network every time', () => {
    expect(Array.from(buildNetwork().nodes)).toEqual(Array.from(network.nodes))
  })

  it('links every node to its nearest neighbours', () => {
    expect(network.nodes.length).toBe(26 * 3)
    expect(network.edges).toHaveLength(26 * 2)
  })

  it('only links existing, different nodes', () => {
    for (const [from, to] of network.edges) {
      expect(from).not.toBe(to)
      expect(from).toBeGreaterThanOrEqual(0)
      expect(to).toBeLessThan(26)
    }
  })

  it('keeps one line segment (two points) per edge, matching the node positions', () => {
    expect(network.lines.length).toBe(network.edges.length * 6)
    const [from, to] = network.edges[0] as readonly [number, number]
    expect(network.lines[0]).toBe(network.nodes[from * 3])
    expect(network.lines[3]).toBe(network.nodes[to * 3])
  })

  it('keeps the nodes behind the camera focus plane', () => {
    for (let index = 2; index < network.nodes.length; index += 3) {
      expect(network.nodes[index]).toBeLessThan(0)
    }
  })
})
