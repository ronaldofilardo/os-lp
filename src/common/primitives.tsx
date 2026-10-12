import type { ReactNode } from 'react'

type SectionTag = 'section' | 'div' | 'article' | 'aside' | 'header' | 'footer'

interface SectionProps {
  readonly id?: string
  readonly className?: string
  readonly children: ReactNode
  readonly as?: SectionTag
  readonly ariaLabelledBy?: string
}

export function Section({
  id,
  className = '',
  children,
  as: Tag = 'section',
  ariaLabelledBy,
}: SectionProps): React.JSX.Element {
  return (
    <Tag id={id} className={className} aria-labelledby={ariaLabelledBy}>
      {children}
    </Tag>
  )
}

interface ArticleProps {
  readonly className?: string
  readonly children: ReactNode
}

export function Article({ className = '', children }: ArticleProps): React.JSX.Element {
  return <article className={className}>{children}</article>
}

interface AsideProps {
  readonly className?: string
  readonly children: ReactNode
}

export function Aside({ className = '', children }: AsideProps): React.JSX.Element {
  return <aside className={className}>{children}</aside>
}

export function PageContainer({
  children,
  className = '',
}: {
  readonly children: ReactNode
  readonly className?: string
}): React.JSX.Element {
  return (
    <div className={`max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin ${className}`.trim()}>
      {children}
    </div>
  )
}
