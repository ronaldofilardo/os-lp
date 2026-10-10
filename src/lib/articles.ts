import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import { cache } from 'react'

export interface ArticleFrontmatter {
  readonly title: string
  readonly description: string
  readonly slug: string
  readonly datePublished: string
  readonly dateModified?: string
  readonly author?: string
  readonly tags: readonly string[]
  readonly takeaways: readonly string[]
  readonly faq: readonly { readonly question: string; readonly answer: string }[]
}

export interface ArticleMeta extends ArticleFrontmatter {
  readonly readingTimeMinutes: number
}

export interface Article extends ArticleMeta {
  readonly content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'artigos')

function readingTime(text: string): number {
  const words = text.split(/\s+/).filter(Boolean).length
  return Math.max(1, Math.round(words / 200))
}

export const getAllArticles = cache((): readonly ArticleMeta[] => {
  if (!fs.existsSync(CONTENT_DIR)) return []
  const files = fs.readdirSync(CONTENT_DIR).filter((f) => f.endsWith('.mdx'))
  const articles = files.map((file) => {
    const raw = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
    const { data, content } = matter(raw)
    const fm = data as ArticleFrontmatter
    return {
      ...fm,
      tags: fm.tags ?? [],
      takeaways: fm.takeaways ?? [],
      faq: fm.faq ?? [],
      readingTimeMinutes: readingTime(content),
    } satisfies ArticleMeta
  })
  return articles.sort((a, b) => (a.datePublished < b.datePublished ? 1 : -1))
})

export const getArticleBySlug = cache((slug: string): Article | null => {
  const filePath = path.join(CONTENT_DIR, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return null
  const raw = fs.readFileSync(filePath, 'utf8')
  const { data, content } = matter(raw)
  const fm = data as ArticleFrontmatter
  return {
    ...fm,
    tags: fm.tags ?? [],
    takeaways: fm.takeaways ?? [],
    faq: fm.faq ?? [],
    readingTimeMinutes: readingTime(content),
    content,
  }
})

export const getArticleSlugs = cache((): readonly string[] =>
  getAllArticles().map((a) => a.slug)
)
