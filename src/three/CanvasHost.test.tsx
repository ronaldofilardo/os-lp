import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import type { ReactNode } from 'react'
import { REDUCED_MOTION, installMatchMedia, setIntersecting } from '@/test/mocks'
import { CanvasHost } from './CanvasHost'

vi.mock('@react-three/fiber', () => ({
  Canvas: ({ children, frameloop }: { readonly children: ReactNode; readonly frameloop: string }) => (
    <div data-testid="canvas" data-frameloop={frameloop}>
      {children}
    </div>
  ),
  useThree: (selector: (_state: unknown) => unknown) =>
    selector({ camera: { position: { set: vi.fn() }, lookAt: vi.fn() }, size: { width: 400, height: 300 } }),
}))

function renderHost(): void {
  render(
    <CanvasHost cameraX={0} cameraY={1} cameraZ={5} designAspect={1.3}>
      <span>cena</span>
    </CanvasHost>,
  )
}

describe('CanvasHost', () => {
  it('renders the scene children inside the canvas', () => {
    renderHost()
    expect(screen.getByTestId('canvas')).toContainElement(screen.getByText('cena'))
  })

  it('does not run the render loop while off screen', () => {
    renderHost()
    expect(screen.getByTestId('canvas')).toHaveAttribute('data-frameloop', 'demand')
  })

  it('runs the render loop while on screen', () => {
    renderHost()
    setIntersecting(true)
    expect(screen.getByTestId('canvas')).toHaveAttribute('data-frameloop', 'always')
  })

  it('pauses again when the canvas leaves the screen', () => {
    renderHost()
    setIntersecting(true)
    setIntersecting(false)
    expect(screen.getByTestId('canvas')).toHaveAttribute('data-frameloop', 'demand')
  })

  it('keeps a static frame when reduced motion is requested', () => {
    installMatchMedia({ [REDUCED_MOTION]: true })
    renderHost()
    setIntersecting(true)
    expect(screen.getByTestId('canvas')).toHaveAttribute('data-frameloop', 'demand')
  })
})
