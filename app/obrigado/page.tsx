import type { Metadata } from 'next'
import { Header, Footer } from '@/common'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: `Mensagem Recebida — ${SITE.name}`,
  description: 'Agradecemos o seu contato. O arquiteto responsável responderá em até 24 horas úteis.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage(): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <Header theme="light" />
      <main className="flex-1 flex items-center justify-center py-20 px-4 sm:px-6">
        <div className="max-w-xl w-full text-center flex flex-col items-center skeuo-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[36px]">
              check_circle
            </span>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold mb-4">
            <span>Orçamento Solicitado</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A192F] mb-3">
            Obrigado! Sua mensagem foi enviada.
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
            Nossa equipe técnica já recebeu as informações da sua operação. O arquiteto responsável retornará em até <strong className="text-slate-900">24 horas úteis</strong> com os próximos passos.
          </p>
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-600 mb-8 w-full flex flex-col gap-2">
            <div className="flex items-center gap-2 text-slate-800 font-semibold">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-sky-700">schedule</span>
              <span>O que acontece agora?</span>
            </div>
            <p>1. Avaliamos a viabilidade e escopo do seu projeto ou integração.</p>
            <p>2. Preparamos uma proposta clara com prazos e estimativa de investimento.</p>
            <p>3. Entramos em contato pelo e-mail ou WhatsApp cadastrado.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href={SITE.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-button-emerald flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-semibold text-sm shadow-sm"
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">chat</span>
              <span>Adiantar no WhatsApp</span>
            </a>
            <a
              href="/"
              className="skeuo-button-ghost flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 font-semibold text-sm"
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Voltar ao Início</span>
            </a>
          </div>
        </div>
      </main>
      <Footer theme="light" />
    </div>
  )
}
