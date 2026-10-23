# Plano: Incorporar o Site do Omni Saúde ao omni-sistemas.com

> Documento de planejamento técnico e arquitetural para consolidação e recriação da landing page e páginas institucionais do Omni Saúde dentro do projeto omni-sistemas.com.

---

## 1. Decisões

### Confirmadas
| # | Decisão |
|---|---|
| **D1** | **Escopo desta etapa:** Apenas incorporar o site do Omni Saúde ao LP. Ajustes e direcionamentos vêm depois. |
| **D2** | **Recriar, não portar:** Aproveitar conteúdo e estrutura semântica do OS-site (`C:\apps\HM\OmniSite`), escrevendo código novo no padrão do LP Omni Sistemas. |
| **D3** | **Design System e Design Pattern:** Adoção estrita dos padrões de `omni-sistemas.com` (tokens, skeuomorfismo leve, tipografia e espaçamentos). |
| **D4** | **Dois cards no LP:** `Omni Saúde App` → `https://saude.omni-sistemas.com` (externo) e `Omni Saúde LP` → `/omni-saude`, com tudo o que existe hoje no site do Omni Saúde. |
| **D5** | **Domínio do app:** `saude.omni-sistemas.com`. O cadastro e o "Criar conta" da landing do Omni Saúde direcionam para o `/login` do app. |
| **D6** | **Sem provas sociais:** Sem depoimentos, métricas infladas ou certificações não comprovadas por ora. |

### Adotadas por Padrão
| # | Decisão |
|---|---|
| **D7** | **Tema Claro:** Seção `/omni-saude/*` em tema claro, alinhada à home comercial do LP. Tema escuro reservado para etapa visual futura. |
| **D8** | **Header do LP:** Links e CTA próprios do Omni Saúde, sem subheader novo. O logo continua levando a `/`. |
| **D9** | **Exclusão de formulários pesados:** `AuthModal`, `EmailJS` e coleta de CPF/CNPJ/data de nascimento não entram. |
| **D10** | **Casca de cadastro:** `/cadastro` vira apenas casca visual com `noindex` e fora do sitemap. Formulário de demo de labs vira seção inline, sem envio. |
| **D11** | **Constante centralizada:** Links do app em constante única (`SITE.apps.omniSaude`), com `/login` como valor provisório. |
| **D12** | **Persistência de Leads segregada:** Na etapa de ativação de formulários, utilizar o banco Neon PostgreSQL do LP, mas com uma tabela dedicada (`omni_saude_leads`) para distinguir e isolar os leads de laboratórios do Omni Saúde em relação aos leads da Omni Sistemas. |

### Pendentes (Não Bloqueiam Esta Etapa)
- **Domínio canônico do LP:** Corrigido para `omni-sistemas.com`.
- **E-mail oficial de contato:** Alinhamento futuro entre `suporte@omni-sistemas.com` e `contato@omnisaude.com.br`.
- **Implementação do envio de leads:** Criação da migration `002_create_omni_saude_leads_table.sql` e handler dedicada na etapa de formulários.

---

## 2. Regras de Execução

- **Isolamento de escopo:** Não tocar em nada fora do escopo definido (seção 8).
- **Segurança de credenciais:** Jamais ler, copiar ou commitar `.env.local`.
- **Padrão STE-DEV do LP:**
  - TypeScript estrito (`noUncheckedIndexedAccess`, `exactOptionalPropertyTypes`, zero `any`).
  - Módulos atômicos com menos de 100 linhas por arquivo.
  - UI declarativa e semântica.
  - Testes unitários colocalizados junto de cada componente (`.test.tsx`).
- **Entrega por fases:** Um commit por fase. Ao fim de cada fase, rodar e aprovar:
  ```bash
  pnpm lint && pnpm exec tsc --noEmit && pnpm test
  ```

---

## 3. Design System Canônico

- **Fonte de verdade:** `src/tokens.ts`, `app/globals.css` e `src/common/*`.
  - *Nota:* O arquivo `DESIGN.md` da raiz está defasado (paleta `#0e1321`, enquanto o código usa `#071a2d`) e deve ser removido.
- **Paleta e superfícies:**
  - Fundo `#f8fafc` alternando com `white`.
  - Superfícies skeuomórficas: `skeuo-card`, `skeuo-card-sky`, `skeuo-card-emerald`.
  - Botões: `skeuo-button-primary`, `skeuo-button-emerald`, `skeuo-button-ghost`.
  - Elementos de formulário e tags: `skeuo-chip`, `skeuo-input`.
  - Links em tom `sky-700`.
  - Eyebrows técnicos no padrão `// …` em `JetBrains Mono`.
