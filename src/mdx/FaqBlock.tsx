interface FaqItem {
  readonly question: string
  readonly answer: string
}

interface FaqBlockProps {
  readonly items: readonly FaqItem[]
}

export function FaqBlock({ items }: FaqBlockProps): React.JSX.Element {
  return (
    <section aria-labelledby="article-faq-heading" className="not-prose my-space-xl">
      <h2 id="article-faq-heading" className="font-headline-md text-headline-md text-on-surface mb-space-md">
        Perguntas Frequentes
      </h2>
      <div className="space-y-px bg-outline-variant/20 rounded-lg overflow-hidden border border-outline-variant/30">
        {items.map((item) => (
          <details
            key={item.question}
            className="group bg-surface-container-low border-b border-outline-variant/20 last:border-0 open:bg-surface-container"
          >
            <summary className="flex items-center justify-between gap-space-sm px-space-md py-space-sm cursor-pointer font-headline-sm text-headline-sm text-on-surface text-left">
              <h3 className="m-0 font-semibold">{item.question}</h3>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-primary text-icon-lg transition-transform duration-200 group-open:rotate-180">
                expand_more
              </span>
            </summary>
            <div className="px-space-md pb-space-sm">
              <p className="font-body-md text-body-md text-on-surface-variant">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  )
}
