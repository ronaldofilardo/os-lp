import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { AudienceSplit } from '@/omni-saude/components/AudienceSplit'
import { FinalCta } from '@/omni-saude/components/FinalCta'
import { HOME_AUDIENCE_CARDS, HOME_AUDIENCE_SECTION } from '@/omni-saude/data/home'
import { HOME_FINAL_CTA, HOME_SECURITY_BANNER } from '@/omni-saude/data/home-detail'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { CalloutBand } from '@/omni-saude/sections/CalloutBand'
import { ConsultationFeature } from '@/omni-saude/sections/ConsultationFeature'
import { HomeHero } from '@/omni-saude/sections/HomeHero'

const SEO = omniPageSeo({
  title: 'Omni Saúde — Seus exames e laudos no celular',
  description:
    'Seus exames, laudos e receitas no celular: histórico unificado para a família, alertas automáticos e compartilhamento seguro com seu médico.',
  path: '/omni-saude',
})

export const metadata: Metadata = SEO.metadata

export default function OmniSaudeHomePage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <HomeHero />
      <AudienceSplit
        sectionTitle={HOME_AUDIENCE_SECTION.title}
        sectionDescription={HOME_AUDIENCE_SECTION.description}
        cards={HOME_AUDIENCE_CARDS}
      />
      <ConsultationFeature />
      <CalloutBand
        eyebrow={HOME_SECURITY_BANNER.badge}
        icon="lock"
        title={HOME_SECURITY_BANNER.title}
        description={HOME_SECURITY_BANNER.description}
        cta={{ label: HOME_SECURITY_BANNER.ctaLabel, href: HOME_SECURITY_BANNER.ctaHref }}
        tone="emerald"
      />
      <FinalCta
        title={HOME_FINAL_CTA.title}
        description={HOME_FINAL_CTA.description}
        primaryCta={{ label: HOME_FINAL_CTA.ctaLabel, href: HOME_FINAL_CTA.ctaHref }}
      />
    </>
  )
}
