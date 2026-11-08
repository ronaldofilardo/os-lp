import type { Metadata } from 'next'
import { SITE } from '@/config/site'
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schemas'

interface OmniPageSeoInput {
  readonly title: string
  readonly description: string
  readonly path: string
  readonly crumbName?: string
}

interface OmniPageSeo {
  readonly metadata: Metadata
  readonly webpage: Record<string, unknown>
  readonly breadcrumb: Record<string, unknown>
}

export function omniPageSeo(input: OmniPageSeoInput): OmniPageSeo {
  const { title, description, path } = input
  const crumbs: readonly { readonly name: string; readonly path: string }[] =
    input.crumbName === undefined
      ? [
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Omni Saúde', path: '/omni-saude' },
        ]
      : [
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Omni Saúde', path: '/omni-saude' },
          { name: input.crumbName, path },
        ]
  return {
    metadata: {
      title,
      description,
      alternates: { canonical: path },
      openGraph: {
        title,
        description,
        url: `${SITE.domain}${path}`,
        siteName: SITE.name,
        type: 'website',
        locale: 'pt_BR',
      },
    },
    webpage: buildWebPageSchema({ title, description, path }),
    breadcrumb: buildBreadcrumbSchema(crumbs),
  }
}

export function buildOmniSaudeSoftwareSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    '@id': `${SITE.domain}/omni-saude/#software`,
    name: 'Omni Saúde',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Web, iOS, Android',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'BRL',
    },
    description:
      'Histórico unificado de exames e laudos laboratoriais no celular, com compartilhamento seguro para médicos e integração direta com laboratórios.',
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
  }
}
