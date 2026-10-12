interface CtaInlineProps {
  readonly label: string
  readonly href?: string
  readonly trustAnchor?: string
}

export function CtaInline({
  label,
  href = '/#contato',
  trustAnchor = 'Resposta em até 24h úteis • Sem compromisso comercial',
}: CtaInlineProps): React.JSX.Element {
  return (
    <aside className="not-prose my-space-lg p-space-md rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col sm:flex-row sm:items-center gap-space-sm">
      <a
        href={href}
        className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors w-fit"
      >
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-icon-lg">terminal</span>
        <span>{label}</span>
      </a>
      <span className="font-code-sm text-code-sm text-on-surface-variant">{trustAnchor}</span>
    </aside>
  )
}
