import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'
import { getAllArticles } from '@/lib/articles'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const articles = getAllArticles().map((article) => ({
    url: `${SITE.domain}/artigos/${article.slug}`,
    lastModified: new Date(article.dateModified ?? article.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  return [
    {
      url: SITE.domain,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.domain}/artigos`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    ...articles,
  ]
}
