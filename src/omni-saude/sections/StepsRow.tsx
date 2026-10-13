import { TimelineStep } from '@/common/TimelineStep'
import { Reveal } from '@/motion/Reveal'

interface Step {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description?: string
}

interface StepsRowProps {
  readonly title: string
  readonly description?: string
  readonly anchorId?: string
  readonly steps: readonly Step[]
}

export function StepsRow({
  title,
  description,
  anchorId,
  steps,
}: StepsRowProps): React.JSX.Element {
  return (
    <section id={anchorId} className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-2xl mb-space-xl">
          <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">{title}</h2>
          {description ? (
            <p className="text-body-md text-slate-600 mt-space-xs">{description}</p>
          ) : null}
        </Reveal>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step) => (
            <Reveal key={step.number} className="h-full">
              <TimelineStep
                number={step.number}
                label={step.label}
                title={step.title}
                {...(step.description === undefined ? {} : { description: step.description })}
                theme="light"
                color="secondary"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
