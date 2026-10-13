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
              : 'space-y-px bg-slate-800/60 rounded-2xl overflow-hidden border border-slate-800'
          }
        >
          {items.map((item, i) => (
            <details
              key={i}
              className={
                light
                  ? 'group bg-white border-b border-slate-200 last:border-0 open:bg-slate-50'
                  : 'group bg-slate-900/70 hover:bg-slate-900/90 transition-colors border-b border-slate-800 last:border-0 open:bg-slate-900'
              }
            >
              <summary
                className={`flex items-center justify-between gap-space-sm px-space-md py-space-sm cursor-pointer font-headline-sm text-headline-sm text-left transition-colors select-none ${
                  light
                    ? 'text-slate-900 hover:text-slate-700'
                    : 'text-white hover:text-primary'
                }`}
              >
                <h3 className="m-0 font-semibold tracking-tight">{item.question}</h3>
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
                <p className={`font-body-md text-body-md leading-relaxed ${light ? 'text-slate-600' : 'text-slate-300'}`}>
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
