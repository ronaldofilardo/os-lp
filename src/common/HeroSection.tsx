import { Rise } from '@/motion/Rise'
import { SITE } from '@/config/site'
import { HeroBackdrop } from './HeroBackdrop'
import { BusinessPanel } from './BusinessPanel'

export function HeroSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-sky-50 via-white to-[#f8fafc] pt-28 pb-space-xl lg:pt-36 lg:pb-24" id="hero">
      <HeroBackdrop />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.18]"
        style={{ backgroundImage: 'radial-gradient(#cbd5e1 0.75px, transparent 0.75px)', backgroundSize: '26px 26px' }}
        aria-hidden="true"
      />
      <div className="relative max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl lg:gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md relative z-10">
            <Rise>
              <div className="skeuo-chip inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full w-fit">
                <span className="w-2 h-2 rounded-full bg-emerald-500 skeuo-led-green animate-pulse" aria-hidden="true" />
                <span className="text-xs font-semibold text-emerald-900 uppercase tracking-wide">Arquitetura de Software &amp; Modernização Corporativa</span>
              </div>
            </Rise>
            <Rise delayMs={100}>
              <h1 className="text-4xl md:text-5xl lg:text-[56px] lg:leading-[62px] font-bold tracking-tight text-[#0A192F]">
                Sistemas Sob Medida: substitua processos manuais e softwares lentos por plataformas que escalam a sua operação.
              </h1>
            </Rise>
            <Rise delayMs={200}>
              <p className="text-lg font-normal text-[#1A1A1A] max-w-xl leading-relaxed">
                Desenhamos e construímos softwares web dedicados, automatizamos integrações bancárias e ERPs,
                e modernizamos sistemas legados. Engenharia sênior sob medida, com conformidade estrita à LGPD e
                acompanhamento direto com um arquiteto de software com mais de 28 anos de mercado.
              </p>
            </Rise>
            <Rise delayMs={300}>
              <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
                <a
                  className="skeuo-button-primary inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-white font-semibold"
                  href="#contato"
                >
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">assignment</span>
                  <span>Agendar Diagnóstico de Viabilidade (Sem Custo)</span>
                </a>
                <a
                  className="skeuo-button-ghost inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-[#0A192F] font-semibold"
                  href="#como-trabalhamos"
                >
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">route</span>
                  <span>Entenda Como Trabalhamos</span>
                </a>
              </div>
            </Rise>
            <Rise delayMs={400}>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 pt-3 text-sm font-medium text-[#1A1A1A]">
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px] text-emerald-600">verified</span>
                  28+ anos de engenharia corporativa
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px] text-sky-700">person_check</span>
                  Arquitetura Dedicada: Sem repasse para terceiros
                </span>
                <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px] text-sky-700">security</span>
                  Conformidade Nativa: LGPD e sigilo contratual
                </span>
              </div>
            </Rise>
            <Rise delayMs={450}>
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 w-fit text-sm font-semibold text-emerald-800 hover:text-emerald-950 transition-colors"
              >
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">chat</span>
                <span>Falar com nosso Arquiteto no WhatsApp: {SITE.whatsapp.display}</span>
              </a>
            </Rise>
          </div>
          <Rise delayMs={250} className="lg:col-span-5">
            <BusinessPanel />
          </Rise>
        </div>
      </div>
    </section>
  )
}
