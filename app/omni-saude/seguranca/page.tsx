import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { DataLocationTable } from '@/omni-saude/components/DataLocationTable'
import { FinalCta } from '@/omni-saude/components/FinalCta'
import { InfoCard } from '@/omni-saude/components/InfoCard'
import { PageHero } from '@/omni-saude/components/PageHero'
import {
  SEGURANCA_ARCHITECTURE_CARDS,
  SEGURANCA_ARCHITECTURE_SECTION,
  SEGURANCA_CALLOUT,
  SEGURANCA_HERO,
} from '@/omni-saude/data/seguranca'
import {
  SEGURANCA_DATA_LOCATION,
  SEGURANCA_FINAL_CTA,
  SEGURANCA_IN_PROGRESS_CARDS,
  SEGURANCA_IN_PROGRESS_SECTION,
  SEGURANCA_LGPD_CARDS,
  SEGURANCA_LGPD_SECTION,
} from '@/omni-saude/data/seguranca-lgpd'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { CalloutBand } from '@/omni-saude/sections/CalloutBand'
import { CardGridSection } from '@/omni-saude/sections/CardGridSection'

const SEO = omniPageSeo({
  title: 'Segurança e LGPD — Omni Saúde',
  description:
    'Criptografia SHA-256 e TLS 1.3, Row Level Security e audit log completo. LGPD na prática, com a verdade sobre onde os dados ficam.',
  path: '/omni-saude/seguranca',
  crumbName: 'Segurança',
})

export const metadata: Metadata = SEO.metadata

export default function SegurancaPage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <PageHero title={SEGURANCA_HERO.title} description={SEGURANCA_HERO.description} />
      <CardGridSection title={SEGURANCA_ARCHITECTURE_SECTION.title} description={SEGURANCA_ARCHITECTURE_SECTION.description} surface="white">
        {SEGURANCA_ARCHITECTURE_CARDS.map((card) => (
          <InfoCard key={card.title} icon={card.icon} tone={card.tone} title={card.title} description={card.description} bullets={card.bullets} />
        ))}
      </CardGridSection>
      <CalloutBand icon="link_off" title={SEGURANCA_CALLOUT} tone="sky" headingLevel="p" />
      <CardGridSection title={SEGURANCA_LGPD_SECTION.title} description={SEGURANCA_LGPD_SECTION.description} columns={4}>
        {SEGURANCA_LGPD_CARDS.map((card) => (
          <InfoCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </CardGridSection>
      <CardGridSection title={SEGURANCA_IN_PROGRESS_SECTION.title} description={SEGURANCA_IN_PROGRESS_SECTION.description} surface="white">
        {SEGURANCA_IN_PROGRESS_CARDS.map((card) => (
          <InfoCard key={card.title} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </CardGridSection>
      <DataLocationTable
        title={SEGURANCA_DATA_LOCATION.title}
        description={SEGURANCA_DATA_LOCATION.description}
        rows={SEGURANCA_DATA_LOCATION.rows}
      />
      <FinalCta
        title={SEGURANCA_FINAL_CTA.title}
        description={SEGURANCA_FINAL_CTA.description}
        primaryCta={SEGURANCA_FINAL_CTA.primaryCta}
        secondaryCta={SEGURANCA_FINAL_CTA.secondaryCta}
      />
    </>
  )
}
