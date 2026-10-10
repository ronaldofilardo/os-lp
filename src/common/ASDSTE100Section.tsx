export function ASDSTE100Section(): JSX.Element {
  return (
    <section className="w-full py-space-xl border-t border-outline-variant/30" id="asd-ste100">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-3xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Origem Aeronáutica</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            O que é ASD-STE100 — A Base Normativa da STE-DEV
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A <strong>ASD-STE100</strong> (Simplified Technical English) é um padrão internacional de linguagem técnica controlada, originalmente desenvolvido pela indústria aeroespacial e de defesa (ASD = AeroSpace and Defence Industries Association of Europe) para a documentação de manutenção de aeronaves. Sua finalidade é eliminar ambiguidades, reduzir erros de interpretação e garantir que instruções críticas sejam compreendidas de forma idêntica por qualquer técnico, independentemente de sua língua nativa.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          <div className="p-space-xl rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">airplanemode_active</span>
              <span className="font-code-sm text-code-sm text-primary font-semibold">ORIGEM</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">Indústria Aeronáutica</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Criada para manuais de manutenção de aeronaves onde erros de interpretação causam falhas catastróficas. A linguagem deve ser inequívoca, determinística e traduzível sem perdas.
            </p>
          </div>
          <div className="p-space-xl rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">rule</span>
              <span className="font-code-sm text-code-sm text-primary font-semibold">REGRAS</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">Vocabulário Controlado</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              ~3.000 palavras aprovadas com significado único. Cada verbo tem uma ação específica: <code className="bg-surface-container-highest px-1 rounded font-code-sm">buscar</code> (leitura idempotente), <code className="bg-surface-container-highest px-1 rounded font-code-sm">criar</code> (instanciação), <code className="bg-surface-container-highest px-1 rounded font-code-sm">validar</code> (retorno booleano/erro). Proibidos sinônimos.
            </p>
          </div>
          <div className="p-space-xl rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">code</span>
              <span className="font-code-sm text-code-sm text-primary font-semibold">APLICAÇÃO</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">Tradução para Código</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              A STE-DEV adapta as 4 leis do STE para programação: (1) Unicidade Semântica — um conceito = um nome; (2) Vocabulário Aprovado — zero `handle`/`process`/`utils`; (3) Separação Procedimental vs Descritiva — hooks orquestram, utils calculam; (4) Sem Efeitos Ocultos — código imperativo e transparente.
            </p>
          </div>
          <div className="p-space-xl rounded-lg bg-surface-container-low border border-outline-variant/60 flex flex-col">
            <div className="flex items-center gap-space-sm mb-space-sm">
              <span className="material-symbols-outlined text-primary text-[24px]">verified</span>
              <span className="font-code-sm text-code-sm text-primary font-semibold">RESULTADO</span>
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface mb-space-sm">Código Auditável por Definição</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Ao aplicar ASD-STE100 ao código, a STE-DEV garante que qualquer agente de IA ou desenvolvedor produza software que não exige refatoração posterior. A ambiguidade — raiz da dívida técnica — é eliminada na origem pela restrição linguística.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}