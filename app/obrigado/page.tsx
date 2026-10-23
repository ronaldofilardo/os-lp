import type { Metadata } from 'next'
import { Header, Footer } from '@/common'
import { SITE } from '@/config/site'

export const metadata: Metadata = {
  title: `Diagnóstico de Viabilidade Recebido — ${SITE.name}`,
  description: 'Agradecemos a sua solicitação. O Arquiteto Sênior Ronaldo Filardo analisará a viabilidade técnica e operacional da sua empresa.',
  robots: { index: false, follow: false },
}

export default function ThankYouPage(): React.JSX.Element {
  const whatsappConfirmUrl = `${SITE.whatsapp.url}?text=${encodeURIComponent(
    'Olá, Ronaldo! Acabei de enviar os dados para o diagnóstico de viabilidade no site da Omni Sistemas e gostaria de confirmar o recebimento diretamente com você.'
  )}`

  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen flex flex-col font-sans antialiased">
      <Header theme="light" />
      <main className="flex-1 flex items-center justify-center py-16 px-4 sm:px-6">
        <div className="max-w-2xl w-full flex flex-col items-center skeuo-card p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl">
          <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mb-5">
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[36px]">
              verified
            </span>
          </div>

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            <span>Diagnóstico de Viabilidade Solicitado</span>
          </div>

          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#0A192F] mb-3 text-center">
            Recebemos a sua solicitação com sucesso!
          </h1>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 text-center max-w-xl">
            Sua demanda foi encaminhada diretamente para a mesa de{' '}
            <strong className="text-slate-900 font-semibold">{SITE.founder.name}</strong>, Arquiteto de Software
            com mais de 28 anos de mercado. Aqui não há repasse para vendedores ou camadas burocráticas intermediárias.
          </p>

          {/* Card de Acolhimento Consultivo & Ação WhatsApp */}
          <div className="w-full p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-emerald-50/80 via-white to-sky-50/80 border border-emerald-200/80 shadow-sm mb-6 flex flex-col gap-3">
            <div className="flex items-center gap-2.5 text-emerald-900 font-bold text-sm sm:text-base">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[22px]">
                support_agent
              </span>
              <span>Acolhimento Consultivo Imediato</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Para priorizar a sua análise na fila de viabilidade e tirar dúvidas preliminares sobre a sua operação, confirme o recebimento diretamente pelo WhatsApp com o nosso Arquiteto.
            </p>
            <a
              href={whatsappConfirmUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="skeuo-button-emerald inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-sm shadow-md mt-1 hover:brightness-105 transition-all"
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">chat</span>
              <span>Confirmar Recebimento com o Arquiteto no WhatsApp</span>
            </a>
            <span className="text-[11px] text-slate-500 text-center">
              Atendimento direto • Sigilo profissional garantido • Resposta prioritária
            </span>
          </div>

          {/* O que acontece agora */}
          <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs sm:text-sm text-slate-600 mb-8 w-full flex flex-col gap-2.5">
            <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm">
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-sky-700">schedule</span>
              <span>Próximas etapas do seu diagnóstico:</span>
            </div>
            <p className="pl-6 relative before:content-['1.'] before:absolute before:left-0 before:font-bold before:text-sky-700">
              <strong>Triagem Técnica e Operacional:</strong> Analisamos os gargalos informados e o alinhamento com a arquitetura ideal.
            </p>
            <p className="pl-6 relative before:content-['2.'] before:absolute before:left-0 before:font-bold before:text-sky-700">
              <strong>Verificação de Viabilidade:</strong> Mapeamos requisitos de integração (APIs, ERPs, gateways), conformidade com LGPD e mitigação de riscos.
            </p>
            <p className="pl-6 relative before:content-['3.'] before:absolute before:left-0 before:font-bold before:text-sky-700">
              <strong>Retorno Consultivo (até 24h úteis):</strong> Agendamos uma conversa executiva de 30 minutos para apresentar a rota recomendada.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <a
              href="/"
              className="skeuo-button-ghost flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-slate-700 font-semibold text-sm"
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">arrow_back</span>
              <span>Voltar à Página Principal</span>
            </a>
          </div>
        </div>
      </main>
      <Footer theme="light" />
    </div>
  )
}

