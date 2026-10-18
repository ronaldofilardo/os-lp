import type { Metadata } from 'next'
import { Header, Footer } from '@/common'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: `Página não encontrada — ${SITE.name}`,
  description: 'O link que você tentou acessar não existe ou mudou de endereço. Navegue pelas nossas soluções ou fale conosco.',
  robots: { index: false, follow: true },
}

const quickLinks = [
  { href: '/', label: 'Página Inicial', icon: 'home' },
  { href: '/#servicos', label: 'Sistemas Sob Medida', icon: 'terminal' },
  { href: '/metodologia', label: 'Metodologia STE-DEV', icon: 'verified' },
  { href: '/omni-saude', label: 'Plataforma Omni Saúde', icon: 'health_and_safety' },
  { href: '/artigos', label: 'Artigos Técnicos', icon: 'article' },
] as const

export default function NotFound(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <Header theme="light" />
      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-2xl w-full text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-xs font-semibold mb-6">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">info</span>
            <span>Erro 404 • Página não encontrada</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0A192F] mb-4">
            Este link não leva a lugar nenhum, mas sua operação não precisa parar.
          </h1>
          <p className="text-slate-600 text-base max-w-lg mb-8 leading-relaxed">
            O endereço que você acessou pode ter mudado ou não existir mais. Escolha um dos atalhos abaixo ou fale diretamente com o nosso arquiteto.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10 w-full max-w-lg">
            {quickLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="skeuo-button-ghost inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-800 text-sm font-medium hover:border-sky-300"
              >
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-sky-700">{item.icon}</span>
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <a
            href={SITE.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-button-emerald inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-md"
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">chat</span>
            <span>Falar com o Arquiteto no WhatsApp ({SITE.whatsapp.display})</span>
          </a>
        </div>
      </main>
      <Footer theme="light" />
    </div>
  )
}
