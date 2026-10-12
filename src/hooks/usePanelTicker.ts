import { useEffect, useState } from 'react'
import { useReducedMotion } from './useReducedMotion'

const TICK_MS = 2800
const ROW_COUNT = 4
const BASE_PIX = 12480
const BASE_BOLETOS = 38
const PIX_STEPS = [180, 240, 320, 150, 410, 275] as const

export interface PanelTicker {
  readonly pix: number
  readonly boletos: number
  readonly activeRow: number
  readonly tick: number
}

function sumPix(tick: number): number {
  let total = BASE_PIX
  for (let index = 0; index < tick; index += 1) total += PIX_STEPS[index % PIX_STEPS.length] ?? 0
  return total
}

export function usePanelTicker(): PanelTicker {
  const isReduced = useReducedMotion()
  const [tick, setTick] = useState(0)

  useEffect(() => {
    if (isReduced) return
    const timer = window.setInterval(() => setTick((current) => current + 1), TICK_MS)
    return () => window.clearInterval(timer)
  }, [isReduced])

  return { pix: sumPix(tick), boletos: BASE_BOLETOS + Math.floor(tick / 2), activeRow: tick % ROW_COUNT, tick }
}

export function formatBrl(value: number): string {
  return `R$ ${String(value).replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`
}
