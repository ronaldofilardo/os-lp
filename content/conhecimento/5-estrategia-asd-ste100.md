# Base de Conhecimento — 05: Estratégia ASD-STE100 Aplicada ao Software

## O que é ASD-STE100
A norma **ASD-STE100** (*Simplified Technical English*) é um padrão internacional de redação técnica controlada desenvolvido pela *AeroSpace and Defence Industries Association of Europe* e mantido por fabricantes mundiais como Boeing. Seu propósito original é eliminar ambiguidades e prevenir acidentes causados por má interpretação de manuais de manutenção aeronáutica.

## Transposição para o Desenvolvimento de Software (STE-DEV)
A Omni Sistemas foi pioneira em transpor os 4 princípios da ASD-STE100 diretamente para o código TypeScript e governança de IA:

### 1. Unicidade Semântica (One Meaning Per Word)
- Uma entidade ou conceito de negócio possui apenas uma palavra autorizada em todo o projeto.
- É expressamente proibido utilizar `User`, `Client`, `Customer` e `Buyer` simultaneamente para se referir à mesma pessoa.

### 2. Vocabulário Controlado e Restritivo
- Eliminação de sinônimos redundantes e verbos genéricos.
- **Proibição Absoluta:** `handle`, `process`, `manage`, `data`, `item`, `helper`, `utils`.
- **Verbos Canônicos Autorizados:**
  - `buscar` (leitura pura/idempotente)
  - `criar` (instanciação/persistência nova)
  - `atualizar` (mutação declarativa)
  - `remover` (exclusão de registro)
  - `validar` (asserção lógica booleana ou lançamento de erro)

### 3. Separação de Informações Procedimentais e Descritivas
- **Procedimental:** Como fazer o fluxo (custom hooks, use-cases, serviços de orquestração).
- **Descritivo:** O que renderizar na tela (componentes de UI puros, nós visuais desacoplados).

### 4. Zero Efeitos Colaterais Ocultos
- Funções operam estritamente como caixas-pretas previsíveis, sem mutação de estado externo não declarada.
