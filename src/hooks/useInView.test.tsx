import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FakeIntersectionObserver, setIntersecting } from '@/test/mocks'
import { useInView } from './useInView'

function Probe({ once = false }: { readonly once?: boolean }): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>({ once })
  return (
    <div ref={ref} data-testid="probe">
      {String(isInView)}
    </div>
  )
}

describe('useInView', () => {
  it('starts out of view', () => {
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('false')
  })

  it('follows the element in and out of the viewport', () => {
    render(<Probe />)
    setIntersecting(true)
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
    setIntersecting(false)
    expect(screen.getByTestId('probe')).toHaveTextContent('false')
  })

  it('stays in view and stops observing when "once" is set', () => {
    render(<Probe once />)
    setIntersecting(true)
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
    expect(FakeIntersectionObserver.instances[0]?.isDisconnected).toBe(true)
    setIntersecting(false)
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
  })

  it('disconnects the observer on unmount', () => {
    const { unmount } = render(<Probe />)
    unmount()
    expect(FakeIntersectionObserver.instances[0]?.isDisconnected).toBe(true)
  })

  it('treats the element as visible when IntersectionObserver is unavailable', () => {
    vi.stubGlobal('IntersectionObserver', undefined)
    render(<Probe />)
    expect(screen.getByTestId('probe')).toHaveTextContent('true')
  })
})
