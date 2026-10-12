import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render } from '@testing-library/react'
import { FitCamera } from './FitCamera'

const mocks = vi.hoisted(() => ({
  set: vi.fn(),
  lookAt: vi.fn(),
  size: { width: 300, height: 300 },
}))

vi.mock('@react-three/fiber', () => ({
  useThree: (selector: (_state: unknown) => unknown) =>
    selector({ camera: { position: { set: mocks.set }, lookAt: mocks.lookAt }, size: mocks.size }),
}))

describe('FitCamera', () => {
  beforeEach(() => {
    mocks.set.mockClear()
    mocks.lookAt.mockClear()
  })

  it('pulls the camera back on a narrow canvas', () => {
    mocks.size.width = 300
    mocks.size.height = 300
    render(<FitCamera x={0} y={5.2} z={6.4} designAspect={1.55} />)
    const [x, y, z] = mocks.set.mock.calls[0] as [number, number, number]
    expect(x).toBe(0)
    expect(y).toBeCloseTo(5.2 * 1.55, 5)
    expect(z).toBeCloseTo(6.4 * 1.55, 5)
  })

  it('keeps the camera where it is on a wide canvas', () => {
    mocks.size.width = 900
    mocks.size.height = 450
    render(<FitCamera x={0} y={5.2} z={6.4} designAspect={1.55} />)
    expect(mocks.set).toHaveBeenCalledWith(0, 5.2, 6.4)
  })

  it('always looks at the origin', () => {
    render(<FitCamera x={1} y={2} z={3} designAspect={1.3} />)
    expect(mocks.lookAt).toHaveBeenCalledWith(0, 0, 0)
  })
})
