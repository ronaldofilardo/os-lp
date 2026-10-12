'use client'

import { useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useAutoStep } from '@/hooks/useAutoStep'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { LazyOnView } from '@/three/LazyOnView'
import { LazyStrangler } from '@/three/lazy'
import { SceneFallback } from '@/three/SceneFallback'
import { AUDIT_STEPS } from './auditSteps'

const STEP_INTERVAL_MS = 3800

export function AuditShowcase(): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>()
  const isReduced = useReducedMotion()
  const [isPaused, setIsPaused] = useState(false)
  const [step, setStep] = useAutoStep(AUDIT_STEPS.length, isInView && !isPaused && !isReduced, STEP_INTERVAL_MS)

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-lg items-stretch">
      <div
        className="lg:col-span-5 flex flex-col gap-space-sm"
        onPointerEnter={(event) => event.pointerType === 'mouse' && setIsPaused(true)}
        onPointerLeave={() => setIsPaused(false)}
      >
        {AUDIT_STEPS.map((item, index) => {
          const isActive = index === step
          const stateClass = isActive ? 'border-primary/70 bg-surface-container shadow-[0_0_24px_rgba(129,212,250,0.20)]' : 'border-outline-variant/40 bg-surface-container-low hover:border-outline-variant'
          return (
            <button
              key={item.number}
              type="button"
              onClick={() => setStep(index)}
              aria-pressed={isActive}
              className={`text-left p-space-sm md:p-space-md rounded-lg border transition-all duration-300 flex items-start gap-space-md ${stateClass}`}
            >
              <span className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center font-code-sm text-code-sm font-bold ${isActive ? 'bg-primary-container text-on-primary-container' : 'bg-primary/15 text-primary'}`}>
                {item.number}
              </span>
              <span className="flex flex-col gap-1">
                <span className="font-headline-sm text-headline-sm text-on-surface">{item.title}</span>
                <span className="font-body-sm text-body-sm text-on-surface-variant">{item.description}</span>
              </span>
            </button>
          )
        })}
      </div>
      <div className="order-first lg:order-none lg:col-span-7 relative h-[300px] sm:h-[360px] lg:h-auto lg:min-h-[440px] rounded-xl border border-outline-variant/50 bg-surface-container-lowest/60 overflow-hidden">
        <LazyOnView fallback={<SceneFallback />}>
          <LazyStrangler step={step} />
        </LazyOnView>
        <span className="absolute left-4 top-3 font-label-caps text-label-caps text-primary uppercase tracking-widest">
          {`Etapa ${AUDIT_STEPS[step]?.number ?? '01'} // ${AUDIT_STEPS[step]?.title ?? ''}`}
        </span>
      </div>
    </div>
  )
}
