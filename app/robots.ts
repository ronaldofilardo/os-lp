import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

const AI_BOTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
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
