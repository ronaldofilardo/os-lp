'use client'

import { useEffect, useState } from 'react'
import { LazyOnView } from '@/three/LazyOnView'
import { LazyHeroCore } from '@/three/lazy'
import { SceneFallback } from '@/three/SceneFallback'
import { useMediaQuery } from '@/hooks'

const MOBILE_QUERY = '(max-width: 767px)'
const INTERACTIONS = ['wheel', 'keydown', 'touchstart', 'pointerdown'] as const

interface IdleWindow {
  requestIdleCallback?: (_callback: () => void, _options?: { timeout: number }) => number
  cancelIdleCallback?: (_handle: number) => void
}

const HUD_CHIPS = [
  { label: 'any: 0', position: 'top-5 left-4', delay: '0s' },
  { label: 'LOC < 100', position: 'top-1/3 right-4', delay: '1.2s' },
  { label: 'ASD-STE100 ✓', position: 'bottom-20 left-5', delay: '2.4s' },
] as const

export function HeroVisual(): React.JSX.Element {
  const isMobile = useMediaQuery(MOBILE_QUERY)
  const [idleReady, setIdleReady] = useState(false)

  useEffect(() => {
    if (isMobile) {
      setIdleReady(false)
      return
    }
    const idleWindow = window as unknown as IdleWindow
    let wakeHandle: number | undefined
    let usesIdleApi = false
    const wake = (): void => setIdleReady(true)

    if (typeof idleWindow.requestIdleCallback === 'function') {
      usesIdleApi = true
      wakeHandle = idleWindow.requestIdleCallback(wake, { timeout: 2000 })
    } else {
      wakeHandle = window.setTimeout(wake, 2000)
    }

    for (const event of INTERACTIONS) window.addEventListener(event, wake, { passive: true })

    return () => {
      if (usesIdleApi) idleWindow.cancelIdleCallback?.(wakeHandle as number)
      else window.clearTimeout(wakeHandle)
      for (const event of INTERACTIONS) window.removeEventListener(event, wake)
    }
  }, [isMobile])

  const showScene = !isMobile && idleReady

  return (
    <div className="w-full rounded-xl bg-surface-container-low border border-outline-variant/60 shadow-2xl overflow-hidden">
      <div className="h-9 bg-surface-container-lowest px-4 flex items-center justify-between border-b border-outline-variant/30">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container/70" />
          <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
        </div>
        <div className="font-code-sm text-code-sm text-on-surface-variant/70 flex items-center gap-1 bg-surface-container-high/40 px-2 py-0.5 rounded">
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[12px]">lock</span>
          <span>telemetry.omni-sistemas.internal/console</span>
        </div>
        <div className="w-12" />
      </div>
      <div className="relative h-72 sm:h-[26rem] w-full bg-surface-container-lowest/70">
        {isMobile ? (
          <SceneFallback />
        ) : (
          <LazyOnView fallback={<SceneFallback />}>
            {showScene ? <LazyHeroCore /> : <SceneFallback />}
          </LazyOnView>
        )}
        {HUD_CHIPS.map((chip) => (
          <span
            key={chip.label}
            style={{ animationDelay: chip.delay }}
            className={`float-y absolute ${chip.position} px-2 py-1 rounded bg-surface-container/80 border border-primary/30 backdrop-blur font-code-sm text-code-sm text-primary`}
          >
            {chip.label}
          </span>
        ))}
        <div className="absolute bottom-4 left-4 right-4 bg-surface-container/90 backdrop-blur border border-outline-variant/50 rounded p-2.5 flex items-center justify-between text-left">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            <span className="font-code-sm text-code-sm text-on-surface">Metodologia STE-DEV // DEV &amp; Auditoria</span>
          </div>
          <span className="font-code-sm text-code-sm text-secondary font-semibold">ISO/IEC 25010</span>
        </div>
      </div>
    </div>
  )
}
