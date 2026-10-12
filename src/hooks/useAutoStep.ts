import { useEffect, useState } from 'react'

export function nextStep(current: number, count: number): number {
  return (current + 1) % count
}

export function useAutoStep(
  count: number,
  isEnabled: boolean,
  intervalMs: number,
): readonly [number, (_step: number) => void] {
  const [step, setStep] = useState(0)

  useEffect(() => {
    if (!isEnabled) return
    const timer = setInterval(() => setStep((current) => nextStep(current, count)), intervalMs)
    return () => clearInterval(timer)
  }, [count, isEnabled, intervalMs, step])

  return [step, setStep]
}
