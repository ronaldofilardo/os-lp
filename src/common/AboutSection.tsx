import { SITE } from '@/config/site'
import { SectionHeader } from './SectionHeader'

export function AboutSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl border-t border-slate-200 bg-[#f8fafc]" id="sobre">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Arquitetura Dedicada de Alto Nível"
          title="Por que grandes decisões de software exigem um Arquiteto Sênior dedicado?"
          description="Na maioria das empresas de desenvolvimento, sua proposta é fechada por um vendedor, gerenciada por burocratas e entregue a programadores iniciantes. Na Omni Sistemas, o modelo é de engenharia boutique."
          theme="light"
          tone="secondary"
          maxWidthClass="max-w-3xl"
        />
        <div className="skeuo-card rounded-3xl p-space-lg md:p-space-xl flex flex-col lg:flex-row gap-space-lg items-start bg-white border border-slate-200">
          <div className="flex flex-col gap-2 md:w-80 shrink-0">
            <span className="text-xl font-bold text-slate-900">{SITE.founder.name}</span>
            <span className="text-sm text-sky-700 font-semibold">{SITE.founder.jobTitle}</span>
            <span className="text-xs text-slate-500">Fundação da Omni: {SITE.foundingDate} • Base: Curitiba/PR • Atendimento Nacional</span>
            <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs text-slate-600 leading-relaxed">
              Ex-Professor Universitário da PUCPR de Metodologia Científica e criador do método proprietário de engenharia preventiva STE-DEV.
            </div>
          </div>
          <div className="flex flex-col gap-space-md flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="p-3.5 rounded-xl bg-sky-50/50 border border-sky-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-sky-900">Rigor de Engenharia</span>
                <span className="text-xs text-slate-600">Arquitetura limpa, estável e escalável desde o primeiro commit.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-emerald-50/50 border border-emerald-100 flex flex-col gap-1">
                <span className="text-xs font-bold text-emerald-900">Sem Intermediários</span>
                <span className="text-xs text-slate-600">Alinhamento direto focado em regras de negócio, margem e ROI.</span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 flex flex-col gap-1">
                <span className="text-xs font-bold text-slate-900">Código Perene</span>
                <span className="text-xs text-slate-600">Zero código descartável: sistemas projetados para durar anos com baixo TCO.</span>
              </div>
            </div>
            <p className="text-sm md:text-base text-slate-600 leading-relaxed">
              Aqui o seu sistema não é terceirizado para estagiários. Você tem a mente de um especialista sênior modelando pessoalmente os fluxos críticos da sua empresa.
            </p>
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <a
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-sky-700 hover:text-sky-800 transition-colors"
                href="/artigos/sobre-ronaldo-filardo-arquiteto-ste-dev"
              >
                <span>Conhecer a trajetória completa do Arquiteto</span>
                <span aria-hidden="true">→</span>
              </a>
              <a
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700 hover:text-emerald-800 transition-colors"
                href="#contato"
              >
                <span>Agendar diagnóstico com Ronaldo</span>
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
