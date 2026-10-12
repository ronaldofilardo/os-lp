# Base de Conhecimento — 06: Arquitetura Limpa e Princípios SOLID

## Resumo da Arquitetura
A Omni Sistemas aplica a **Clean Architecture** e os 5 princípios **SOLID** como restrições automatizadas na metodologia STE-DEV. A arquitetura estabelece barreiras rígidas para evitar que alterações em banco de dados, provedores de nuvem ou frameworks visuais quebrem regras de negócio fundamentais.

## Estrutura Canônica das Camadas
1. **Camada de Apresentação (UI):** Componentes visuais atômicos (< 100 linhas), desacoplados de bibliotecas de cliente HTTP ou drivers de banco de dados.
2. **Camada de Aplicação:** Casos de uso e custom hooks que expressam fluxos de usuário e orquestram a comunicação entre repositórios.
3. **Camada de Domínio:** Entidades centrais, value objects e contratos de interfaces livres de qualquer dependência externa.
4. **Camada de Infraestrutura:** Implementações concretas de repositórios (PostgreSQL, Redis), integrações com APIs e serviços de mensageria (Kafka).

## A Barreira entre DB-Row e DTO
- **DB-Row:** O schema de persistência reflete tabelas de banco e detalhes internos de armazenamento.
- **DTO (Data Transfer Object):** O contrato imutável trafegado para a tela ou consumido pela API externa.
- **Regra de Ouro:** É terminantemente proibido que componentes de tela recebam instâncias de `DB-Row`. A conversão deve ocorrer obrigatoriamente através de adapters dedicados.

## Aplicação dos Princípios SOLID
- **S (Single Responsibility):** Cada arquivo resolve exatamente um problema, reforçado pelo teto de 100 linhas.
- **O (Open/Closed):** Módulos são abertos para extensão por contratos, mas fechados para modificação no núcleo.
- **L (Liskov Substitution):** Repositórios concretos podem ser trocados sem alteração na lógica de negócio.
- **I (Interface Segregation):** Criação de interfaces pequenas e atômicas.
- **D (Dependency Inversion):** Módulos de alto nível dependem de abstrações (interfaces), nunca de implementações diretas.
