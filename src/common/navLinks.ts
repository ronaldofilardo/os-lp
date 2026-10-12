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
