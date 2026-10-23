import type { FAQItem, ProjectRow, ServiceRow } from '@/types'

export const PROJECTS_DB: readonly ProjectRow[] = [
  {
    id: 'mundoas',
    name: 'mundoas',
    sector: 'Infra',
    status: 'production',
    objective: 'Motor de Fechamento & Conciliação: acelerou o fechamento de comissões de dias para minutos, eliminando 100% das disputas de cálculo.',
    audience: 'Operações corporativas de saúde, redes credenciadas e equipes comerciais de alta performance.',
    techInfo: 'Consolidação automatizada de regras financeiras e auditoria contínua de contratos em tempo real.',
    techStack: ['Next.js', 'Redis', 'Tailwind'],
    logo: '/LOGO-ACESSO.webp',
    url: 'https://mundoas.acessosaude.com.br/',
  },
  {
    id: 'omni-saude-app',
    name: 'Omni Saúde App',
    sector: 'HealthTech',
    status: 'production',
    objective: 'Emissão ágil e segura de laudos laboratoriais com zero vazamento de dados e conformidade sanitária/LGPD nativa.',
    audience: 'Laboratórios de análises clínicas, operadoras de saúde, médicos e pacientes.',
    techInfo: 'Anonimização de ponta a ponta, logs imutáveis e portal com entrega instantânea de exames.',
    techStack: ['Next.js 14', 'TypeScript', 'PostgreSQL', 'ASD-STE100'],
    logo: '/logo-Saude-peq.webp',
    url: 'https://saude.omni-sistemas.com',
  },
  {
    id: 'omni-saude-lp',
    name: 'Omni Saúde LP',
    sector: 'Marketing',
    status: 'production',
    objective: 'Site institucional e comercial de conversão para a plataforma Omni Saúde, com posicionamento de autoridade e captação de leads.',
    audience: 'Laboratórios, clínicas, médicos e tomadores de decisão em saúde.',
    techInfo: 'Landing page rápida de alta conversão, otimizada para SEO técnico e conformidade com a LGPD.',
    techStack: ['Next.js 14', 'Tailwind', 'TypeScript', 'SEO'],
    logo: '/logo-Saude-peq.webp',
    url: '/omni-saude',
  },
  {
    id: 'lwos',
    name: 'LWOS',
    sector: 'Enterprise',
    status: 'in-dev',
    objective: 'Plataforma de Wealth Management e gestão patrimonial para famílias de alto patrimônio com segurança padrão bancário.',
    audience: 'Famílias de alto patrimônio, family offices e escritórios de investimento.',
    techInfo: 'Arquitetura de alto desempenho em Rust e WASM com triagem sigilosa e proteção Zero-Trust.',
    techStack: ['Rust', 'WASM', 'Go', 'OTel'],
    logo: '/logo-lwos.webp',
    video: '/lwos-logo-anima.mp4',
  },
  {
    id: 'qwork',
    name: 'QWork',
    sector: 'Enterprise',
    status: 'production',
    objective: 'Riscos Psicossociais & NR-1: emissão automatizada de laudos em até 24h com metodologia científica COPSOQ III e blindagem jurídica.',
    audience: 'Clínicas de SST, médicos do trabalho, consultorias e gestores de RH corporativo.',
    techInfo: 'Cadeia de custódia com hash SHA-256 e avaliações anônimas para 100% de conformidade trabalhista e LGPD.',
    techStack: ['Node.js', 'Kafka', 'Clean Arch', 'Zero-Any'],
    logo: '/logo-QWork.webp',
    video: '/qwork-croche-logo.mp4',
    url: 'https://sistema.qwork.app.br',
  },
  {
    id: 'qwork-lp',
    name: 'QWork LP',
    sector: 'Marketing',
    status: 'production',
    objective: 'Site de marketing e vendas que gera demanda qualificada e converte visitantes em oportunidades.',
    audience: 'Departamentos de RH e profissionais de saúde.',
    techInfo: 'Landing page rápida, otimizada para SEO e preparada para funil de vendas.',
    techStack: ['Next.js', 'Tailwind', 'SEO'],
    logo: '/logo-QWork.webp',
    video: '/logo-QWORK.mp4',
    url: 'https://qwork.app.br',
  },
  {
    id: 'reporte',
    name: 'Reporte',
    sector: 'Enterprise',
    status: 'production',
    objective: 'Motor analítico corporativo: automação de relatórios e laudos gerenciais, reduzindo em até 80% o tempo manual de compilação.',
    audience: 'Conselhos diretivos, CFOs, analistas corporativos e comitês de governança.',
    techInfo: 'Consolidação de fontes heterogêneas sem trabalho manual de formatação e números auditáveis sob demanda.',
    techStack: ['TypeScript', 'Next.js', 'PostgreSQL', 'Clean Arch'],
    logo: '/logo-RPRT.webp',
  },
  {
    id: 'rkt',
    name: 'RKT',
    sector: 'SportTech',
    status: 'in-dev',
    objective: 'Gestão visual de rankings e ligas para atletas de raquete, federações e clubes.',
    audience: 'Atletas, federações e clubes de esportes de raquete.',
    techInfo: 'Competições organizadas, categorias claras e acompanhamento em tempo real.',
    techStack: ['TypeScript', 'EventStore', 'Docker'],
  },
  {
    id: 'aqui',
    name: 'AQUI',
    sector: 'FinTech',
    status: 'production',
    objective: 'Gestão ágil de metas e comissionamento de equipes comerciais com fechamento transparente e sem planilhas paralelas.',
    audience: 'Líderes comerciais, vendedores e gestores de metas financeiras.',
    techInfo: 'Metas acompanhadas em tempo real, gerando clareza e eliminando conflitos operacionais.',
    techStack: ['React', 'TypeScript', 'PostgreSQL', 'Tailwind'],
    logo: '/LOGO-ACESSO.webp',
    url: 'https://asaqui.acessosaude.com.br/',
  },
] as const

