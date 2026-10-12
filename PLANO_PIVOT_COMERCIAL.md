# Plano Estruturado de Alterações: Omni Sistemas
### Transição de Abordagem Técnica para Comercial Focada em Negócios e Geração de Leads

---

## 1. Diagnóstico do Cenário Atual

| Seção Atual | Abordagem Atual (Técnica / Foco Dev) | Impacto no Tomador de Decisão / Leigo |
| :--- | :--- | :--- |
| **Hero** | Selo de engenharia preventiva, termos como *Zero-any TS*, *Módulos < 100 linhas* e console falso de telemetria técnica. | Distante de problemas reais de negócios (vendas, automação, gargalos operacionais). |
| **Resumo & Problema** | Foco em "dívida técnica", "copilotos de IA sem supervisão" e problemas internos de squads de TI. | O dono de negócio não se identifica; a dor dele é retrabalho manual, lentidão e erros operacionais. |
| **Miolo Técnico** (5 seções) | Terminal de auditoria, comparação de código antes/depois, norma aeroespacial ASD-STE100 e matriz de conformidade. | Gera sobrecarga cognitiva e assusta quem busca uma solução sob medida. |
| **Diferenciais Ausentes** | Sem menção explícita a **integrações via API** (como Asaas) ou ao processo de **reuniões e escuta ativa**. | Os dois maiores pontos fortes de entrega de valor estão invisíveis. |
| **Rodapé e Claims** | Menções a "SLA Invariante 99.998%", "Compliance ISO/IEC 25010" e "Segurança Criptográfica". | Risco jurídico e de credibilidade, sugerindo certificações formais inexistentes. |

---

## 2. Nova Arquitetura de Informação & Jornada do Usuário

A landing page principal passa de uma tese acadêmica para um **funil de vendas de 9 etapas**:

```mermaid
graph TD
    A[1. Header Comercial] --> B[2. Hero: Promessa de Negócio + Orçamento sem Compromisso]
    B --> C[3. Faixa de Benefícios: Sob Medida | Integrado | LGPD | Direto com Especialista]
    C --> D[4. Dores Reais do Cliente: Gargalos, Planilhas, Cobranças Manuais]
    D --> E[5. Diferenciais: Integrações API Asaas + Escuta Ativa + LGPD]
    E --> F[6. Como Trabalhamos: Jornada em 4 Passos Simples]
    F --> G[7. Soluções e Serviços: Novos Sistemas, Integrações, Modernização]
    G --> H[8. Cases Reais: Resultados de Negócio sem Jargão]
    H --> I[9. Faixa STE-DEV: Rigor Técnico com Link para /metodologia]
    I --> J[10. FAQ Comercial + 11. Contato / WhatsApp + 12. Rodapé Transparente]
```

A base técnica original (norma ASD-STE100, terminal, comparação de código e matriz de invariantes) não será perdida: será transferida para a nova rota dedicada **`/metodologia`**, direcionada a CTOs, auditores e perfis técnicos.

---

## 3. Direcionamento Visual (Identidade Baseada no Logo)

Conforme a análise do logotipo oficial (`public/logo-Omni-Sistema-peq.jpg`):
* **Fundo da Home (Tema Claro & Acolhedor):** Tons limpos de branco e off-white (`#f8fafc` / `#f0f9ff`) com cartões com bordas sutis e sombras suaves.
* **Cor Primária (Confiança & Tecnologia):** Azul royal / Ciano do logo (`#0284c7`, `#0ea5e9`, `#2563eb`).
* **Cor Secundária (Ação & Prosperidade):** Verde esmeralda / Menta do logo (`#10b981`, `#059669`, `#4edea3`).
* **Páginas Técnicas (`/metodologia`):** Permanecem com o tema *dark/terminal*, preservando o visual de engenharia e auditoria.

---

## 4. Detalhamento das Alterações por Seção

### 4.1 Header & Navegação
* **Menu de Navegação:** `Soluções` · `Como Trabalhamos` · `Integrações` · `Projetos` · `Dúvidas` · `Contato` *(link discreto para "Metodologia")*.
* **Botão CTA Principal:** Substituir *"Iniciar Auditoria"* por **"Fazer Orçamento sem Compromisso"** ou **"Agendar Conversa"**.
* **Remoção:** Retirar o ícone de terminal e termos de auditoria.

