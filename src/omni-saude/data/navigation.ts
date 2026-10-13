import type { NavLink } from '@/common/navLinks'
import { SITE } from '@/config/site'

export const OMNISAUDE_APP_LOGIN = `${SITE.apps.omniSaude.url}${SITE.apps.omniSaude.login}`

export const OMNISAUDE_FOOTER_ANCHORS: readonly NavLink[] = [
  { href: '/omni-saude/para-voce', label: 'Para Você' },
  { href: '/omni-saude/para-labs', label: 'Laboratórios e Clínicas' },
  { href: '/omni-saude/medicos', label: 'Médicos' },
  { href: '/omni-saude/seguranca', label: 'Segurança' },
  { href: '/omni-saude/contato', label: 'Contato' },
] as const

export const OMNISAUDE_LEGAL_LINKS: readonly NavLink[] = [
  { href: '/omni-saude/termos-de-uso.pdf', label: 'Termos de Uso' },
  { href: '/omni-saude/politica-de-privacidade.pdf', label: 'Política de Privacidade' },
] as const