export const SERVICES_DB: readonly ServiceRow[] = [
  {
    id: 'dev-sob-medida',
    title: 'Plataforma Operacional Dedicada',
    description: 'Softwares e plataformas web sob medida para empresas que superaram o teto de ferramentas de prateleira — sem limite de licenças, modeladas exatamente nas regras do seu negócio.',
    icon: 'rocket_launch',
    tier: 'recommended',
    ctaLabel: 'Agendar Diagnóstico',
  },
  {
    id: 'integracoes',
    title: 'Motor de Automação & Eficiência Financeira',
    description: 'Conecte seu ecossistema a gateways (Asaas, bancos), ERPs e APIs críticas — eliminando dezenas de horas manuais em conferências, conciliações e fechamentos com erros.',
    icon: 'hub',
    tier: 'standard',
    ctaLabel: 'Falar sobre Automação',
  },
  {
    id: 'modernizacao',
    title: 'Migração Segura de Legados (Strangler Pattern)',
    description: 'Transição modular e contínua de sistemas antigos lentos ou instáveis para tecnologias modernas com zero interrupção na sua operação e faturamento diário.',
    icon: 'autorenew',
    tier: 'legacy-repair',
    ctaLabel: 'Modernizar Legado',
  },
] as const

export const FAQ_TECHNICAL_DB: readonly FAQItem[] = [
  {
    question: 'O que é a Metodologia STE-DEV?',
    answer: 'STE-DEV é o framework de engenharia preventiva da Omni Sistemas, baseado na norma aeroespacial ASD-STE100. Elimina dívida técnica na origem em duas frentes: desenvolvimento com módulos de menos de 100 linhas e auditoria com protocolo formal de quatro etapas para sistemas legados.',
  },
  {
    question: 'Quem é Ronaldo Domingues Filardo e qual a origem da Omni Sistemas?',
    answer: 'Ronaldo Domingues Filardo é o fundador da Omni Sistemas e criador da STE-DEV. Iniciou a trajetória em 1997 com o software ANTHROPO em VBA, acumulando mais de 30 anos de arquiteturas em saúde, finanças, esportes e blockchain, unindo rigor acadêmico à tecnologia de ponta.',
  },
  {
    question: 'Qual a relação entre a base acadêmica do fundador e a eficácia da STE-DEV?',
    answer: 'Ronaldo Filardo foi professor universitário [graduação e especialização] da Pontifícia Universidade Católica do Paraná de Metodologia de Pesquisa e autor pela Intersaberes. Essa base científica fundamenta a STE-DEV: semântica estrita conceitual, Clean Architecture como método reprodutível, testes como hipóteses e auditoria de invariantes como revisão por pares.',
  },
  {
    question: 'Como a experiência com Blockchain contribui para a segurança dos sistemas?',
    answer: 'A arquitetura da plataforma Better Use Blockchain deu à Omni Sistemas domínio prático de segurança criptográfica e mentalidade Zero-Trust. Em sistemas críticos como Omni Saúde, LWOS e QWork, isso vira proteção contra vazamento, isolamento DB-Row/DTO e conformidade estrita com a LGPD.',
  },
  {
    question: 'O que é ASD-STE100 e por que ela é aplicada ao código de software?',
    answer: 'ASD-STE100 é a norma de Inglês Técnico Simplificado criada pela indústria aeroespacial para eliminar ambiguidade em manuais de aeronaves. A STE-DEV a aplica ao software: cada conceito tem um único nome no projeto e termos vagos como handle, process e data são proibidos.',
  },
  {
    question: 'Por que a Omni Sistemas adota a regra de menos de 100 linhas por arquivo?',
    answer: 'Arquivos longos acumulam responsabilidades, misturando regras de negócio, API e tela. O teto de 100 linhas impõe alta coesão e baixo acoplamento: a UI permanece puramente descritiva e a orquestração vive em hooks isolados, testáveis e reutilizáveis sem efeitos colaterais.',
  },
  {
    question: 'Como funciona o processo de Engenharia Reversa e Auditoria STE-DEV?',
    answer: 'A auditoria STE-DEV é executada em quatro etapas estruturadas: varredura sistemática do repositório para mapear violações, diagnóstico com laudo executivo e inventário por arquivo:linha, matriz de remediação atômica com testes de caracterização prévios, e governança permanente dos módulos extraídos em produção.',
  },
  {
    question: 'Como é feita a modernização de legados sem risco de regressão?',
    answer: 'A modernização usa Strangler Pattern com testes de caracterização: antes de alterar qualquer linha do legado, criamos testes que blindam o comportamento operacional vigente. Em seguida, os módulos são extraídos cirurgicamente em serviços e componentes atômicos desacoplados, sem interromper a operação.',
  },
  {
    question: 'Quanto tempo dura uma auditoria de código e qual o formato de entrega?',
    answer: 'A auditoria completa é entregue em até 5 dias úteis. O cliente recebe um Laudo de Conformidade com resumo executivo das métricas, inventário detalhado de dívida técnica com causa raiz e plano de ação atômico e sequencial para refatoração segura.',
  },
  {
    question: 'Qual é o princípio fundamental da Engenharia Preventiva?',
    answer: 'Se o arquivo exigir refatoração posterior, ele não deve ser gerado dessa forma: refatorar no destino prova falha de geração na origem. Por isso desenvolvemos com tipagem forte zero-any, arquitetura limpa e vocabulário controlado desde o primeiro commit do projeto.',
  },
  {
    question: 'Como iniciar um projeto ou auditoria com a Omni Sistemas?',
    answer: 'Entre em contato pelo formulário ou pelo WhatsApp (41) 99241-5220. Analisamos a demanda técnica e retornamos em até 24 horas úteis com parecer técnico preliminar ou proposta comercial, sempre em atendimento direto do arquiteto responsável, sem intermediários e sem compromisso comercial.',
  },
] as const

