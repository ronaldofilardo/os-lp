import type { FAQItem, ProjectRow, ServiceRow } from '@/types'

export const PROJECTS_DB: readonly ProjectRow[] = [
  {
    id: 'aqui',
    name: 'AQUI',
    sector: 'FinTech',
    status: 'production',
    objective: 'Sistema focado no módulo de "comissionamento", auxiliando na gestão de metas, produção e cálculos de equipes comerciais.',
    audience: 'Profissionais de vendas e gestores.',
    techInfo: 'Arquitetura monorepo com controle em tempo real de metas financeiras e salvamento em lote.',
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-4AjOF2BpEqJjJabTPIV5WGqX6M3EZ-5YDSlLHfHmWPWMrqHXCgRuhEl1JL1SyQ9PdwBEBlvV6Rz5rLDJQ7EmOTeRcYuwUj3gwKVxforY0AUIur6Y-wPrRl90Bjj26yKf1-onkPXVUIWee11_JzYTnC85YbSXcsPgZwQBtgYs28JEbIBw6ZCOgiYRij2wWRPqcYdY2gAbCzCleOUOkUccrryiEXCLoQINLLct4fCqeU2S80O0VYRk',
  },
  {
    id: 'omni-saude',
    name: 'Omni Saúde',
    sector: 'HealthTech',
    status: 'production',
    objective: 'Sistema de gestão e processamento de laudos médicos laboratoriais.',
    audience: 'Laboratórios, médicos, pacientes.',
    techInfo: 'Portal e APIs de alta conformidade com Central de Notificações.',
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'ASD-STE100'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKSTdTBUPfMYhbcy_Kn9vZApvY8qWO5m7RwMJ9pF7q0sa-6KCRJ8pjXsoSpPbYKMcK2sIv7EypLVqQgWVMTxlQ4nvAxj1F8d_fxhf_RrxkI8Y0TzlkmUMOLM9glqydeBUDQ6u5XgZUq_rx-L37cakpfBwnra9r8wGzcB_wFNNJ3hq7lSEZJGvf1YyyLQg88aZSz6zveM9599v2DWhN6r_LhCa2vp9fSU0B0pDykw7vnHmIy1FmBGkV',
  },
  {
    id: 'lwos',
    name: 'LWOS',
    sector: 'Enterprise',
    status: 'in-dev',
    objective: 'Sistema operacional para o mercado de Wealth Management.',
    audience: 'Famílias de alto patrimônio, escritórios.',
    techInfo: 'Captação, gestão de recursos e triagem interna.',
    techStack: ['Rust', 'WASM', 'Go', 'OTel'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD5ytNJcBdwHa5wvpziT1Si2s7KfsKbJ2lJp6-wRQADKHGq14ctSJWRJzU3IxFKS5yv3fyHigqywmjifZZGoyss4qk-ZrZ_bIp7P_6zi_av3Ei1FoLxei3VwUEz7uzoSVoJlyPeMMO9Lk2BozppQBKwn0Eo9uW64x45xYG1f6_PWoesAkX4OsPJYxV12np4zpRy7uQso4jdAESm37j6MGGHJnfw3Oab7y4zxtvN_SxUxg-x85skejjN',
  },
  {
    id: 'qwork',
    name: 'QWork',
    sector: 'Enterprise',
    status: 'production',
    objective: 'Plataforma para avaliação psicossocial e riscos ocupacionais.',
    audience: 'Clínicas, médicos, gestores de RH.',
    techInfo: 'Core que processa avaliações e emite laudos rigorosos (LGPD).',
    techStack: ['Node.js', 'Kafka', 'Clean Arch', 'Zero-Any'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaYznN3m1QaV8hsnToPdEVwph2Cj4_dTfjhUxVRvGMKV4lL_nyJdIe-qGfid004K3HWBmAtcRes3fim9DjLHG1RqWSLQnN3RfUlnZEh9C3nZN7fN4SMpjyM0AyDj3A0o3BbCjobwZhJmawXNdn1UzgIA9fiphpp1AU4SLENIYUyVzz11ArAq8akLYZmpBLvpT-zuh3U2yiHY5w8eUCTi5nKyhqk7HnU7hY-qTevqQ5mrH73hGsD4rO',
  },
  {
    id: 'qwork-lp',
    name: 'QWork LP',
    sector: 'Marketing',
    status: 'production',
    objective: 'Site focado em vendas e marketing.',
    audience: 'Departamentos de RH e médicos.',
    techInfo: 'Landing page otimizada para SEO, funil de vendas e hub de artigos.',
    techStack: ['Next.js', 'Tailwind', 'SEO'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1GFeZM6oPLHFWZNoJ90gFe3n68JLuEPz-Qd38CL6oMIS3Ex9aJiM0qVHrpZAenXERCSc2iq0Vhb11B9iSOMq2KuKGfSCt31p8njC3tIaNY8skAD9d6zTFgtNFO_-hOTwL_Mb0ZNDDszjLRoswQDJQ6l6zRsU6pxj01bwJCuD-KHcudkZFkq4i9Oo6dsHcOZDTZqI_MF2t1QYXO3knBcOI436Gsw06eiib-zGZ8FvtU5tZDfHjF9C6',
  },
  {
    id: 'rkt',
    name: 'RKT',
    sector: 'SportTech',
    status: 'in-dev',
    objective: 'Aplicativo esportivo para atletas e controle de rankings de ligas.',
    audience: 'Atletas de raquete, federações e clubes.',
    techInfo: 'Gestão visual refinada de categorias unindo jogadores.',
    techStack: ['TypeScript', 'EventStore', 'Docker'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMVTl2x0ev6S2VxvgAiO6hLJKOcepxjrby_0XGLPnuVG2GLozIdp4DzSi9a6Fb30fLSVYpQFGXQiGpuijL4qGzPxR6EP2EL-IjOVhezDab8-rKx8EVmL27GsE5uBH8hARnw_eIdgreFgEMvB7EVrsASWZtn56qGMXUY72Uo8Jme7-HmQX6tdMHJ09lO0d0WXzyidKcHx_Z7FxZIMxoWuDZGYyE72SfKA6CO0x7qAYqV6jKFWlMkRvr',
  },
  {
    id: 'mundoas',
    name: 'mundoas',
    sector: 'Infra',
    status: 'production',
    objective: 'Ecossistema de infraestrutura sendo a espinha dorsal de microsserviços.',
    audience: 'Uso corporativo interno ou grandes clientes.',
    techInfo: 'Resiliência da arquitetura e padronização em larga escala.',
    techStack: ['Next.js', 'Redis', 'Tailwind'],
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB1GFeZM6oPLHFWZNoJ90gFe3n68JLuEPz-Qd38CL6oMIS3Ex9aJiM0qVHrpZAenXERCSc2iq0Vhb11B9iSOMq2KuKGfSCt31p8njC3tIaNY8skAD9d6zTFgtNFO_-hOTwL_Mb0ZNDDszjLRoswQDJQ6l6zRsU6pxj01bwJCuD-KHcudkZFkq4i9Oo6dsHcOZDTZqI_MF2t1QYXO3knBcOI436Gsw06eiib-zGZ8FvtU5tZDfHjF9C6',
  },
] as const

export const SERVICES_DB: readonly ServiceRow[] = [
  {
    id: 'dev-zero',
    title: 'Desenvolvimento do Zero (DEV)',
    description: 'Engenharia preventiva aplicada desde a primeira linha de código. Módulos estritamente desacoplados (< 100 linhas), tipagem forte e zero refatoração futura.',
    icon: 'rocket_launch',
    tier: 'standard',
    ctaLabel: 'Solicitar Proposta',
  },
  {
    id: 'auditoria',
    title: 'Auditoria e Engenharia Reversa',
    description: 'Inspeção metódica baseada em ASD-STE100, diagnóstico de acoplamento, inventário detalhado de violações e matriz de remediação sequencial.',
    icon: 'troubleshoot',
    tier: 'recommended',
    ctaLabel: 'Agendar Auditoria',
  },
  {
    id: 'resgate',
    title: 'Modernização e Resgate de Legados',
    description: 'Engenharia reversa cirúrgica com testes de caracterização prévios e Strangler Pattern para modernizar sistemas críticos sem riscos de regressão.',
    icon: 'autorenew',
    tier: 'legacy-repair',
    ctaLabel: 'Modernizar Sistema',
  },
] as const

export const FAQ_DB: readonly FAQItem[] = [
  {
    question: 'O que é a Metodologia STE-DEV?',
    answer: 'A STE-DEV é uma metodologia de Engenharia de Software Preventiva criada e adotada pela Omni Sistemas, fundamentada nas normas aeroespaciais da ASD-STE100. Ela opera em duas frentes complementares: (1) DEV (Desenvolvimento Preventivo) — impede na origem a geração de código que exija refatoração posterior, através de módulos atômicos (< 100 linhas), vocabulário controlado e tipagem estrita; e (2) Engenharia Reversa para Auditorias — protocolo de inspeção rigorosa para diagnosticar, auditar e modernizar com segurança sistemas legados ou em produção.',
  },
  {
    question: 'Existe um guardião ativo de IA na metodologia?',
    answer: 'Não. Não existe guardião ativo de IA operando como bot ou interceptador autônomo. A STE-DEV é um padrão de engenharia preventiva e governança técnica executado pelos engenheiros da Omni Sistemas, estabelecendo premissas determinísticas, invariantes de arquitetura e protocolos de auditoria sem margem para ambiguidade.',
  },
  {
    question: 'Como funciona o processo de Engenharia Reversa e Auditoria?',
    answer: 'A auditoria segue um protocolo formal em 4 etapas: (1) Ingestão e Varredura Sistemática do código existente; (2) Diagnóstico Baseado em Evidências com Resumo Executivo e Inventário Detalhado (arquivo:linha e causa raiz); (3) Matriz de Sequência Atômica — testes de caracterização prévios, isolamento de tipos/DTOs, extração de hooks, modularização de UI e limpeza semântica; (4) Padronização Contínua para que as próximas evoluções sigam o padrão preventivo.',
  },
  {
    question: 'Quanto tempo dura uma auditoria de código?',
    answer: 'A auditoria de código Omni Sistemas é entregue em até 5 dias úteis, com relatório completo de conformidade contendo métricas, inventário de violações e plano de remediação detalhado.',
  },
  {
    question: 'Como é feita a modernização de sistemas legados?',
    answer: 'A modernização de sistemas legados é realizada via Engenharia Reversa com Strangler Pattern: primeiro realizamos o Discovery de domínio unificando termos; em seguida criamos Testes de Caracterização para blindar o comportamento atual contra regressões; e finalmente extraímos a lógica em hooks e subcomponentes modulares com substituição progressiva e segura.',
  },
  {
    question: 'Quais tecnologias a Omni Sistemas utiliza?',
    answer: 'Trabalhamos no desenvolvimento e atualização de softwares em qualquer setor com React, TypeScript, PostgreSQL, Node.js, Next.js, Rust, WASM, Kafka, Docker, Tailwind e outras tecnologias modernas, sempre respeitando Clean Architecture e SOLID.',
  },
  {
    question: 'Qual é o princípio fundamental da Engenharia Preventiva?',
    answer: 'O princípio fundamental é: se o arquivo exigir refatoração posterior, ele não deve ser gerado dessa forma. A refatoração no destino é a prova cabal de uma falha de geração na origem. Desenvolvemos com modularidade atômica, tipagem forte e vocabulário sem ambiguidades desde o primeiro commit.',
  },
  {
    question: 'Como iniciar um projeto ou auditoria com a Omni Sistemas?',
    answer: 'Conte sobre seu desafio técnico. Damos retorno em até 24 horas úteis com parecer preliminar ou proposta técnica para desenvolvimento novo (DEV) ou auditoria de conformidade.',
  },
] as const