import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { BeforeAfter } from '@/omni-saude/components/BeforeAfter'
import { FinalCta } from '@/omni-saude/components/FinalCta'
import { InfoCard } from '@/omni-saude/components/InfoCard'
import { PageHero } from '@/omni-saude/components/PageHero'
import {
  MEDICOS_FLOW_SECTION,
  MEDICOS_FLOW_STEPS,
  MEDICOS_HERO,
  MEDICOS_RULE_CARDS,
  MEDICOS_RULE_SECTION,
} from '@/omni-saude/data/medicos'
import { MEDICOS_BEFORE_AFTER, MEDICOS_FINAL_CTA } from '@/omni-saude/data/medicos-rotina'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { CardGridSection } from '@/omni-saude/sections/CardGridSection'
import { StepsRow } from '@/omni-saude/sections/StepsRow'

const SEO = omniPageSeo({
  title: 'Omni Saúde para Médicos',
  description:
    'O paciente compartilha um link temporário e você vê o que ele enviou — sem cadastro, sem CPF e sem armazenamento do seu lado.',
  path: '/omni-saude/medicos',
  crumbName: 'Médicos',
})

export const metadata: Metadata = SEO.metadata

export default function MedicosPage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <PageHero title={MEDICOS_HERO.title} description={MEDICOS_HERO.description} />
      <CardGridSection title={MEDICOS_RULE_SECTION.title} description={MEDICOS_RULE_SECTION.description} surface="white">
        {MEDICOS_RULE_CARDS.map((rule) => (
          <InfoCard key={rule.title} icon={rule.icon} tone={rule.tone} title={rule.title} description={rule.description} />
        ))}
      </CardGridSection>
      <StepsRow title={MEDICOS_FLOW_SECTION.title} description={MEDICOS_FLOW_SECTION.description} steps={MEDICOS_FLOW_STEPS} />
      <BeforeAfter
        title={MEDICOS_BEFORE_AFTER.title}
        before={MEDICOS_BEFORE_AFTER.before}
        after={MEDICOS_BEFORE_AFTER.after}
      />
      <FinalCta
        title={MEDICOS_FINAL_CTA.title}
        description={MEDICOS_FINAL_CTA.description}
        primaryCta={MEDICOS_FINAL_CTA.primaryCta}
        secondaryCta={MEDICOS_FINAL_CTA.secondaryCta}
      />
    </>
  )
}
