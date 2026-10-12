'use client'

import { useEffect, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { easeOutCubic, formatCount } from './counterMath'

interface CounterProps {
  readonly target: number
  readonly decimals?: number
  readonly prefix?: string
  readonly suffix?: string
  readonly durationMs?: number
}

export function Counter({
  target,
  decimals = 0,
  prefix = '',
  suffix = '',
  durationMs = 1400,
}: CounterProps): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLSpanElement>({ once: true })
  const isReduced = useReducedMotion()
  const [value, setValue] = useState(target)

  useEffect(() => {
    if (!isInView || isReduced) return
    let frameId = 0
    const startedAt = performance.now()
    const tick = (now: number): void => {
      const progress = Math.min((now - startedAt) / durationMs, 1)
      setValue(target * easeOutCubic(progress))
      if (progress < 1) frameId = requestAnimationFrame(tick)
    }
    frameId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frameId)
  }, [isInView, isReduced, target, durationMs])

  const text = formatCount(value, decimals)

  return <span ref={ref}>{`${prefix}${text}${suffix}`}</span>
}
