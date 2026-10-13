import type { ReactNode } from 'react'
import { Children } from 'react'
import { Reveal } from '@/motion/Reveal'

interface CardGridSectionProps {
  readonly title?: string
  readonly description?: string
  readonly anchorId?: string
  readonly surface?: 'plain' | 'white'
  readonly columns?: 2 | 3 | 4
  readonly children: ReactNode
}

const GRID: Record<2 | 3 | 4, string> = {
  2: 'grid sm:grid-cols-2 gap-6 lg:gap-8 items-stretch',
  3: 'grid sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch',
  4: 'grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch',
}

export function CardGridSection({
  title,
  description,
  anchorId,
  surface = 'plain',
  columns = 3,
  children,
}: CardGridSectionProps): React.JSX.Element {
  return (
    <section
      id={anchorId}
      className={surface === 'white' ? 'py-12 md:py-16 bg-white border-y border-slate-200' : 'py-12 md:py-16'}
    >
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        {title ? (
          <Reveal className="max-w-2xl mb-space-xl">
            <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
            {description ? (
              <p className="text-body-md text-slate-600 mt-space-xs">{description}</p>
            ) : null}
          </Reveal>
        ) : null}
        <div className={`os-stagger ${GRID[columns]}`}>
          {Children.map(children, (child, idx) => (
            <Reveal key={idx} delayMs={idx * 120} className="h-full">
              {child}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
