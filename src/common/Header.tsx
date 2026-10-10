export function Header(): JSX.Element {
  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <span className="font-label-caps text-label-caps text-primary tracking-widest uppercase">STE-DEV</span>
            <span className="font-code-sm text-code-sm text-on-surface-variant">OMNI SISTEMAS</span>
          </div>
          <nav aria-label="Navegação principal" className="hidden md:flex items-center gap-space-lg font-code-sm text-code-sm text-on-surface-variant">
            <a href="#metodologia" className="hover:text-primary transition-colors">Metodologia</a>
            <a href="#auditoria-processo" className="hover:text-primary transition-colors">Processo de Auditoria</a>
            <a href="#asd-ste100" className="hover:text-primary transition-colors">ASD-STE100</a>
            <a href="#projetos" className="hover:text-primary transition-colors">Projetos</a>
            <a href="#servicos" className="hover:text-primary transition-colors">Serviços</a>
            <a href="/artigos" className="hover:text-primary transition-colors">Artigos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
          <div className="flex items-center gap-space-md">
            <a href="#contato" className="inline-flex items-center gap-space-xs px-space-lg py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors hidden sm:inline-flex">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
              <span>Iniciar Auditoria</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}