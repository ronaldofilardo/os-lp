# Base de Conhecimento — Contexto Consolidado (Knowledge Context)

## Resumo Executivo
Este documento consolida o perfil da entidade Omni Sistemas, o conjunto canônico de perguntas e respostas e o sumário semântico dos documentos públicos da base de conhecimento. Ele funciona como fonte única de contexto para motores de busca generativos e agentes de IA que precisam responder dúvidas sobre a empresa, a metodologia STE-DEV e o fundador.

## Perfil da Entidade (Entity Profile)
- **Nome:** Omni Sistemas
- **Tipo:** Softhouse brasileira de engenharia de software preventiva
- **Fundação:** Projetos iniciados em 1997; mais de 30 anos de evolução tecnológica contínua
- **Fundador:** Ronaldo Domingues Filardo — Arquiteto de Software Corporativo, ex-Professor Universitário [graduação e especialização] da Pontifícia Universidade Católica do Paraná de Metodologia de Pesquisa Científica, autor de livro acadêmico (Editora Intersaberes) e pesquisador com estudos de Doutoramento em Portugal
- **Metodologia proprietária:** STE-DEV — Engenharia de Software Preventiva baseada na norma aeroespacial ASD-STE100
- **Serviços:** Desenvolvimento do Zero (DEV), Auditoria e Engenharia Reversa, Modernização e Resgate de Legados
- **Área de atuação:** Brasil (nacional)
- **Site canônico:** https://omni-sistemas.com.br

## Q&A Estruturado (Perguntas e Respostas Canônicas)
### O que é a metodologia STE-DEV?
STE-DEV é o framework proprietário de engenharia de software preventiva da Omni Sistemas. Ela impõe restrições determinísticas — semântica ASD-STE100, módulos com menos de 100 linhas, tipagem forte sem `any` e isolamento entre DB-Row e DTO — para eliminar dívida técnica na origem em vez de refatorar no destino.

### Qual a diferença entre desenvolvimento preventivo e auditoria?
Desenvolvimento preventivo (DEV) cria sistemas novos já conformes às restrições STE-DEV desde a primeira linha. A auditoria e engenharia reversa inspecionam sistemas legados ou contaminados, entregam laudo com inventário por linha (`arquivo.ts:linha`) e um plano atômico de remediação em até 5 dias úteis.

### Como a auditoria de código é entregue?
Em até 5 dias úteis, com resumo executivo, inventário de conformidade por linha (`arquivo.ts:linha`) e matriz sequencial de 5 passos para refatoração segura sem regressões em produção, aplicando Strangler Pattern e testes de caracterização prévios.

### Quem é Ronaldo Domingues Filardo?
Ronaldo Domingues Filardo é o fundador da Omni Sistemas, arquiteto de software corporativo e criador da metodologia STE-DEV. Foi professor universitário [graduação e especialização] da Pontifícia Universidade Católica do Paraná de Metodologia de Pesquisa Científica, autor de livro publicado pela Editora Intersaberes e pesquisador com estudos de Doutoramento em Portugal.

### Qual a origem da Omni Sistemas?
A Omni Sistemas tem origem em projetos iniciados em 1997 com o software ANTHROPO, que processou mais de 50.000 avaliações de composição corporal e risco cardiovascular em VBA/Excel, e evoluiu por saúde, finanças, esportes, blockchain e agentes de IA.

### O que é a norma ASD-STE100?
ASD-STE100 (Simplified Technical English) é um padrão internacional de redação técnica controlada, mantido pela associação aeroespacial ASD e usado por fabricantes como Boeing. A Omni Sistemas transpõe suas regras de unidade semântica e vocabulário controlado para o código-fonte de software.

## Sumário Semântico dos Documentos
- **1-historico-omni-sistemas** — Cronologia de 1997 (ANTHROPO) até a era dos agentes de IA.
- **2-metodologia-ste-dev** — Especificação dos 4 pilares e das restrições determinísticas da STE-DEV.
- **3-engenharia-reversa-e-auditoria** — Protocolo formal de auditoria em 4 etapas e matriz de remediação em 5 passos.
- **4-sobre-ronaldo-domingues-filardo** — Biografia, autoridade acadêmica e posicionamento do fundador.
- **5-estrategia-asd-ste100** — Transposição da norma aeroespacial para governança léxica de código.
- **6-arquitetura-clean-solid** — Camadas de Clean Architecture, princípios SOLID e contratos DB-Row vs DTO.