export const FAQ_COMMERCIAL_DB: readonly FAQItem[] = [
  {
    question: 'Como funciona o primeiro contato e a proposta de orçamento?',
    answer: 'Você entra em contato pelo formulário ou WhatsApp e agendamos uma conversa sem compromisso. Mapeamos sua necessidade, entendemos o fluxo da operação e apresentamos uma proposta clara com escopo, prazos e investimento. O retorno acontece em até 24 horas úteis.',
  },
  {
    question: 'Vocês conseguem integrar o sistema com o Asaas ou outros bancos e plataformas?',
    answer: 'Sim. Desenvolvemos integrações via API com o Asaas e outras plataformas de pagamento, bancos, ERPs e ferramentas do seu dia a dia. Automatizamos cobranças, notificações e conciliação para eliminar o trabalho manual da sua equipe financeira e reduzir a inadimplência.',
  },
  {
    question: 'Tenho um sistema antigo na minha empresa. É possível modernizá-lo sem parar o negócio?',
    answer: 'Sim. Aplicamos a técnica Strangler Pattern: criamos testes que blindam o comportamento atual do sistema e extraímos módulos aos poucos, sem interromper a operação. Sua equipe continua trabalhando normalmente enquanto o sistema é modernizado em etapas seguras e totalmente controladas.',
  },
  {
    question: 'Como a Omni Sistemas garante a proteção dos dados e a conformidade com a LGPD?',
    answer: 'Tratamos a LGPD como requisito desde o primeiro dia. Aplicamos controle de acesso rigoroso, criptografia, isolamento de dados sensíveis e boas práticas de segurança da informação. Cada sistema é desenhado para proteger as informações dos seus clientes e do seu negócio.',
  },
  {
    question: 'Preciso entender de programação para acompanhar o projeto?',
    answer: 'Não. Nosso processo foi desenhado para gestores e empresários. Apresentamos o andamento em linguagem simples, com reuniões periódicas de validação. Você participa das decisões de negócio e acompanha cada etapa sem precisar de nenhum conhecimento técnico ou jargão de programação.',
  },
  {
    question: 'Vocês oferecem suporte após a entrega do sistema?',
    answer: 'Sim. Após a entrega, colocamos o sistema em operação assistida com treinamento da sua equipe e acompanhamento contínuo. Oferecemos suporte técnico para ajustes, correções e evoluções conforme sua operação cresce. Você conta com atendimento direto de quem conhece o projeto.',
  },
  {
    question: 'Por que investir em um sistema sob medida em vez de um software de prateleira?',
    answer: 'Software pronto atende o mercado médio, mas força sua empresa a se adaptar às limitações do programa. Um sistema sob medida se molda aos seus processos reais, elimina gargalos específicos e cresce junto com o negócio, gerando mais eficiência e competitividade.',
  },
] as const