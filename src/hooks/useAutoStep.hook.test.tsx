import { describe, it, expect, vi, beforeEach } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { useAutoStep } from './useAutoStep'

const INTERVAL = 1000

function advance(ms: number): void {
  act(() => {
    vi.advanceTimersByTime(ms)
  })
}

describe('useAutoStep', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('advances one step per interval', () => {
    const { result } = renderHook(() => useAutoStep(4, true, INTERVAL))
    expect(result.current[0]).toBe(0)
    advance(INTERVAL)
    expect(result.current[0]).toBe(1)
    advance(INTERVAL)
    expect(result.current[0]).toBe(2)
  })

  it('wraps around after the last step', () => {
    const { result } = renderHook(() => useAutoStep(3, true, INTERVAL))
    advance(INTERVAL * 3)
    expect(result.current[0]).toBe(0)
  })

  it('does not advance while disabled and resumes when enabled', () => {
    const { result, rerender } = renderHook(
      ({ enabled }: { readonly enabled: boolean }) => useAutoStep(4, enabled, INTERVAL),
      { initialProps: { enabled: false } },
    )
    advance(INTERVAL * 5)
    expect(result.current[0]).toBe(0)
    rerender({ enabled: true })
    advance(INTERVAL)
    expect(result.current[0]).toBe(1)
  })

  it('restarts the countdown after a manual selection', () => {
    const { result } = renderHook(() => useAutoStep(4, true, INTERVAL))
    advance(900)
    act(() => result.current[1](2))
    advance(900)
    expect(result.current[0]).toBe(2)
    advance(100)
    expect(result.current[0]).toBe(3)
  })

  it('stops the timer on unmount', () => {
    const { unmount } = renderHook(() => useAutoStep(4, true, INTERVAL))
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