- **Tipografia e ícones:**
  - Fontes: Inter (corpo/títulos) e JetBrains Mono (código/técnico).
  - Ícones: Material Symbols no lugar de Lucide.
- **Movimento:** `Reveal` e `TiltCard` nativos (sem Framer Motion).
- **Espaçamento e container:** Tokens `space-*`, `max-w-container`, `px-margin-mobile md:px-margin-tablet lg:px-margin`.
- **Compensação de topo:** O `Header` do LP é fixo com `h-16`, exigindo compensação no topo de cada página.

---

## 4. Estrutura de Arquivos Planejada

```
app/omni-saude/
  layout.tsx          ← Header light (links/cta próprios) + Footer light + wrapper claro
  page.tsx            ← Home do Omni Saúde
  para-voce/page.tsx  ← Pacientes
  para-labs/page.tsx  ← Laboratórios e Clínicas
  medicos/page.tsx    ← Médicos
  seguranca/page.tsx  ← Arquitetura e Privacidade / LGPD
  contato/page.tsx    ← Canais de Atendimento
  cadastro/page.tsx   ← Casca visual (noindex)

src/omni-saude/
  data/               ← home.ts, para-voce.ts, labs.ts, medicos.ts, seguranca.ts, contato.ts, navigation.ts
  sections/           ← Uma seção por arquivo + .test.tsx
  components/         ← PageHero, InfoCard, AudienceSplit, FeatureRow, BeforeAfter,
                        DataLocationTable, FinalCta (cada um com .test.tsx)

public/omni-saude/
  hero_app_mockup.webp
  doctor_patient_care.webp
  logo-fundo-escuro.png
  termos-de-uso.pdf
  politica-de-privacidade.pdf
```
*(Remover referências ao legado pitch-deck.pdf).*

---

## 5. Alterações em Arquivos Existentes do LP

| Arquivo | Mudança Planejada |
|---|---|
| `src/config/site.ts` | Adicionar `apps.omniSaude = { url, login }` com `https://saude.omni-sistemas.com` e `/login`. |
| `src/common/navLinks.ts` | Nova constante `NAV_LINKS_OMNISAUDE` (Omni Saúde, Para Você, Laboratórios e Clínicas, Médicos, Segurança, Contato). |
| `src/common/TimelineStep.tsx` | Prop `theme` opcional (padrão `'dark'` para compatibilidade de testes existentes). |
| `src/common/BenefitsCarousel.tsx` | Prop `ariaLabel` opcional (para substituir o label fixo da Omni Sistemas). |
| `src/common/Footer.tsx` | Prop opcional para links legais específicos (termos e privacidade). |
| `src/common/ProjectCard.tsx` | Suporte a link interno (`next/link`, mesma aba, ícone `arrow_forward`, label "Conhecer o Omni Saúde") vs link externo (`target="_blank"`). |
| `src/data.ts` | Atribuir `url: '/omni-saude'` no card `Omni Saúde LP` (somente na Fase 5). |
| `app/sitemap.ts` | Adicionar as 6 rotas públicas (mantendo `/cadastro` fora). |

---

## 6. Mapa de Conteúdo (OS-site → LP)

- **Home:** Hero com benefícios, CTAs e mockup (`PageHero`) · Dois públicos (`AudienceSplit`) · Atendimento humano (`FeatureRow`) · Banner de segurança (`skeuo-card-sky` com link para `/omni-saude/seguranca`) · CTA final (`FinalCta`).
- **Para Você:** Hero · 3 benefícios (`BenefitsCarousel`) · Linha do tempo, Repositório, Profissionais (3x `FeatureRow`) · 4 casos de uso (grade de `InfoCard`) · `FinalCta`.
- **Labs e Clínicas:** Hero · Problema (3) (`ProblemCard`) · Solução em 3 passos (`TimelineStep`) · Integração (3) (`InfoCard`) · `#solicitar-demo` inline com `skeuo-input` (sem envio).
- **Médicos:** Hero · Regra de tela (3) (`InfoCard`) · Fluxo (3) (`TimelineStep`) · Antes × depois (`BeforeAfter`) · `FinalCta`.
- **Segurança:** Hero · Arquitetura (3 blocos) (`FeatureRow`) · LGPD na prática (4) (`InfoCard`) · Em processo (2) (`InfoCard`) · Onde os dados ficam (`DataLocationTable`) · `FinalCta`.
- **Contato:** Hero · Paciente e Emissor (`AudienceSplit`) · Contatos diretos via WhatsApp (`SITE.whatsapp`) e e-mail.
- **Cadastro:** Casca com dois perfis (pessoa e empresa), sem envio e sem campos sensíveis de CPF/CNPJ/nascimento.

