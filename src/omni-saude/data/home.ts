import { OMNISAUDE_APP_LOGIN } from './navigation'

export interface AudienceCard {
  readonly tag: string
  readonly title: string
  readonly description: string
  readonly bullets: readonly string[]
  readonly ctaLabel: string
  readonly ctaHref: string
  readonly icon: string
  readonly tone: 'emerald' | 'sky'
}

export const HOME_HERO = {
  eyebrow: 'Sua saúde organizada em um só lugar',
  titleLead: 'Seus exames, laudos e receitas',
  titleHighlight: 'no seu celular.',
  description:
    'Chega de papéis amassados, portais com senhas esquecidas ou exames perdidos na gaveta. Receba tudo direto do laboratório e compartilhe com seu médico em segundos.',
  checks: [
    'Histórico unificado para toda a sua família',
    'Proteção máxima de dados (LGPD + Criptografia)',
  ],
  primaryCta: { label: 'Criar minha conta grátis', href: OMNISAUDE_APP_LOGIN },
  secondaryCta: { label: 'Sou Laboratório ou Clínica', href: '/omni-saude/para-labs' },
  socialProof: 'Usado por pacientes e médicos para facilitar consultas e diagnósticos.',
  socialProofInitials: ['DR', 'MS', 'JS'],
  image: {
    src: '/omni-saude/hero_app_mockup.webp',
    alt: 'Aplicativo OmniSaúde no celular mostrando histórico de saúde organizado',
    width: 1024,
    height: 1024,
  },
  badge: { label: 'Privacidade Total', text: 'Você escolhe quem acessa' },
} as const

export const HOME_AUDIENCE_SECTION = {
  title: 'Feito para simplificar a vida de todos',
  description:
    'Quer você seja um paciente querendo organizar exames ou um laboratório buscando entregar laudos sem atrito.',
} as const

export const HOME_AUDIENCE_CARDS: readonly AudienceCard[] = [
  {
    tag: 'Para Pessoas & Famílias',
    title: 'Para Você e Sua Família',
    description:
      'Centralize os exames de sangue, laudos de imagem e receitas de toda a família. Acompanhe a evolução da sua saúde sem precisar guardar pilhas de papel.',
    bullets: [
      'Alertas automáticos assim que o laboratório libera o resultado',
      'Crie perfis para seus filhos ou pais idosos',
      'Compartilhe com médicos com links temporários seguros',
    ],
    ctaLabel: 'Ver detalhes para você',
    ctaHref: '/omni-saude/para-voce',
    icon: 'group',
    tone: 'emerald',
  },
  {
    tag: 'Para Laboratórios & Clínicas',
    title: 'Para Sua Empresa de Saúde',
    description:
      'Elimine chamadas na recepção perguntando se o laudo está pronto. Entregue resultados instantaneamente no celular do paciente com zero complicação técnica.',
    bullets: [
      'Integração simples com seu LIS ou sistema atual via API',
      'Redução drástica de custos com impressão e atendimento',
      'Fidelização e satisfação garantida do paciente',
    ],
    ctaLabel: 'Conhecer soluções para laboratórios',
    ctaHref: '/omni-saude/para-labs',
    icon: 'domain',
    tone: 'sky',
  },
] as const
