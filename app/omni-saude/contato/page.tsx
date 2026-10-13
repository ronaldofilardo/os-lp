import type { Metadata } from 'next'
import { JsonLd } from '@/common/JsonLd'
import { AudienceSplit } from '@/omni-saude/components/AudienceSplit'
import { PageHero } from '@/omni-saude/components/PageHero'
import { CONTATO_AUDIENCE_CARDS, CONTATO_HERO } from '@/omni-saude/data/contato'
import { omniPageSeo } from '@/omni-saude/lib/seo'
import { ChannelsSection } from '@/omni-saude/sections/ChannelsSection'

const SEO = omniPageSeo({
  title: 'Contato — Omni Saúde',
  description:
    'Pacientes, laboratórios e clínicas: escolha o canal ideal. WhatsApp oficial e e-mail corporativo, com resposta em até 24 horas úteis.',
  path: '/omni-saude/contato',
  crumbName: 'Contato',
})

export const metadata: Metadata = SEO.metadata

export default function ContatoPage(): React.JSX.Element {
  return (
    <>
      <JsonLd data={SEO.webpage} />
      <JsonLd data={SEO.breadcrumb} />
      <PageHero
        eyebrow={CONTATO_HERO.eyebrow}
        title={CONTATO_HERO.title}
        description={CONTATO_HERO.description}
      />
      <AudienceSplit cards={CONTATO_AUDIENCE_CARDS} headingLevel="h2" />
      <ChannelsSection />
    </>
  )
}
