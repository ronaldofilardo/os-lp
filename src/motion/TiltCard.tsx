'use client'

import { useRef, type PointerEvent, type ReactNode } from 'react'

interface TiltCardProps {
  readonly children: ReactNode
  readonly className?: string
  readonly maxTiltDeg?: number
}

export function TiltCard({ children, className = '', maxTiltDeg = 7 }: TiltCardProps): React.JSX.Element {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (event: PointerEvent<HTMLDivElement>): void => {
    const node = ref.current
    if (!node || event.pointerType !== 'mouse') return
    const box = node.getBoundingClientRect()
    const x = (event.clientX - box.left) / box.width
    const y = (event.clientY - box.top) / box.height
    node.style.setProperty('--ry', `${(x - 0.5) * 2 * maxTiltDeg}deg`)
    node.style.setProperty('--rx', `${(0.5 - y) * 2 * maxTiltDeg}deg`)
    node.style.setProperty('--mx', `${x * 100}%`)
    node.style.setProperty('--my', `${y * 100}%`)
  }

  const onLeave = (): void => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
  }

  return (
    <div ref={ref} className={`tilt-card ${className}`.trim()} onPointerMove={onMove} onPointerLeave={onLeave}>
      {children}
      <span className="tilt-glare" aria-hidden="true" />
    </div>
  )
}
