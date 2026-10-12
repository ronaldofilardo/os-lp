import { SITE } from '@/config/site'
import { SectionHeader } from './SectionHeader'

export function AboutSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl border-t border-slate-200 bg-[#f8fafc]" id="sobre">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Sobre a Omni Sistemas"
          title="Quem está por trás da Omni Sistemas?"
          description="Uma softhouse nacional, atuando de forma remota, com mais de duas décadas construindo software no Brasil."
          theme="light"
          tone="secondary"
          maxWidthClass="max-w-3xl"
        />
        <div className="skeuo-card rounded-2xl p-space-lg md:p-space-xl flex flex-col md:flex-row gap-space-lg items-start">
          <div className="flex flex-col gap-1 md:w-72 shrink-0">
            <span className="text-lg font-semibold text-slate-900">{SITE.founder.name}</span>
            <span className="text-sm text-sky-700 font-medium">{SITE.founder.jobTitle}</span>
            <span className="text-sm text-slate-500">Fundação: {SITE.foundingDate} • Atuação: Brasil (remoto)</span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <p className="text-sm md:text-base text-slate-600 max-w-2xl leading-relaxed">{SITE.founder.description}</p>
            <a
              className="inline-flex items-center gap-space-xs w-fit text-sm font-medium text-sky-700 hover:text-sky-800 transition-colors"
              href="/artigos/sobre-ronaldo-filardo-arquiteto-ste-dev"
            >
              <span>Ler o perfil completo do fundador</span>
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
