import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAISearchBot',
  'Google-Extended',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Bingbot',
  'Amazonbot',
  'Applebot',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
      ...AI_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: '/api/',
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  }
}
