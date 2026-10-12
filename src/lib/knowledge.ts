import fs from 'node:fs'
import path from 'node:path'
import { cache } from 'react'

export interface KnowledgeDocMeta {
  readonly slug: string
  readonly title: string
  readonly description: string
}

export interface KnowledgeDoc extends KnowledgeDocMeta {
  readonly content: string
}

const CONTENT_DIR = path.join(process.cwd(), 'content', 'conhecimento')
const TITLE_PREFIXES = ['Base de Conhecimento — ', 'Base de Conhecimento - '] as const
const SLUG_PATTERN = /^[a-z0-9-]+$/
const MAX_DESCRIPTION = 158

function stripInlineMarkdown(text: string): string {
  return text
    .replace(/\*\*([^*]+)\*\*/g, '$1')
    .replace(/`([^`]+)`/g, '$1')
    .replace(/\*([^*]+)\*/g, '$1')
    .replace(/^[-*]\s+/, '')
    .trim()
}

function truncate(text: string): string {
  if (text.length <= MAX_DESCRIPTION) return text
  const cut = text.slice(0, MAX_DESCRIPTION)
  const lastSpace = cut.lastIndexOf(' ')
  return `${cut.slice(0, lastSpace > 100 ? lastSpace : MAX_DESCRIPTION).trimEnd()}…`
}

function deriveTitle(content: string, slug: string): string {
  const match = content.match(/^#\s+(.+)$/m)
  const heading = match?.[1]
  if (!heading) return slug
  const full = stripInlineMarkdown(heading)
  for (const prefix of TITLE_PREFIXES) {
    if (full.startsWith(prefix)) return full.slice(prefix.length)
  }
  return full
}

function deriveDescription(content: string, title: string): string {
  const lines = content.split('\n')
  let seenHeading = false
  for (const line of lines) {
    if (line.startsWith('#')) {
      seenHeading = true
      continue
    }
    if (!seenHeading) continue
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith('-') || trimmed.startsWith('|') || trimmed.startsWith('>'))
      continue
    const paragraph = stripInlineMarkdown(trimmed)
    if (paragraph) return truncate(paragraph)
  }
  return `Documento público da base de conhecimento STE-DEV: ${title}.`
}

function listFiles(): readonly string[] {
  if (!fs.existsSync(CONTENT_DIR)) return []
  return fs
    .readdirSync(CONTENT_DIR)
    .filter((file) => file.endsWith('.md') && SLUG_PATTERN.test(path.basename(file, '.md')))
    .sort()
}

function readDoc(file: string): KnowledgeDoc {
  const slug = path.basename(file, '.md')
  const content = fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8')
  return {
    slug,
    title: deriveTitle(content, slug),
    description: deriveDescription(content, slug),
    content,
  }
}

export const getAllKnowledgeDocs = cache((): readonly KnowledgeDoc[] =>
  listFiles().map(readDoc)
)

export const getKnowledgeSlugs = cache((): readonly string[] =>
  getAllKnowledgeDocs().map((doc) => doc.slug)
)

export const getKnowledgeDocBySlug = cache((slug: string): KnowledgeDoc | null => {
  if (!SLUG_PATTERN.test(slug)) return null
  const filePath = path.join(CONTENT_DIR, `${slug}.md`)
  if (!fs.existsSync(filePath)) return null
  return readDoc(`${slug}.md`)
})

export function getKnowledgeMtime(slug: string): Date {
  if (!SLUG_PATTERN.test(slug)) return new Date()
  try {
    return fs.statSync(path.join(CONTENT_DIR, `${slug}.md`)).mtime
  } catch {
    return new Date()
  }
}
