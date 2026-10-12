'use client'

import { useEffect, useState, type ReactNode } from 'react'
import { useInView } from '@/hooks/useInView'

interface RevealProps {
  readonly children: ReactNode
  readonly delayMs?: number
  readonly threshold?: number
  readonly className?: string
}

function isOnScreen(node: Element): boolean {
  const box = node.getBoundingClientRect()
  return box.top < window.innerHeight && box.bottom > 0
}

function resolveStateClass(isArmed: boolean, isInView: boolean): string {
  if (!isArmed) return ''
  return isInView ? 'reveal reveal-in' : 'reveal'
}

export function Reveal({ children, delayMs = 0, threshold = 0.12, className = '' }: RevealProps): React.JSX.Element {
  const [ref, isInView] = useInView<HTMLDivElement>({ once: true, threshold })
  const [isArmed, setIsArmed] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (node && !isOnScreen(node)) setIsArmed(true)
  }, [ref])

  return (
    <div
      ref={ref}
      className={`${resolveStateClass(isArmed, isInView)} ${className}`.trim()}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  )
}
