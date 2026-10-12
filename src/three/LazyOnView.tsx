'use client'

import type { ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface LazyOnViewProps {
  readonly children: ReactNode
  readonly fallback: ReactNode
}

export function LazyOnView({ children, fallback }: LazyOnViewProps): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true, rootMargin: '240px' })

  return (
    <div ref={ref} className="relative h-full w-full">
      {isInView ? children : fallback}
    </div>
  )
}
