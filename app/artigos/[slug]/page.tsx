import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles'
import { SITE } from '@/config/site'
import { JsonLd } from '@/common/JsonLd'
import {
  buildArticleSchema,
  buildBreadcrumbSchema,
  buildFaqPageSchema,
} from '@/lib/schemas'
import { KeyTakeaways } from '@/mdx/KeyTakeaways'
import { FaqBlock } from '@/mdx/FaqBlock'
import { CtaInline } from '@/mdx/CtaInline'

interface ArticlePageProps {
  readonly params: Promise<{ readonly slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return getArticleSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) return {}
  const url = `/artigos/${article.slug}`
  return {
    title: `${article.title} — ${SITE.name}`,
    description: article.description,
    keywords: [...article.tags],
    authors: [{ name: article.author ?? SITE.name }],
    alternates: { canonical: url },
    openGraph: {
      title: `${article.title} — ${SITE.name}`,
      description: article.description,
      url: `${SITE.domain}${url}`,
      siteName: SITE.name,
      type: 'article',
      locale: 'pt_BR',
      publishedTime: article.datePublished,
      modifiedTime: article.dateModified ?? article.datePublished,
      authors: [article.author ?? SITE.name],
      tags: [...article.tags],
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${article.title} — ${SITE.name}`,
      description: article.description,
      images: [SITE.ogImage],
    },
  }
}

const mdxComponents = {
  KeyTakeaways,
  FaqBlock,
  CtaInline,
}

export default async function ArticlePage({ params }: ArticlePageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  if (!article) notFound()

  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <JsonLd
        data={buildArticleSchema({
          title: article.title,
          description: article.description,
          slug: article.slug,
          datePublished: article.datePublished,
          ...(article.dateModified ? { dateModified: article.dateModified } : {}),
        })}
      />
      {article.faq.length > 0 && <JsonLd data={buildFaqPageSchema(article.faq)} />}
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Artigos', path: '/artigos' },
          { name: article.title, path: `/artigos/${article.slug}` },
        ])}
      />
      <main className="w-full py-space-xl pt-24">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <nav aria-label="Breadcrumb" className="font-code-sm text-code-sm text-on-surface-variant mb-space-md">
            <Link href="/" className="hover:text-primary transition-colors">
              Omni Sistemas
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/artigos" className="hover:text-primary transition-colors">
              Artigos
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{article.title}</span>
          </nav>
          <article className="max-w-3xl">
            <header className="mb-space-lg">
              <div className="flex items-center gap-space-sm font-code-sm text-code-sm text-on-surface-variant mb-space-xs">
                <time dateTime={article.datePublished}>{article.datePublished}</time>
                <span aria-hidden="true">•</span>
                <span>{article.readingTimeMinutes} min de leitura</span>
              </div>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight">
                {article.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                {article.description}
              </p>
              <div className="flex flex-wrap gap-space-xs mt-space-md">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-caps text-label-caps text-primary bg-primary/10 px-2 py-0.5 rounded border border-primary/30 uppercase"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>
            <KeyTakeaways points={article.takeaways} />
            <div className="prose-ste-dev">
              <MDXRemote
                source={article.content}
                components={mdxComponents}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>
            {article.faq.length > 0 && <FaqBlock items={article.faq} />}
            <CtaInline label="Iniciar diagnóstico técnico" />
          </article>
        </div>
      </main>
    </div>
  )
}
