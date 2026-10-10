import { SITE } from '@/config/site'

export function buildOrganizationSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.domain,
    logo: SITE.logo,
    description:
      'Softhouse especializada em engenharia de software preventiva (DEV) e engenharia reversa para auditorias de sistemas de missão crítica. Metodologia proprietária STE-DEV baseada em ASD-STE100.',
    foundingDate: SITE.foundingDate,
    knowsAbout: [...SITE.knowsAbout],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'São Paulo',
      addressCountry: 'BR',
    },
    sameAs: [...SITE.sameAs],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'technical sales',
        email: SITE.email,
        availableLanguage: ['Portuguese', 'English'],
      },
    ],
  }
}

export function buildProfessionalServiceSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: `${SITE.name} — Serviços de Engenharia Preventiva`,
    url: SITE.domain,
    provider: {
      '@type': 'Organization',
      name: SITE.name,
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Engenharia STE-DEV',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Desenvolvimento do Zero (DEV)',
            description:
              'Engenharia preventiva aplicada desde a primeira linha de código com módulos < 100 linhas e zero refatoração futura.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Auditoria e Engenharia Reversa',
            description:
              'Inspeção metódica baseada em ASD-STE100, diagnóstico de acoplamento e laudo de conformidade com matriz sequencial de remediação.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Modernização e Resgate de Legados',
            description:
              'Engenharia reversa cirúrgica com testes de caracterização prévios e Strangler Pattern para modernizar sistemas críticos sem regressões.',
          },
        },
      ],
    },
  }
}

export function buildWebPageSchema(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.shortDescription,
    url: SITE.domain,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': SITE.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
    },
    inLanguage: SITE.lang,
  }
}

export function buildFaqPageSchema(
  items: readonly { readonly question: string; readonly answer: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

export function buildArticleSchema(input: {
  readonly title: string
  readonly description: string
  readonly slug: string
  readonly datePublished: string
  readonly dateModified?: string
}): Record<string, unknown> {
  const url = `${SITE.domain}/artigos/${input.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: input.title,
    description: input.description,
    url,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    datePublished: input.datePublished,
    dateModified: input.dateModified ?? input.datePublished,
    author: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.domain,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      logo: {
        '@type': 'ImageObject',
        url: SITE.logo,
      },
    },
    inLanguage: SITE.lang,
  }
}

export function buildBreadcrumbSchema(
  items: readonly { readonly name: string; readonly path: string }[]
): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE.domain}${item.path}`,
    })),
  }
}
