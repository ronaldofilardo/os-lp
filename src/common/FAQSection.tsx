import { FAQ_DB } from '@/data'
import { JsonLd } from './JsonLd'
import { buildFaqPageSchema } from '@/lib/schemas'

export function FAQSection(): React.JSX.Element {
  return (
    <section className="w-full py-space-xl" id="faq">
      <JsonLd data={buildFaqPageSchema(FAQ_DB)} />
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-secondary uppercase tracking-wider">// Perguntas Frequentes</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Perguntas Frequentes sobre STE-DEV e Auditoria
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Tudo sobre nossa metodologia, processo de auditoria e como iniciar um projeto.
          </p>
        </div>
        <div className="space-y-px bg-outline-variant/20 rounded-lg overflow-hidden border border-outline-variant/30">
          {FAQ_DB.map((item, i) => (
            <details
              key={i}
              className="group bg-surface-container-low border-b border-outline-variant/20 last:border-0 open:bg-surface-container"
            >
              <summary className="flex items-center justify-between gap-space-sm px-space-md py-space-sm cursor-pointer font-headline-sm text-headline-sm text-on-surface text-left">
                <span>{item.question}</span>
                <span className="material-symbols-outlined text-primary text-[20px] transition-transform duration-200 group-open:rotate-180">
                  expand_more
                </span>
              </summary>
              <div className="px-space-md pb-space-sm">
                <p className="font-body-md text-body-md text-on-surface-variant">
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
