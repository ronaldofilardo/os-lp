import { describe, it, expect, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { REDUCED_MOTION, installMatchMedia } from '@/test/mocks'
import { usePanelTicker, formatBrl } from './usePanelTicker'

describe('formatBrl', () => {
  it('formats with a thousands dot and the R$ prefix', () => {
    expect(formatBrl(12480)).toBe('R$ 12.480')
    expect(formatBrl(950)).toBe('R$ 950')
    expect(formatBrl(1234567)).toBe('R$ 1.234.567')
  })
})

describe('usePanelTicker', () => {
  it('starts with the base values and the first row active', () => {
    const { result } = renderHook(() => usePanelTicker())
    expect(result.current).toEqual({ pix: 12480, boletos: 38, activeRow: 0, tick: 0 })
  })

  it('advances the values and the active row on every tick', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => usePanelTicker())
    act(() => {
      vi.advanceTimersByTime(2800)
    })
    expect(result.current).toEqual({ pix: 12660, boletos: 38, activeRow: 1, tick: 1 })
    act(() => {
      vi.advanceTimersByTime(2800)
    })
    expect(result.current).toEqual({ pix: 12900, boletos: 39, activeRow: 2, tick: 2 })
  })

  it('wraps the active row after the last one', () => {
    vi.useFakeTimers()
    const { result } = renderHook(() => usePanelTicker())
    act(() => {
      vi.advanceTimersByTime(2800 * 4)
    })
    expect(result.current.activeRow).toBe(0)
    expect(result.current.tick).toBe(4)
  })

  it('stays still when the user prefers reduced motion', () => {
    installMatchMedia({ [REDUCED_MOTION]: true })
    vi.useFakeTimers()
    const { result } = renderHook(() => usePanelTicker())
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(result.current.tick).toBe(0)
  })
})
