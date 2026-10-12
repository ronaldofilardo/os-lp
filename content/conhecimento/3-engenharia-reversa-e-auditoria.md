# Base de Conhecimento — 03: Engenharia Reversa e Auditoria de Código

## Resumo Executivo
O protocolo de **Auditoria e Engenharia Reversa STE-DEV** é o serviço especializado da Omni Sistemas para resgate de softwares corporativos legados ou bases contaminadas por código não supervisionado. Em vez de reescrita cega (que introduz novas falhas operacionais), o método aplica uma abordagem cirúrgica baseada em evidências.

## O Protocolo Formal em 4 Etapas

### Etapa 1: Ingestão e Varredura Sistemática
- Mapeamento estático automatizado do repositório.
- Detecção das Proibições Absolutas:
  - Componentes com mais de 100 linhas;
  - Lógica de chamada a APIs/banco embutida em tags JSX/HTML;
  - Complexidade ciclomática superior a 10;
  - Uso de tipagem frouxa (`any`);
  - Falta de isolamento entre modelo de persistência e modelo de tela.

### Etapa 2: Diagnóstico Baseado em Evidências (Laudo de Conformidade)
- **Resumo Executivo:** Tabela quantitativa com métricas de conformidade (Score Geral, violações críticas vs invariantes atendidos).
- **Inventário Detalhado:** Cada não-conformidade é catalogada com:
  - Localização precisa: `arquivo.ts:linha`;
  - Causa raiz do problema;
  - Trecho de código ofensivo;
  - Impacto financeiro e risco estimado de manutenção.

### Etapa 3: Matriz de Sequência Atômica (Plano em 5 Passos sem Regressão)
A refatoração segue uma ordem inegociável que prepara cada camada para a seguinte sem quebrar a operação:
1. **Linha Base e Testes de Caracterização:** Testes automatizados cobrindo contratos reais para blindar o comportamento atual contra regressões.
2. **Tipagem e DTOs:** Correção de interfaces e criação de adapters separando `DB-Row` de `DTO`.
3. **Extração de Lógica:** Remoção de regras de negócio da UI para custom hooks e utilitários puros.
4. **Refatoração de UI:** Redução dos componentes para o teto de 100 linhas, transformando-os em visualizadores puros.
5. **Limpeza Semântica STE:** Padronização léxica com vocabulário ASD-STE100.

### Etapa 4: Governança e Prevenção Permanente
- Instalação das premissas e da Skill STE-DEV no repositório.
- A partir dessa etapa, novas evoluções já nascem em conformidade, impedindo o reaparecimento de dívida técnica.
- Entrega do laudo completo em até 5 dias úteis.
