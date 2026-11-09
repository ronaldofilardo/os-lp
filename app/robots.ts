import type { MetadataRoute } from 'next'
import { SITE } from '@/config/site'

// Agentes de Busca em Tempo Real, Citação e Navegação de IA (GEO & AEO)
const AI_SEARCH_AND_CITATION_BOTS = [
  'OAI-SearchBot',
  'ChatGPT-User',
  'GPTBot',
  'Claude-SearchBot',
  'Claude-User',
  'ClaudeBot',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Applebot',
  'Google-Extended',
  'DeepSeekBot',
  'YouBot',
  'MistralAI-User',
  'TavilyBot',
  'Amazonbot',
] as const

// Scrapers Parasitários e Predatórios de Alto Consumo e Baixo Valor
const PARASITIC_SCRAPERS = [
  'Bytespider',
  'Scrapy',
  'img2dataset',
  'MJ12bot',
  'DotBot',
] as const

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Regra Padrão: Permite o site e protege endpoints de backend
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      // Liberação explícita e prioritária para Agentes de Busca e IA (GEO)
      ...AI_SEARCH_AND_CITATION_BOTS.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
      // Controle de taxa para Bing / Copilot
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 5,
      },
      // Controle de taxa para auditorias pesadas de SEO
      {
        userAgent: 'SemrushBot',
        allow: '/',
        disallow: ['/api/'],
        crawlDelay: 10,
      },
      // Bloqueio Total de Scrapers Parasitas e Predatórios
      ...PARASITIC_SCRAPERS.map((userAgent) => ({
        userAgent,
        disallow: ['/'],
      })),
    ],
    sitemap: `${SITE.domain}/sitemap.xml`,
  }
}
