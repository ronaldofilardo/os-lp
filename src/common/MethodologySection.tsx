import { PillarCard } from './PillarCard'

const pillars = [
  {
    number: '01',
    icon: 'spellcheck',
    title: 'Filosofia ASD-STE100 Aplicada ao Código',
    description: 'Tradução das regras de Inglês Técnico Simplificado para a engenharia de software. Garante unicidade semântica (um conceito = um nome), proibição absoluta de termos vagos (`handle`, `process`, `manage`, `utils`) e separação rígida entre código procedimental (hooks) e descritivo (UI/utils).',
    rule: 'Regra: Um conceito possui apenas um único nome em todo o projeto. Terminologia aprovada exclusivamente — proibidos termos ambíguos ou redundantes.',
  },
  {
    number: '02',
    icon: 'layers',
    title: 'Arquitetura Limpa e SOLID Mandatórios',
    description: 'Separação estrita de camadas (UI, Aplicação, Domínio, Infraestrutura). Uso mandatório de Design Patterns (Factory, Repository, Adapter, Facade) para assegurar baixo acoplamento, alta coesão e testabilidade isolada. Componentes dependem de abstrações, nunca de clientes diretos.',
    rule: 'Regra: Dependências sempre apontam em direção ao domínio central. Extensibilidade por contratos fechados sem alteração do miolo.',
  },
  {
    number: '03',
    icon: 'rule',
    title: 'Desenvolvimento Preventivo (DEV)',
    description: 'Regras inegociáveis de geração: limite estrito de 100 linhas por arquivo, tipagem zero-any, try/catch obrigatório em I/O assíncrono, separação canônica entre DB-Row e DTO, e design tokens sem magic numbers. Se o arquivo exigir refatoração posterior, ele não deve ser gerado dessa forma.',
    rule: 'Regra Fundamental: A refatoração no destino é a prova cabal de uma falha de geração na origem. Código nasce modular e determinístico.',
  },
  {
    number: '04',
    icon: 'troubleshoot',
    title: 'Engenharia Reversa para Auditorias',
    description: 'Protocolo metódico de auditoria e inspeção de código existente e sistemas legados. Compreende Discovery e unificação de domínio, Testes de Caracterização prévios para blindar o comportamento contra regressões, Strangler Pattern e emissão de inventário detalhado de violações.',
    rule: 'Regra: Nenhuma refatoração cega. Diagnóstico prévio de acoplamento com Matriz de Refatoração em 5 passos sequenciais.',
  },
] as const

export function MethodologySection(): JSX.Element {
  return (
    <section className="w-full py-space-xl" id="metodologia">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-3xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Governança e Rigor Técnico</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Metodologia STE-DEV — Desenvolvimento e Auditoria Preventiva
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            A <strong>STE-DEV</strong> foi criada e adotada pela <strong>Omni Sistemas</strong> como um framework de <strong>Engenharia de Software Preventiva</strong> baseado na norma aeroespacial ASD-STE100. Ela opera em duas frentes fundamentais: primeiro no <strong>DEV (Desenvolvimento)</strong>, garantindo código novo sem dívida técnica nem necessidade de refatoração futura; e em seguida na <strong>Engenharia Reversa para Auditorias</strong>, permitindo diagnosticar, inspecionar e modernizar bases legadas com segurança cirúrgica.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">
          {pillars.map((p, i) => (
            <PillarCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  )
}