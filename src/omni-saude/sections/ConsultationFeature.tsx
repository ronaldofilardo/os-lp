import { HOME_CONSULTATION } from '@/omni-saude/data/home-detail'
import { FeatureRow } from '@/omni-saude/components/FeatureRow'
import { TimelineStep } from '@/common/TimelineStep'

function ConsultationSteps(): React.JSX.Element {
  return (
    <div className="flex flex-col gap-space-sm mt-space-sm">
      {HOME_CONSULTATION.steps.map((step, index) => (
        <TimelineStep
          key={step.title}
          number={String(index + 1)}
          label="Passo"
          title={step.title}
          description={step.description}
          theme="light"
          color="secondary"
        />
      ))}
    </div>
  )
}

export function ConsultationFeature(): React.JSX.Element {
  const cta = { label: HOME_CONSULTATION.ctaLabel, href: HOME_CONSULTATION.ctaHref }
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <FeatureRow
          image={HOME_CONSULTATION.image}
          badge={HOME_CONSULTATION.badge}
          title={HOME_CONSULTATION.title}
          description={HOME_CONSULTATION.description}
          cta={cta}
          reverse
        >
          <ConsultationSteps />
        </FeatureRow>
      </div>
    </section>
  )
}