### 4.2 Hero Section (Primeira Dobra)
* **Selo / Badge:** "Sistemas Sob Medida & Automação Inteligente" (em verde/azul suave).
* **H1 Focado no Cliente:** 
  > *"Sistemas sob medida que resolvem os gargalos reais do seu negócio."*
* **Subtítulo:** 
  > *"Desenvolvemos plataformas personalizadas, automatizamos cobranças e integramos seus sistemas com plataformas como o Asaas. Tudo desenhado sob medida, com atenção rigorosa à LGPD e atendimento direto com quem projeta."*
* **CTAs Primário e Secundário:**
  * Primário: **"Solicitar Orçamento sem Compromisso"** (leva ao formulário / WhatsApp).
  * Secundário: **"Entenda Como Trabalhamos"** (rola suavemente até o processo de descoberta).
* **Lateral Direita (Hero Visual):** Substituir o console de telemetria por um mockup intuitivo de painel de negócios (fluxo de cobranças automáticas, status de integrações e métricas claras).
* **Remoção:** Eliminar chips de código (*"Zero-any TS"*, *"ASD-STE100"*, *"SLA 99.9%"*).

### 4.3 Faixa de Benefícios Rápidos (Substitui KeyTakeaways)
Quatro cartões limpos e diretos:
1. **Feito sob Medida:** O sistema se molda à sua operação, sem pacotes engessados.
2. **Integrações Via API:** Conexão nativa com meios de pagamento (como Asaas), bancos, ERPs e ferramentas do seu dia a dia.
3. **Privacidade e LGPD:** Tratamento ético e seguro dos dados dos seus clientes desde o primeiro dia.
4. **Sem Intermediários:** Você conversa e alinha cada etapa diretamente com quem desenha a arquitetura do software.

### 4.4 Dores do Negócio (Reescrita de ProblemSection)
Substituir o tom alarmista de terminal por empatia com o empresário:
* **Título:** *"Sua empresa enfrenta algum desses gargalos?"*
* **Problema 1 - Rotina Manual:** Cobranças, emissão de boletos e confirmações feitas manualmente, gerando erros e inadimplência.
* **Problema 2 - Sistemas Desconectados:** Informações espalhadas em planilhas que não conversam com seus programas.
* **Problema 3 - Sistema Antigo Travando a Operação:** Software legado lento, que ninguém mais sabe consertar ou atualizar.
* **Problema 4 - Soluções Prontas que não Encaixam:** Softwares de prateleira caros que não atendem às particularidades do seu nicho.

### 4.5 Seção de Diferenciais Centrais (O Coração da Página)
Três blocos de destaque visual:
1. **Integrações com Plataformas e Meios de Pagamento (Destaque Asaas):**
   * *O que faz:* Automatização do ciclo financeiro — geração de cobranças (Pix, Boleto, Cartão), notificações automáticas e conciliação em tempo real.
   * *Mensagem:* "Conectamos sua operação às principais APIs do mercado para eliminar o trabalho manual."
2. **Diagnóstico e Escuta Ativa Antes de Qualquer Linha de Código:**
   * *O que faz:* Reuniões e chamadas de alinhamento com a diretoria/operação para entender o fluxo de trabalho real.
   * *Mensagem:* "Não empurramos tecnologias da moda. Desenhamos a arquitetura exata para o tamanho da sua demanda."
3. **Segurança da Informação e LGPD Levadas a Sério:**
   * *O que faz:* Proteção de dados sensíveis de ponta a ponta, controle de acessos e respeito total à privacidade do usuário final.

### 4.6 Como Trabalhamos (Processo em 4 Etapas Claras)
Reutilizar a mecânica do componente de timeline existente com textos acessíveis:
1. **Etapa 1: Reunião de Descoberta:** Conversa inicial sem compromisso para mapear processos e necessidades.
2. **Etapa 2: Planejamento & Arquitetura:** Apresentação da solução em linguagem simples e clara, com prazos e escopo bem definidos.
3. **Etapa 3: Desenvolvimento & Integrações:** Construção do sistema com validações periódicas e integração das APIs necessárias.
4. **Etapa 4: Entrega, Treinamento & Suporte:** Colocação em operação assistida com acompanhamento contínuo.

### 4.7 Catálogo de Serviços Comerciais
* **Desenvolvimento Sob Medida:** "Sistemas web e plataformas criadas especificamente para o seu modelo de negócio."
* **Integrações e Automações de API:** "Conecte seu sistema a plataformas como o Asaas, gateways, ERPs e ferramentas externas."
* **Diagnóstico e Modernização de Legados:** "Atualize sistemas antigos que estão lentos ou instáveis sem interromper sua operação diária."

