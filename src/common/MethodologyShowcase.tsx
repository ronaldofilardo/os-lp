'use client'

import { useInView } from '@/hooks/useInView'
import { useAutoStep } from '@/hooks/useAutoStep'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { Reveal } from '@/motion/Reveal'
import { LazyOnView } from '@/three/LazyOnView'
import { LazyPillars } from '@/three/lazy'
import { SceneFallback } from '@/three/SceneFallback'
import { PillarCard } from './PillarCard'
import { PILLARS } from './pillars'

const STEP_INTERVAL_MS = 3200

export function MethodologyShowcase(): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>()
  const isTouchOnly = useMediaQuery('(hover: none)')
  const isReduced = useReducedMotion()
  const [activeIndex, setActiveIndex] = useAutoStep(PILLARS.length, isInView && isTouchOnly && !isReduced, STEP_INTERVAL_MS)

  return (
    <div ref={ref} className="grid grid-cols-1 lg:grid-cols-12 gap-space-md lg:gap-space-lg items-stretch">
      <div className="lg:col-span-5 relative h-[280px] sm:h-[340px] lg:h-auto lg:min-h-[460px] rounded-xl border border-outline-variant/50 bg-surface-container-lowest/60 overflow-hidden">
        <LazyOnView fallback={<SceneFallback />}>
          <LazyPillars activeIndex={activeIndex} onSelect={setActiveIndex} />
        </LazyOnView>
        <span className="absolute left-4 top-3 font-label-caps text-label-caps text-primary uppercase tracking-widest">
          {`Pilar ${PILLARS[activeIndex]?.number ?? '01'} // ativo`}
        </span>
      </div>
      <div className="lg:col-span-7 grid grid-cols-2 gap-space-sm md:gap-space-md">
        {PILLARS.map((pillar, index) => (
          <Reveal key={pillar.number} delayMs={index * 90} className="h-full">
            <PillarCard {...pillar} isActive={index === activeIndex} onActivate={() => setActiveIndex(index)} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
