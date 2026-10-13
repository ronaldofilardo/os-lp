import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { InfoCard } from '@/omni-saude/components/InfoCard'
import { PageHero } from '@/omni-saude/components/PageHero'
import { LABS_HERO, LABS_PROBLEMS, LABS_PROBLEM_SECTION, LABS_STEPS, LABS_STEPS_SECTION } from '@/omni-saude/data/labs'
import { LABS_INTEGRATION_CARDS, LABS_INTEGRATION_SECTION } from '@/omni-saude/data/labs-integration'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { CardGridSection } from '@/omni-saude/sections/CardGridSection'
import { DemoSection } from '@/omni-saude/sections/DemoSection'
import { StepsRow } from '@/omni-saude/sections/StepsRow'
import { TextCard } from '@/omni-saude/sections/TextCard'

const SEO = omniPageSeo({
  title: 'Omni Saúde para Laboratórios e Clínicas',
  description:
    'Integre seu laboratório uma vez e entregue o laudo no celular do paciente na hora. Sem trocar de LIS: API em cerca de 1 semana ou painel web manual.',
  path: '/omni-saude/para-labs',
  crumbName: 'Laboratórios e Clínicas',
})

export const metadata: Metadata = SEO.metadata

export default function ParaLabsPage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <PageHero
        title={LABS_HERO.title}
        description={LABS_HERO.description}
        primaryCta={LABS_HERO.primaryCta}
        secondaryCta={LABS_HERO.secondaryCta}
      />
      <CardGridSection title={LABS_PROBLEM_SECTION.title} description={LABS_PROBLEM_SECTION.description} surface="white">
        {LABS_PROBLEMS.map((problem) => (
          <InfoCard key={problem.title} icon={problem.icon} title={problem.title} description={problem.description} />
        ))}
      </CardGridSection>
      <StepsRow title={LABS_STEPS_SECTION.title} description={LABS_STEPS_SECTION.description} steps={LABS_STEPS} />
      <CardGridSection
        title={LABS_INTEGRATION_SECTION.title}
        description={LABS_INTEGRATION_SECTION.description}
        anchorId={LABS_INTEGRATION_SECTION.anchorId}
        surface="white"
      >
        {LABS_INTEGRATION_CARDS.map((card) => (
          <TextCard key={card.title} title={card.title} description={card.description} />
        ))}
      </CardGridSection>
      <DemoSection />
    </>
  )
}
