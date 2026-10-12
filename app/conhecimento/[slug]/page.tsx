import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import { SITE } from '@/config/site'
import { getKnowledgeDocBySlug, getKnowledgeSlugs } from '@/lib/knowledge'
import { JsonLd } from '@/common/JsonLd'
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schemas'

interface KnowledgePageProps {
  readonly params: Promise<{ readonly slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return getKnowledgeSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: KnowledgePageProps): Promise<Metadata> {
  const { slug } = await params
  const doc = getKnowledgeDocBySlug(slug)
  if (!doc) return {}
  const url = `/conhecimento/${doc.slug}`
  return {
    title: `${doc.title} — ${SITE.name}`,
    description: doc.description,
    authors: [{ name: SITE.name }],
    alternates: { canonical: url },
    openGraph: {
      title: `${doc.title} — ${SITE.name}`,
      description: doc.description,
      url: `${SITE.domain}${url}`,
      siteName: SITE.name,
      type: 'article',
      locale: 'pt_BR',
      images: [
        {
          url: SITE.ogImage,
          width: 1200,
          height: 630,
          alt: doc.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${doc.title} — ${SITE.name}`,
      description: doc.description,
      images: [SITE.ogImage],
    },
  }
}

export default async function KnowledgePage({ params }: KnowledgePageProps): Promise<React.JSX.Element> {
  const { slug } = await params
  const doc = getKnowledgeDocBySlug(slug)
  if (!doc) notFound()
  const url = `/conhecimento/${doc.slug}`

  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <JsonLd
        data={buildWebPageSchema({
          title: doc.title,
          description: doc.description,
          path: url,
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Base de Conhecimento', path: '/conhecimento' },
          { name: doc.title, path: url },
        ])}
      />
      <main className="w-full py-space-xl pt-24">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <nav aria-label="Breadcrumb" className="font-code-sm text-code-sm text-on-surface-variant mb-space-md">
            <Link href="/" className="hover:text-primary transition-colors">
              Omni Sistemas
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/conhecimento" className="hover:text-primary transition-colors">
              Base de Conhecimento
            </Link>
            <span aria-hidden="true"> / </span>
            <span>{doc.title}</span>
          </nav>
          <article className="max-w-3xl">
            <header className="mb-space-lg">
              <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
                // Documentação Pública STE-DEV
              </span>
              <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight mt-space-xs">
                {doc.title}
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
                {doc.description}
              </p>
            </header>
            <div className="prose-ste-dev">
              <MDXRemote
                source={doc.content}
                options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
              />
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}
