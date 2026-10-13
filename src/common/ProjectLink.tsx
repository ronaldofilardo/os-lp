import Link from 'next/link'
import type { ReactNode } from 'react'

interface ProjectLinkProps {
  readonly href: string
  readonly className?: string
  readonly ariaLabel?: string
  readonly children: ReactNode
}

export function isInternalHref(href: string): boolean {
  return href.startsWith('/')
}

export function ProjectLink({
  href,
  className,
  ariaLabel,
  children,
}: ProjectLinkProps): JSX.Element {
  if (isInternalHref(href)) {
    return (
      <Link href={href} className={className} aria-label={ariaLabel}>
        {children}
      </Link>
    )
  }
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}