### 4.8 Cases e Portfólio (Foco em Resultados Reais)
* Manter os logos legítimos já existentes (`Omni Saúde`, `Acesso Saúde`, `QWork`, `Reporte`, `LWOS`, etc.).
* Reorientar as descrições para resultados práticos:
  * Exemplo *AQUI*: De "Arquitetura monorepo com controle em tempo real" para *"Gestão ágil de metas e comissionamento de equipes de vendas com fechamento automático"*.
  * Exemplo *Omni Saúde*: *"Emissão ágil e segura de laudos médicos com total conformidade à privacidade do paciente"*.
* Ocultar tags excessivamente técnicas na home (*Kafka*, *Rust*, *WASM*, *Zero-any*), exibindo-as apenas em `/metodologia`.

### 4.9 Faixa de Rigor Técnico ("Por Que a Omni Sistemas?")
Um bloco elegante e sucinto que faz a ponte com a reputação e solidez da empresa:
* Experiência comprovada desde **1997**.
* Método de engenharia inspirado no rigor aeroespacial, garantindo softwares estáveis que não quebram ao crescer.
* Botão: **"Conheça os detalhes da nossa metodologia técnica →"** (link para `/metodologia`).

### 4.10 FAQ Comercial (6 a 7 Dúvidas Frequentes de Clientes)
1. *Como funciona o primeiro contato e a proposta de orçamento?*
2. *Vocês conseguem integrar o sistema com o Asaas ou outros bancos e plataformas?*
3. *Tenho um sistema antigo na minha empresa. É possível modernizá-lo sem parar o negócio?*
4. *Como a Omni Sistemas garante a proteção dos dados e a conformidade com a LGPD?*
5. *Preciso entender de programação para acompanhar o projeto?*
6. *Vocês oferecem suporte após a entrega do sistema?*

### 4.11 Contato & Captação de Leads
* **Chamada:** *"Vamos tomar um café e conversar sobre o seu projeto?"*
* **Formulário:**
  * Nome completo.
  * E-mail.
  * WhatsApp / Telefone *(campo adicionado para contato rápido)*.
  * Interesse: *Criar um sistema novo* · *Integração de APIs (ex.: Asaas)* · *Modernizar sistema existente* · *Quero conversar para entender melhor*.
  * Mensagem / Descrição da necessidade.
  * Caixa de seleção para consentimento conforme a LGPD.
* **Garantias ao lado do formulário:**
  * Atendimento direto com quem projeta.
  * Retorno em até 24 horas úteis.
  * Orçamento sem compromisso e sigilo garantido.

### 4.12 Saneamento do Rodapé
* **Remover:** *"SLA Invariante 99.998%"*, *"Compliance ISO/IEC 25010"* e *"Segurança Criptográfica"*.
* **Manter:** Dados cadastrais da empresa (BE SMART LTDA, CNPJ), canais diretos (WhatsApp e e-mail), links institucionais e o versículo bíblico já existente.

---

## 5. Nova Rota Técnica: `/metodologia`

Criação da rota `app/metodologia/page.tsx` para abrigar o acervo técnico sem diluir a conversão da página inicial:
* `MethodologySection` (os 4 pilares da engenharia preventiva).
* `ASDSTE100Section` (norma aeroespacial e eliminação de ambiguidade).
* `AuditTerminal` & `CodeComparison` (demonstração prática de refatoração e boas práticas).
* `ComplianceSection` (matriz de invariantes e testes).
* FAQ técnico detalhado (sobre arquivos com menos de 100 linhas, Strangler Pattern e histórico acadêmico).

---

## 6. Fases Sugeridas para Execução

```
[Fase 1] Reestruturação da Home (Textos, Hero, Benefícios, Dores e Diferenciais)
   └── Implementação dos conteúdos comerciais e integração visual clara
[Fase 2] Criação da Rota /metodologia
   └── Migração e organização limpa dos módulos e FAQs técnicos
[Fase 3] Atualização dos Serviços, Cases e Dados (src/data.ts)
   └── Reescrita dos textos em linguagem de valor e resultado
[Fase 4] Otimização do Formulário de Contato e Validações
   └── Campo WhatsApp, novas opções de interesse e checkbox LGPD
[Fase 5] Saneamento do Rodapé e Metadados SEO/AEO
   └── Atualização de config/site.ts, tags OpenGraph e schemas estruturados
```
