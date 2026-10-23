export const SITE = {
  name: 'Omni Sistemas',
  tagline: 'Sistemas Sob Medida & Automação Inteligente',
  domain: 'https://omni-sistemas.com',
  baseUrl: 'https://omni-sistemas.com',
  description:
    'Sistemas sob medida, integração com Asaas e modernização de legados para empresas que precisam automatizar processos críticos. Orçamento sem compromisso.',
  shortDescription:
    'Softhouse que cria sistemas sob medida, automatiza cobranças e integra plataformas — com atendimento direto de quem projeta e conformidade com a LGPD.',
  ogImage: 'https://omni-sistemas.com/og-image.png',
  logo: 'https://omni-sistemas.com/logo.png',
  lang: 'pt-BR',
  email: 'suporte@omni-sistema.com',
  whatsapp: {
    display: '(41) 99241-5220',
    international: '+5541992415220',
    url: 'https://wa.me/5541992415220',
  } as const,
  apps: {
    omniSaude: {
      url: 'https://saude.omni-sistemas.com',
      login: '/login',
    } as const,
  } as const,
  foundingDate: '1997',
  founder: {
    name: 'Ronaldo Domingues Filardo',
    jobTitle: 'Fundador & Arquiteto de Software Corporativo',
    description:
      'Ex-Professor Universitário [graduação e especialização] da Pontifícia Universidade Católica do Paraná de Metodologia de Pesquisa, autor do livro acadêmico de Metodologia Científica e criador da metodologia STE-DEV.',
    alumniOf: {
      name: 'Pontifícia Universidade Católica do Paraná',
      type: 'CollegeOrUniversity',
    },
  },
  keywords: [
    'sistema sob medida',
    'desenvolvimento de software para empresas',
    'integração via API',
    'integração Asaas',
    'automação de cobranças',
    'modernização de sistemas legados',
    'software personalizado',
    'LGPD',
    'softhouse Brasil',
    'engenharia de software',
    'metodologia STE-DEV',
    'auditoria de código',
    'softhouse 1997',
  ],
  sameAs: [
    'http://lattes.cnpq.br/1847440727366032',
    'https://livrariaintersaberes.com.br/produto/metodologia-de-pesquisa-cientifica-fundamentos-principios-e-processos/',
  ] as readonly string[],
  knowsAbout: [
    'Desenvolvimento de Sistemas Sob Medida',
    'Integrações via API e Automação de Cobranças',
    'Modernização de Sistemas Legados',
    'Conformidade com a LGPD',
    'Engenharia de Software Preventiva',
    'Metodologia STE-DEV',
    'Norma Aeroespacial ASD-STE100',
    'Clean Architecture e SOLID',
    'Engenharia Reversa para Auditorias',
    'Strangler Pattern',
  ],
} as const
