import { FAQ_TECHNICAL_DB } from '@/data'
import type { FAQItem } from '@/types'

const DIRECT_ANSWER = FAQ_TECHNICAL_DB[0] as FAQItem

export function DirectAnswer(): React.JSX.Element {
  return (
    <section aria-labelledby="direct-answer-heading" className="w-full pt-space-lg pb-space-sm">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="rounded-lg border border-primary/20 bg-surface-container-low p-space-md md:p-space-lg">
          <h2 id="direct-answer-heading" className="font-headline-md text-headline-md text-on-surface">
            {DIRECT_ANSWER.question}
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm max-w-3xl">
            {DIRECT_ANSWER.answer}
          </p>
        </div>
      </div>
    </section>
  )
}
