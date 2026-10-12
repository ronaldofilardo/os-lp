import fs from 'node:fs'
import path from 'node:path'
import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'
import { getAllArticles } from '@/lib/articles'
import { getAllKnowledgeDocs, getKnowledgeMtime } from '@/lib/knowledge'

function modifiedAt(relativePath: string): Date {
  try {
    return fs.statSync(path.join(/* turbopackIgnore: true */ process.cwd(), relativePath)).mtime
  } catch {
    return new Date()
  }
}

export default function sitemap(): MetadataRoute.Sitemap {
  const articles = getAllArticles().map((article) => ({
    url: `${SITE.domain}/artigos/${article.slug}`,
    lastModified: new Date(article.dateModified ?? article.datePublished),
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  const knowledge = getAllKnowledgeDocs().map((doc) => ({
    url: `${SITE.domain}/conhecimento/${doc.slug}`,
    lastModified: getKnowledgeMtime(doc.slug),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    {
      url: SITE.domain,
      lastModified: modifiedAt('app/page.tsx'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE.domain}/artigos`,
      lastModified: modifiedAt('app/artigos/page.tsx'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE.domain}/metodologia`,
      lastModified: modifiedAt('app/metodologia/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${SITE.domain}/conhecimento`,
      lastModified: modifiedAt('app/conhecimento/page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    ...articles,
    ...knowledge,
  ]
}
