import type { Metadata } from 'next'
import Link from 'next/link'
import { getAllArticles } from '@/lib/articles'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: `Artigos de Engenharia de Software — ${SITE.name}`,
  description:
    'Artigos técnicos da Omni Sistemas sobre STE-DEV, auditoria de código com ASD-STE100, modernização de legados e engenharia de software preventiva.',
  alternates: { canonical: '/artigos' },
  openGraph: {
    title: `Artigos de Engenharia de Software — ${SITE.name}`,
    description:
      'Artigos técnicos da Omni Sistemas sobre STE-DEV, auditoria de código e engenharia preventiva.',
    url: `${SITE.domain}/artigos`,
    siteName: SITE.name,
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function ArtigosIndexPage(): React.JSX.Element {
  const articles = getAllArticles()

  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <main className="w-full py-space-xl pt-24">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <nav aria-label="Breadcrumb" className="font-code-sm text-code-sm text-on-surface-variant mb-space-md">
            <Link href="/" className="hover:text-primary transition-colors">
              Omni Sistemas
            </Link>
            <span aria-hidden="true"> / </span>
            <span>Artigos</span>
          </nav>
          <header className="max-w-3xl mb-space-xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
              // Hub de Conhecimento STE-DEV
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight mt-space-xs">
              Artigos de Engenharia Preventiva
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
              Guias técnicos diretos da Omni Sistemas sobre metodologia STE-DEV, auditoria de
              código com ASD-STE100, testes de caracterização e modernização de sistemas legados.
            </p>
          </header>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {articles.map((article) => (
              <li key={article.slug}>
                <article className="h-full flex flex-col p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary/40 transition-colors">
                  <div className="flex items-center gap-space-sm font-code-sm text-code-sm text-on-surface-variant mb-space-xs">
                    <time dateTime={article.datePublished}>{article.datePublished}</time>
                    <span aria-hidden="true">•</span>
                    <span>{article.readingTimeMinutes} min de leitura</span>
                  </div>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    <Link href={`/artigos/${article.slug}`} className="hover:text-primary transition-colors">
                      {article.title}
                    </Link>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs flex-1">
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
                </article>
              </li>
            ))}
          </ul>
          {articles.length === 0 && (
            <p className="font-body-md text-body-md text-on-surface-variant">
              Nenhum artigo publicado ainda.
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
