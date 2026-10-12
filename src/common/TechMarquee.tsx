import { PROJECTS_DB } from '@/data'

const METHOD_TERMS = ['ASD-STE100', 'Clean Architecture', 'SOLID', 'Strangler Pattern', 'Zero-any'] as const

function collectTerms(): readonly string[] {
  const stack = PROJECTS_DB.flatMap((project) => project.techStack)
  return Array.from(new Set([...METHOD_TERMS, ...stack]))
}

function TermList({ terms }: { readonly terms: readonly string[] }): React.JSX.Element {
  return (
    <ul className="flex shrink-0 items-center">
      {terms.map((term) => (
        <li key={term} className="mr-10 flex items-center gap-2 font-code-md text-code-md text-on-surface-variant whitespace-nowrap">
          <span className="text-primary">◈</span>
          {term}
        </li>
      ))}
    </ul>
  )
}

export function TechMarquee(): React.JSX.Element {
  const terms = collectTerms()

  return (
    <div className="marquee py-space-md border-y border-outline-variant/30 bg-surface-container-lowest/50" aria-label="Tecnologias e práticas">
      <div className="marquee-track">
        <TermList terms={terms} />
        <div aria-hidden="true">
          <TermList terms={terms} />
        </div>
      </div>
    </div>
  )
}
