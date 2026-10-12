import type { Metadata } from 'next'
import Link from 'next/link'
import { SITE } from '@/config/site'
import { getAllKnowledgeDocs } from '@/lib/knowledge'
import { JsonLd } from '@/common/JsonLd'
import { buildBreadcrumbSchema, buildWebPageSchema } from '@/lib/schemas'

const DESCRIPTION =
  'Documentos técnicos públicos da Omni Sistemas sobre STE-DEV, auditoria de código, engenharia reversa e arquitetura limpa.'

export const metadata: Metadata = {
  title: `Base de Conhecimento STE-DEV — ${SITE.name}`,
  description: DESCRIPTION,
  alternates: { canonical: '/conhecimento' },
  openGraph: {
    title: `Base de Conhecimento STE-DEV — ${SITE.name}`,
    description: DESCRIPTION,
    url: `${SITE.domain}/conhecimento`,
    siteName: SITE.name,
    type: 'website',
    locale: 'pt_BR',
  },
}

export default function ConhecimentoIndexPage(): React.JSX.Element {
  const docs = getAllKnowledgeDocs()

  return (
    <div className="bg-background text-on-surface min-h-screen font-sans antialiased dark">
      <JsonLd
        data={buildWebPageSchema({
          title: `Base de Conhecimento STE-DEV — ${SITE.name}`,
          description: DESCRIPTION,
          path: '/conhecimento',
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Omni Sistemas', path: '/' },
          { name: 'Base de Conhecimento', path: '/conhecimento' },
        ])}
      />
      <main className="w-full py-space-xl pt-24">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
          <nav aria-label="Breadcrumb" className="font-code-sm text-code-sm text-on-surface-variant mb-space-md">
            <Link href="/" className="hover:text-primary transition-colors">
              Omni Sistemas
            </Link>
            <span aria-hidden="true"> / </span>
            <span>Base de Conhecimento</span>
          </nav>
          <header className="max-w-3xl mb-space-xl">
            <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">
              // Documentação Pública STE-DEV
            </span>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight mt-space-xs">
              Base de Conhecimento
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm">
              Especificações técnicas consolidadas sobre a metodologia STE-DEV, o protocolo de
              auditoria e a arquitetura da Omni Sistemas, publicadas como fonte canônica para
              busca e agentes de IA.
            </p>
          </header>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
            {docs.map((doc) => (
              <li key={doc.slug}>
                <article className="h-full flex flex-col p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/60 hover:border-primary/40 transition-colors">
                  <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider mb-space-xs">
                    Conhecimento
                  </span>
                  <h2 className="font-headline-md text-headline-md text-on-surface">
                    <Link href={`/conhecimento/${doc.slug}`} className="hover:text-primary transition-colors">
                      {doc.title}
                    </Link>
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant mt-space-xs flex-1">
                    {doc.description}
                  </p>
                </article>
              </li>
            ))}
          </ul>
          {docs.length === 0 && (
            <p className="font-body-md text-body-md text-on-surface-variant">
              Nenhum documento publicado ainda.
            </p>
          )}
        </div>
      </main>
    </div>
  )
}
