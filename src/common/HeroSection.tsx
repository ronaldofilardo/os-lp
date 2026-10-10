export function HeroSection(): JSX.Element {
  return (
    <section className="relative w-full overflow-hidden py-space-xl lg:py-24 pt-24" id="hero">
      <div className="absolute inset-0 pointer-events-none opacity-20" style={{ backgroundImage: 'radial-gradient(#38bdf8 0.75px, transparent 0.75px)', backgroundSize: '24px 24px' }} />
      <div className="relative max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded bg-surface-container-high border border-outline-variant/60 w-fit">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">METODOLOGIA STE-DEV // ENGENHARIA PREVENTIVA</span>
            </div>
            <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface font-bold tracking-tight">
              Velocidade da IA.<br />
              <span className="text-primary-container">Rigor de engenharia</span> preventiva.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
              A Omni Sistemas é uma softhouse especializada no desenvolvimento de novos sistemas (DEV) e na engenharia reversa para auditorias e modernização de softwares legados. Aplicamos a metodologia proprietária STE-DEV baseada em ASD-STE100 para assegurar código atômico, tipado e livre de refatoração futura.
            </p>
            <div className="flex flex-wrap items-center gap-space-md pt-space-xs">
              <a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-lg font-semibold hover:bg-primary transition-all duration-200 shadow-[0_0_16px_rgba(56,189,248,0.3)]" href="#metodologia">
                <span className="material-symbols-outlined text-[20px]">terminal</span>
                <span>Conhecer a metodologia</span>
              </a>
              <a className="inline-flex items-center gap-space-xs px-space-lg py-3 rounded bg-surface-container-high border border-outline-variant text-on-surface font-headline-sm text-body-lg font-semibold hover:bg-surface-variant transition-colors" href="#auditoria-processo">
                <span>Engenharia Reversa &amp; Auditoria</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
            <div className="flex items-center gap-space-lg pt-space-sm font-code-sm text-code-sm text-on-surface-variant">
              <div className="flex items-center gap-1.5">
                <span className="text-secondary font-semibold">●</span>
                <span>Zero-any TS Standard</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-primary font-semibold">◈</span>
                <span>ASD-STE100 Verified</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="text-on-surface font-semibold">99.9%</span>
                <span>Runtime Stability</span>
              </div>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div className="w-full rounded-xl bg-surface-container-low border border-outline-variant/60 shadow-2xl overflow-hidden">
              <div className="h-9 bg-surface-container-lowest px-4 flex items-center justify-between border-b border-outline-variant/30">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-tertiary-container/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary/70" />
                </div>
                <div className="font-code-sm text-code-sm text-on-surface-variant/70 flex items-center gap-1 bg-surface-container-high/40 px-2 py-0.5 rounded">
                  <span className="material-symbols-outlined text-[12px]">lock</span>
                  <span>telemetry.omni-sistemas.internal/console</span>
                </div>
                <div className="w-12" />
              </div>
              <div className="relative h-80 sm:h-96 w-full flex flex-col items-center justify-center p-6 bg-surface-container-lowest/70">
                <div className="absolute inset-0 opacity-15" style={{ backgroundImage: 'linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                <div className="relative z-10 flex flex-col items-center text-center p-6 rounded-lg border border-dashed border-outline-variant/50 bg-surface-container/40 max-w-xs">
                  <span className="material-symbols-outlined text-outline text-[40px] mb-2">dashboard_customize</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">Mockup do projeto</span>
                  <span className="font-code-sm text-code-sm text-on-surface-variant mt-1">Dashboard analítico • Painel de controle de telemetria</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 bg-surface-container border border-outline-variant/50 rounded p-2.5 flex items-center justify-between text-left">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-secondary" />
                    <span className="font-code-sm text-code-sm text-on-surface">Metodologia STE-DEV // DEV &amp; Auditoria</span>
                  </div>
                  <span className="font-code-sm text-code-sm text-secondary font-semibold">100% CONFORME</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}