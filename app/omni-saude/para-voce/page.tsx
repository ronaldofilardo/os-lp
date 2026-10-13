import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { FinalCta } from '@/omni-saude/components/FinalCta'
import { InfoCard } from '@/omni-saude/components/InfoCard'
import { PageHero } from '@/omni-saude/components/PageHero'
import {
  PARA_VOCE_BENEFITS,
  PARA_VOCE_BENEFITS_SECTION,
  PARA_VOCE_HERO,
} from '@/omni-saude/data/para-voce'
import {
  PARA_VOCE_FEATURES,
  PARA_VOCE_FEATURES_SECTION,
  PARA_VOCE_FINAL_CTA,
  PARA_VOCE_USE_CASES,
  PARA_VOCE_USE_CASES_SECTION,
} from '@/omni-saude/data/para-voce-features'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { CardGridSection } from '@/omni-saude/sections/CardGridSection'
import { TextCard } from '@/omni-saude/sections/TextCard'

const SEO = omniPageSeo({
  title: 'Omni Saúde para Você e Sua Família',
  description:
    'Centralize exames, laudos e receitas de toda a família em um só lugar, com alertas quando o resultado fica pronto e compartilhamento seletivo.',
  path: '/omni-saude/para-voce',
  crumbName: 'Para Você',
})

export const metadata: Metadata = SEO.metadata

export default function ParaVocePage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <PageHero
        title={PARA_VOCE_HERO.title}
        description={PARA_VOCE_HERO.description}
        primaryCta={{ label: PARA_VOCE_HERO.ctaLabel, href: PARA_VOCE_HERO.ctaHref }}
      />
      <CardGridSection title={PARA_VOCE_BENEFITS_SECTION.title} description={PARA_VOCE_BENEFITS_SECTION.description} surface="white">
        {PARA_VOCE_BENEFITS.map((benefit) => (
          <InfoCard key={benefit.title} icon={benefit.icon} tone={benefit.tone} title={benefit.title} description={benefit.description} />
        ))}
      </CardGridSection>
      <CardGridSection title={PARA_VOCE_FEATURES_SECTION.title} description={PARA_VOCE_FEATURES_SECTION.description}>
        {PARA_VOCE_FEATURES.map((feature) => (
          <InfoCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} bullets={feature.bullets} />
        ))}
      </CardGridSection>
      <CardGridSection title={PARA_VOCE_USE_CASES_SECTION.title} description={PARA_VOCE_USE_CASES_SECTION.description} surface="white" columns={4}>
        {PARA_VOCE_USE_CASES.map((useCase) => (
          <TextCard key={useCase.title} title={useCase.title} description={useCase.description} />
        ))}
      </CardGridSection>
      <FinalCta
        title={PARA_VOCE_FINAL_CTA.title}
        description={PARA_VOCE_FINAL_CTA.description}
        primaryCta={PARA_VOCE_FINAL_CTA.primaryCta}
        secondaryCta={PARA_VOCE_FINAL_CTA.secondaryCta}
      />
    </>
  )
}
