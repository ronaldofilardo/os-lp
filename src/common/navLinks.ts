export interface NavLink {
  readonly href: string
  readonly label: string
}

export const NAV_LINKS: readonly NavLink[] = [
  { href: '#servicos', label: 'Soluções' },
  { href: '#como-trabalhamos', label: 'Como Trabalhamos' },
  { href: '#integracoes', label: 'Integrações' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#faq', label: 'Dúvidas' },
  { href: '#contato', label: 'Contato' },
  { href: '/metodologia', label: 'Metodologia' },
] as const

export const NAV_LINKS_METODOLOGIA: readonly NavLink[] = [
  { href: '#metodologia', label: 'Metodologia' },
  { href: '#auditoria-processo', label: 'Auditoria' },
  { href: '#asd-ste100', label: 'ASD-STE100' },
  { href: '#conformidade', label: 'Conformidade' },
  { href: '/#projetos', label: 'Projetos' },
  { href: '/artigos', label: 'Artigos' },
  { href: '/#contato', label: 'Contato' },
] as const

export const NAV_LINKS_OMNISAUDE: readonly NavLink[] = [
  { href: '/omni-saude', label: 'Omni Saúde' },
  { href: '/omni-saude/para-voce', label: 'Para Você' },
  { href: '/omni-saude/para-labs', label: 'Laboratórios e Clínicas' },
  { href: '/omni-saude/medicos', label: 'Médicos' },
  { href: '/omni-saude/seguranca', label: 'Segurança' },
  { href: '/omni-saude/contato', label: 'Contato' },
] as const
