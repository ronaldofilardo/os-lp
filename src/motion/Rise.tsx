import type { ReactNode } from 'react'

interface RiseProps {
  readonly children: ReactNode
  readonly delayMs?: number
  readonly className?: string
}

export function Rise({ children, delayMs = 0, className = '' }: RiseProps): React.JSX.Element {
  return (
    <div className={`rise-in ${className}`.trim()} style={{ animationDelay: `${delayMs}ms` }}>
      {children}
    </div>
  )
}
