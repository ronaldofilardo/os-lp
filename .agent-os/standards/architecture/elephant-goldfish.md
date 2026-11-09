# Elephant-Goldfish Model (EGM) Standards
> Metodologia baseada no modelo open-source do Google (`google/elephant-goldfish-model`) para desenvolvimento orientado a especificações em IA (Spec-Driven Disciplined Vibe Coding).

---

## 1. O Problema que o EGM Resolve
Em fluxos contínuos de desenvolvimento com IA (vibecoding), duas falhas graves ocorrem com frequência:
- **Context Rot / Bajulação (Sycophancy)**: Em conversas longas, o modelo concorda com tudo o que o desenvolvedor sugere, esquece regras anteriores e perde a visão crítica.
- **Ataques Impulsivos de Código**: O modelo começa a alterar múltiplos arquivos simultaneamente sem validar premissas, quebrando funcionalidades legadas e gerando regressões difíceis de depurar.

---

## 2. A Divisão de Papéis

### 🐘 Papel 1: The Elephant (Contexto Profundo & Mapeamento)
- **Função**: Agente principal em diálogo contínuo com o desenvolvedor.
- **Responsabilidades**:
  1. Identificar o projeto ativo em `C:\apps\<projeto>`.
  2. Mapear dependências, rotas e arquivos existentes.
  3. Consultar os padrões em `C:\apps\agent-os\standards\`.
  4. Estruturar a especificação ou roteiro (`spec.md`) detalhando o que será alterado, por que e quais arquivos serão afetados.
  5. **PROIBIDO**: Modificar código em disco antes que o plano seja validado pelo crivo do Goldfish.

### 🐟 Papel 2: The Goldfish (Revisor de Zero-Contexto & Anti-Viés)
- **Função**: Avaliação independente e fria, sem o viés ou histórico da conversa.
- **Responsabilidades**:
  Auditar a especificação proposta pelo Elefante sob 4 pilares:
  1. **Premissas Ocultas (Blind Spots)**: O plano presume a existência de pacotes, rotas ou tabelas que não existem no projeto?
  2. **Risco de Regressão (Breaking Changes)**: Quais componentes, APIs ou fluxos existentes podem quebrar com essa mudança?
  3. **Conformidade com Padrões**: Respeita `tech-stack.md`, `clean-code.md`, `response-format.md`, `ui-components.md` e `prisma-database.md`?
  4. **Eficiência & RTK**: O plano prevê testes e comandos com `rtk` (ex: `rtk test`, `rtk tsc`, `rtk lint`) para evitar desperdício de tokens?

---

## 3. Gatilhos de Ativação Automática

O protocolo EGM é acionado automaticamente em cada tarefa nos projetos de `C:\apps`:

| Complexidade da Tarefa | Comportamento Automático |
| :--- | :--- |
| **Pequeno ajuste / Fix direto** (1 arquivo, sem impacto em arquitetura) | O Elefante faz um micro-crivo mental Goldfish de 3 segundos (checando regressão) e aplica o fix com validação RTK. |
| **Nova Feature / Refatoração / Mudança de Schema** (2+ arquivos, rotas, banco) | **Obrigatório ciclo completo**: O Elefante elabora a spec/plano -> Goldfish audita premissas e riscos -> Aprovação -> Execução cirúrgica de código. |

---

## 4. Checklist Rápido do Goldfish
Antes de qualquer comando de alteração em disco (`write_file` / `edit_file` massivo):
- [ ] O schema do banco precisa de migração? Ela é segura?
- [ ] O payload da API segue o padrão `{ success, data, error }`?
- [ ] Alguma rota existente foi quebrada ou renomeada sem compatibilidade retroativa?
- [ ] Os pacotes necessários já estão no `package.json` ou precisam de instalação via `pnpm`?
- [ ] A validação pós-código pode ser feita rapidamente com `rtk`?

