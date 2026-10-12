'use client'

import { useRef, useState } from 'react'
import { useInView } from '@/hooks/useInView'
import { useScrollCarousel, AUTOPLAY_MS } from '@/hooks/useScrollCarousel'
import { SLIDE_THEMES, SlideVisual, type Benefit } from './benefitSlides'

export type { Benefit }

export function BenefitsCarousel({ benefits }: { readonly benefits: readonly Benefit[] }): JSX.Element {
  const trackRef = useRef<HTMLUListElement>(null)
  const [viewRef, isInView] = useInView<HTMLDivElement>()
  const [isPlaying, setIsPlaying] = useState(true)
  const { active, cycle, goTo } = useScrollCarousel(trackRef, isInView && isPlaying)

  return (
    <div ref={viewRef} role="group" aria-roledescription="carrossel" aria-label="Quatro motivos para confiar na Omni Sistemas">
      <ul
        ref={trackRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scroll-smooth list-none m-0 py-4 px-[8%] md:px-[10%] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {benefits.map((benefit, index) => {
          const theme = SLIDE_THEMES[index % SLIDE_THEMES.length] ?? SLIDE_THEMES[0]!
          const isActive = index === active
          return (
            <li
              key={benefit.title}
              aria-label={`${index + 1} de ${benefits.length}`}
              onClick={() => goTo(index)}
              className={`snap-center shrink-0 basis-[84%] md:basis-[80%] transition-all duration-700 ${isActive ? 'opacity-100 scale-100' : 'opacity-60 scale-[0.94] cursor-pointer'}`}
            >
              <div className={`relative overflow-hidden h-full min-h-[27rem] md:min-h-[24rem] rounded-[2rem] border border-slate-200/80 bg-gradient-to-br ${theme.surface} shadow-xl flex flex-col-reverse md:flex-row items-center justify-between gap-6 p-space-lg md:p-12`}>
                <div className="flex flex-col gap-3 md:max-w-md self-start md:self-center">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {String(index + 1).padStart(2, '0')} / {String(benefits.length).padStart(2, '0')}
                  </span>
                  <h3 className={`block text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight leading-tight bg-gradient-to-r ${theme.headline} bg-clip-text text-transparent`}>
                    {benefit.title}
                  </h3>
                  <p className="text-base md:text-lg text-slate-600 leading-relaxed">{benefit.text}</p>
                </div>
                <SlideVisual icon={benefit.icon} theme={theme} />
              </div>
            </li>
          )
        })}
      </ul>
      <div className="flex items-center justify-center gap-3 mt-space-md">
        <div className="flex items-center gap-2.5 px-4 h-10 rounded-full bg-slate-200/70 backdrop-blur">
          {benefits.map((benefit, index) => (
            <button
              key={benefit.title}
              type="button"
              aria-label={`Ir para o motivo ${index + 1}`}
              aria-current={index === active}
              onClick={() => goTo(index)}
              className={`relative h-2 rounded-full overflow-hidden bg-slate-400/60 transition-all duration-500 ${index === active ? 'w-10' : 'w-2'}`}
            >
              {index === active && (
                <span
                  key={cycle}
                  className="bn-progress absolute inset-0 rounded-full bg-slate-700"
                  style={{ animationDuration: `${AUTOPLAY_MS}ms`, animationPlayState: isInView && isPlaying ? 'running' : 'paused' }}
                />
              )}
            </button>
          ))}
        </div>
        <button
          type="button"
          aria-label={isPlaying ? 'Pausar carrossel' : 'Reproduzir carrossel'}
          onClick={() => setIsPlaying((current) => !current)}
          className="w-10 h-10 rounded-full bg-slate-200/70 text-slate-700 flex items-center justify-center hover:bg-slate-300/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky-500"
        >
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
        </button>
      </div>
    </div>
  )
}
