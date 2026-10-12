# Base de Conhecimento — 02: Metodologia STE-DEV

## Resumo Executivo
A **STE-DEV** é um framework proprietário de **Engenharia de Software Preventiva** concebido pela Omni Sistemas. Sua tese central é que **a refatoração no destino é a prova cabal de uma falha de geração na origem**. Ao impor restrições determinísticas, a metodologia elimina a dívida técnica antes que qualquer linha de código seja aceita no repositório.

## Os 4 Pilares Fundamentais

### Pilar 1: Filosofia ASD-STE100 no Código
- **Unicidade Semântica:** Um conceito = um nome aprovado em todo o projeto.
- **Proibição de Termos Vagos:** Banimento terminante de palavras como `handle`, `process`, `manage`, `data`, `item`, `helper` e `utils`.
- **Separação Estrutural:** Código procedimental (orquestração via hooks/serviços) rigorosamente isolado de código descritivo (componentes de UI puros).

### Pilar 2: Arquitetura Limpa e SOLID Mandatórios
- 4 camadas independentes: Apresentação (UI), Aplicação (casos de uso), Domínio (entidades de negócio) e Infraestrutura (drivers, banco, APIs).
- Design Patterns mandatórios: Factory, Repository, Adapter e Facade.
- O domínio não possui dependências externas; detalhes de infraestrutura dependem de abstrações (DIP).

### Pilar 3: Desenvolvimento Preventivo (DEV) por Restrições Rígidas
- **Teto de 100 Linhas por Arquivo:** Força alta coesão e adesão estrita ao Princípio de Responsabilidade Única (SRP).
- **Zero Any:** Tipagem estrita no TypeScript com `noImplicitAny` e runtime validation quando necessário.
- **Isolamento DB-Row vs DTO:** Barreira sagrada entre a estrutura de banco de dados e os contratos expostos na interface.
- **Tratamento Obrigatório de I/O:** Todo fluxo assíncrono de rede ou disco deve conter tratamento explícito via `try/catch`.

### Pilar 4: Operacionalização como Skill Guardiã
- A metodologia opera nativamente no ambiente Antigravity como uma Skill ativa (`ste-dev`).
- Atua como um guardião determinístico: intercepta solicitações de geração de código e audita a conformidade com as regras antes de autorizar a persistência no repositório.
