import type { FAQItem } from '@/types'
import type { HeaderTheme } from './Header'
import { SectionHeader } from './SectionHeader'

interface FAQSectionProps {
  readonly items: readonly FAQItem[]
  readonly eyebrow?: string
  readonly title?: string
  readonly description?: string
  readonly theme?: HeaderTheme
}

export function FAQSection({
  items,
  eyebrow = '// Perguntas Frequentes',
  title = 'Perguntas Frequentes sobre STE-DEV e Auditoria',
  description = 'Tudo sobre nossa metodologia, processo de auditoria e como iniciar um projeto.',
  theme = 'dark',
}: FAQSectionProps): React.JSX.Element {
  const light = theme === 'light'

  return (
    <section className={`w-full py-space-lg md:py-space-xl ${light ? 'bg-white border-y border-slate-200' : ''}`} id="faq">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow={eyebrow}
          title={title}
          description={description}
          tone="secondary"
          theme={theme}
          maxWidthClass="max-w-2xl"
        />
        <div
          className={
            light
              ? 'space-y-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200'
              : 'space-y-px bg-outline-variant/20 rounded-2xl overflow-hidden border border-outline-variant/30'
          }
        >
          {items.map((item, i) => (
            <details
              key={i}
              className={
                light
                  ? 'group bg-white border-b border-slate-200 last:border-0 open:bg-slate-50'
                  : 'group bg-surface-container-low border-b border-outline-variant/20 last:border-0 open:bg-surface-container'
              }
            >
              <summary className="flex items-center justify-between gap-space-sm px-space-md py-space-sm cursor-pointer font-headline-sm text-headline-sm text-left text-slate-900">
                <h3 className="m-0 font-semibold">{item.question}</h3>
                <span
                  aria-hidden="true"
                  translate="no"
                  className={`material-symbols-outlined text-[20px] transition-transform duration-200 group-open:rotate-180 ${
                    light ? 'text-sky-600' : 'text-primary'
                  }`}
                >
                  expand_more
                </span>
              </summary>
              <div className="px-space-md pb-space-sm">
                <p className={`font-body-md text-body-md ${light ? 'text-slate-600' : 'text-on-surface-variant'}`}>
                  {item.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
