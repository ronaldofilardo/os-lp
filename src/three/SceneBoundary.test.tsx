import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { SceneBoundary } from './SceneBoundary'

function Thrower(): React.JSX.Element {
  throw new Error('WebGL indisponível')
}

describe('SceneBoundary', () => {
  it('renders its children when nothing fails', () => {
    render(
      <SceneBoundary fallback={<span>fallback</span>}>
        <span>cena</span>
      </SceneBoundary>,
    )
    expect(screen.getByText('cena')).toBeInTheDocument()
    expect(screen.queryByText('fallback')).not.toBeInTheDocument()
  })

  it('shows the fallback when a child throws', () => {
    vi.spyOn(console, 'error').mockImplementation(() => undefined)
    render(
      <SceneBoundary fallback={<span>fallback</span>}>
        <Thrower />
      </SceneBoundary>,
    )
    expect(screen.getByText('fallback')).toBeInTheDocument()
  })
})
