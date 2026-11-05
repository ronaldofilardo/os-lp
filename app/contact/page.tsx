import type { Metadata } from 'next'
import Link from 'next/link'
import { Header, Footer, ContactSection } from '@/common'
import { SITE } from '@/config/site'
import { JsonLd } from '@/common/JsonLd'
import { buildWebPageSchema, buildBreadcrumbSchema } from '@/lib/schemas'

const TITLE = `Contato & Diagnóstico de Viabilidade — Omni Sistemas`
const DESCRIPTION =
  'Entre em contato com a Omni Sistemas. Atendimento direto com nosso Arquiteto de Software Sênior com 30 anos de mercado, sem camadas comerciais intermediárias.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE.domain}/contact`,
    type: 'website',
  },
}

export default function ContactPage(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <JsonLd
        data={buildWebPageSchema({
          title: TITLE,
          description: DESCRIPTION,
          path: '/contact',
        })}
      />
      <JsonLd
        data={buildBreadcrumbSchema([
          { name: 'Página Inicial', path: '/' },
          { name: 'Contato & Diagnóstico', path: '/contact' },
        ])}
      />
      <Header theme="light" />

      <main className="flex-1 pt-28 pb-16">
        <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin mb-8">
          <nav aria-label="Breadcrumb" className="text-xs text-slate-500 mb-6 flex items-center gap-2">
            <Link href="/" className="hover:text-sky-600 transition-colors">Início</Link>
            <span>/</span>
            <span className="text-slate-800 font-medium">Contato</span>
          </nav>

          <header className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold mb-4">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">support_agent</span>
              <span>Retorno Técnico em até 24 Horas Úteis</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#0A192F] mb-4">
              Canais Oficiais de Contato
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Aqui a sua demanda é tratada diretamente por quem projeta a solução técnica. Sem intermediários,
              com sigilo operacional e avaliação preliminar de viabilidade sem custos.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-3xl text-emerald-600 mb-3">chat</span>
                <h2 className="text-lg font-bold text-slate-900 mb-1">WhatsApp Oficial</h2>
                <p className="text-xs text-slate-600 mb-4">Canal direto para triagem rápida e alinhamento de escopo.</p>
              </div>
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="skeuo-button-emerald inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-white text-sm font-semibold"
              >
                <span>Conversar no WhatsApp</span>
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-3xl text-sky-600 mb-3">mail</span>
                <h2 className="text-lg font-bold text-slate-900 mb-1">E-mail Corporativo</h2>
                <p className="text-xs text-slate-600 mb-4">Para envio de especificações, NDAs e termos formais.</p>
              </div>
              <a
                href={`mailto:${SITE.email}`}
                className="skeuo-button-ghost inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-slate-800 text-sm font-semibold hover:border-sky-300"
              >
                <span>{SITE.email}</span>
              </a>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-3xl text-slate-700 mb-3">location_on</span>
                <h2 className="text-lg font-bold text-slate-900 mb-1">Sede &amp; Abrangência</h2>
                <p className="text-xs text-slate-600 mb-4">Curitiba, PR — Atendimento remoto em todo o Brasil ou in loco.</p>
              </div>
              <span className="text-xs font-semibold text-slate-500 py-2.5 text-center">
                CNPJ 55.405.487/0001-84
              </span>
            </div>
          </div>
        </div>

        <ContactSection />
      </main>

      <Footer theme="light" />
    </div>
  )
}