---

## 7. Fases de Execução

### Fase 0: Linha de Base
- Executar `pnpm test`, `pnpm lint` e `pnpm exec tsc --noEmit` no LP.
- **Critério de aceite:** 100% verde (contagem de referência dos testes).

### Fase 1: Conteúdo e Assets
- Extrair texto das 7 páginas para `src/omni-saude/data/*.ts`, estritamente tipado, sem JSX.
- Copiar assets para `public/omni-saude/`; converter imagens para webp via `scripts/convert-to-webp.js`; usar `logo-Saude-peq.webp` já existente no LP.
- Revisar selos de confiança e seção "Em processo" da Segurança (D6).
- **Critério de aceite:** Conteúdo semântico fiel conferido página a página.

### Fase 2: Fundação
- Configurar `SITE.apps.omniSaude` e `NAV_LINKS_OMNISAUDE`.
- Criar `app/omni-saude/layout.tsx` (Header light, Footer light, wrapper claro, link/CTA para o app).
- Implementar prop `theme` em `TimelineStep`, `ariaLabel` em `BenefitsCarousel` e links legais no `Footer` com testes.
- Gerar as 7 rotas placeholder.
- **Critério de aceite:** 7 rotas carregando com layout e navegação funcionais; testes legados 100% verdes.

### Fase 3: Componentes Novos
- Criar os 7 componentes em `src/omni-saude/components/`, cada um acompanhado de teste unitário e < 100 linhas.
- **Critério de aceite:** Testes unitários passando; adesão total ao Design System; `Reveal` e `TiltCard` aplicados adequadamente.

### Fase 4: Páginas
- Implementação sequencial: Home → Para Você → Labs → Médicos → Segurança → Contato → Cadastro.
- Garantir: H1 único por página, hierarquia correta de headings, tags de imagem com dimensões/loading e compensação de `h-16`.
- Teste unitário por página validando presença das seções e H1.
- **Critério de aceite:** Conteúdo completo e links internos íntegros.

### Fase 5: Integração com o LP
- Ajustar `ProjectCard` para suportar navegação interna via `next/link`.
- Inserir `url: '/omni-saude'` no card "Omni Saúde LP" em `src/data.ts`.
- Atualizar `app/sitemap.ts` com as 6 novas rotas e validar metadata/noindex.
- **Critério de aceite:** Card no LP abre `/omni-saude` e card do app direciona para `saude.omni-sistemas.com`.

### Fase 6: Validação Final
- Executar `pnpm lint && pnpm exec tsc --noEmit && pnpm test && pnpm build`.
- Revisão responsiva (375px, 768px e 1280px): zero overflow horizontal, foco de teclado acessível e contraste legível.
- **Critério de aceite:** Build de produção bem-sucedido e contagem de testes superior à linha de base.

---

## 8. Fora de Escopo (Etapas Posteriores)

- Integração final dos endpoints de login/cadastro reais.
- Manipulação de envios reais de formulários e `/api/leads`.
- Modo escuro, 3D e animações complexas para a seção do Omni Saúde.
- Schemas JSON-LD avançados e expansões em `llms.txt` específicas do subdomínio.

---

## 9. Itens Excluídos da Portabilidade (Sem Dívida Técnica)

- `Hero3D` e `ROICalculator` (órfãos).
- ~38 componentes do ecossistema shadcn sem uso.
- `AuthModal`, `EmailJS`, `next-themes`, `framer-motion`.
- Arquivos de build, configs duplicadas (`vite.config.ts`, `vercel.json`, `index.css`).
- Fontes Bricolage Grotesque e Figtree.
- Documentos desatualizados (`DESIGN.md`, `pitch-deck.pdf`, scripts temporários de rebrand).

---

## 10. Matriz de Riscos e Mitigações

| Risco | Mitigação |
|---|---|
| **Perda de conteúdo na recriação** | Fase 1 extrai todo o conteúdo para `data/` tipado antes de qualquer JSX; conferência minuciosa página a página. |
| **Quebra de componentes compartilhados no LP** | Props novas são opcionais com fallback idêntico ao comportamento atual; bateria de 285 testes como rede de segurança. |
| **Header fixo cobrindo o topo das páginas** | Compensação explícita de padding no `layout.tsx` e validação visual de viewport na Fase 6. |
| **Card apontar para rota inexistente** | Atribuição da URL no `data.ts` retida estritamente até a Fase 5 com as páginas já ativas. |
| **Afirmações de autoridade sem comprovação** | Filtro rigoroso de copywriting na Fase 1 (D6) eliminando menções a certificados ou métricas não verificadas. |
