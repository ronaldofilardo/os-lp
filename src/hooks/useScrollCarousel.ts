import { useCallback, useEffect, useRef, useState, type RefObject } from 'react'
import { useReducedMotion } from './useReducedMotion'

export const AUTOPLAY_MS = 5500

export interface ScrollCarousel {
  readonly active: number
  readonly last: number
  readonly cycle: number
  readonly goTo: (_index: number) => void
  readonly next: () => void
  readonly prev: () => void
}

interface Metrics {
  readonly step: number
  readonly last: number
}

function measure(track: HTMLElement): Metrics {
  const first = track.children[0] as HTMLElement | undefined
  const second = track.children[1] as HTMLElement | undefined
  const step = first && second ? second.offsetLeft - first.offsetLeft : track.clientWidth
  const last = step > 0 ? Math.max(0, Math.round((track.scrollWidth - track.clientWidth) / step)) : 0
  return { step, last }
}

export function useScrollCarousel(trackRef: RefObject<HTMLElement | null>, isRunning: boolean): ScrollCarousel {
  const isReduced = useReducedMotion()
  const [active, setActive] = useState(0)
  const [last, setLast] = useState(3)
  const [cycle, setCycle] = useState(0)
  const frame = useRef(0)

  const sync = useCallback((): void => {
    const track = trackRef.current
    if (!track) return
    const metrics = measure(track)
    setLast(metrics.last)
    setActive(Math.min(metrics.last, Math.max(0, Math.round(track.scrollLeft / Math.max(metrics.step, 1)))))
  }, [trackRef])

  const goTo = useCallback(
    (index: number): void => {
      const track = trackRef.current
      if (!track) return
      const { step, last: max } = measure(track)
      const target = Math.min(max, Math.max(0, index))
      track.scrollTo({ left: target * step, behavior: isReduced ? 'auto' : 'smooth' })
    },
    [trackRef, isReduced],
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    const onScroll = (): void => {
      cancelAnimationFrame(frame.current)
      frame.current = requestAnimationFrame(sync)
    }
    sync()
    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame.current)
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [trackRef, sync])

  const next = useCallback((): void => goTo(active >= last ? 0 : active + 1), [goTo, active, last])
  const prev = useCallback((): void => goTo(active <= 0 ? last : active - 1), [goTo, active, last])

  useEffect(() => {
    if (!isRunning || isReduced) return
    setCycle((current) => current + 1)
    const timer = window.setTimeout(next, AUTOPLAY_MS)
    return () => window.clearTimeout(timer)
  }, [isRunning, isReduced, next])

  return { active, last, cycle, goTo, next, prev }
}
