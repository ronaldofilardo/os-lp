import { SITE } from '@/config/site'
import { OMNISAUDE_APP_LOGIN } from './navigation'

export interface ContactAudienceCard {
  readonly tag: string
  readonly title: string
  readonly description: string
  readonly bullets: readonly string[]
  readonly ctaLabel: string
  readonly ctaHref: string
  readonly icon: string
  readonly tone: 'emerald' | 'sky'
}

export interface ContactChannel {
  readonly label: string
  readonly value: string
  readonly href: string
  readonly icon: string
}

export const CONTATO_HERO = {
  eyebrow: 'Atendimento & Suporte',
  title: 'Como podemos te ajudar?',
  description:
    'Seja você um paciente com dúvidas sobre exames ou uma empresa buscando integrar resultados, escolha o caminho ideal abaixo.',
} as const

export const CONTATO_AUDIENCE_CARDS: readonly ContactAudienceCard[] = [
  {
    tag: 'Para Pacientes',
    title: 'Sou Paciente ou Familiar',
    description:
      'Precisa de ajuda para acessar seus laudos, criar conta para dependentes ou entender a segurança dos seus dados?',
    bullets: [
      'Dúvidas sobre primeiro acesso e cadastro',
      'Gerenciamento de exames e receitas',
    ],
    ctaLabel: 'Ir para Cadastro / Acesso',
    ctaHref: OMNISAUDE_APP_LOGIN,
    icon: 'group',
    tone: 'emerald',
  },
  {
    tag: 'Para Laboratórios & Clínicas',
    title: 'Sou Emissor ou Clínica',
    description:
      'Quer integrar seu laboratório ou clínica ao OmniSaúde e modernizar a entrega de resultados aos seus pacientes?',
    bullets: [
      'Solicitar demonstração técnica e comercial',
      'Integração simples com seu LIS via API',
    ],
    ctaLabel: 'Ver Soluções para Laboratórios',
    ctaHref: '/omni-saude/para-labs',
    icon: 'domain',
    tone: 'sky',
  },
] as const

export const CONTATO_CHANNELS_SECTION = {
  title: 'Canais Diretos de Atendimento',
  description: 'Nossa equipe responde em até 24 horas úteis.',
} as const

export const CONTATO_CHANNELS: readonly ContactChannel[] = [
  {
    label: 'WhatsApp Oficial',
    value: SITE.whatsapp.display,
    href: SITE.whatsapp.url,
    icon: 'chat',
  },
  {
    label: 'E-mail Corporativo',
    value: 'contato@omnisaude.com.br',
    href: 'mailto:contato@omnisaude.com.br',
    icon: 'mail',
  },
] as const

export const CONTATO_HOURS =
  'Horário de Atendimento: Segunda a Sexta, das 08h às 18h'
