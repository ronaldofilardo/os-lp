import { OMNISAUDE_APP_LOGIN } from './navigation'

export interface FeatureWithList {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly bullets: readonly string[]
}

export interface UseCase {
  readonly title: string
  readonly description: string
}

export const PARA_VOCE_FEATURES_SECTION = {
  title: 'Funcionalidades que Facilitam sua Vida',
  description: 'Veja como o OmniSaúde pode facilitar sua rotina e organização de saúde',
} as const

export const PARA_VOCE_FEATURES: readonly FeatureWithList[] = [
  {
    title: 'Timeline de Saúde',
    description:
      'Visualize todos os seus documentos de saúde em ordem cronológica. Veja rapidamente a evolução de exames e acompanhe tratamentos.',
    icon: 'schedule',
    bullets: [
      'Visualização cronológica de todos os documentos',
      'Filtros por tipo de documento e período',
    ],
  },
  {
    title: 'Repositório de Arquivos',
    description:
      'Todos os seus documentos organizados e acessíveis. Laudos, receitas, atestados — tudo em um só lugar.',
    icon: 'folder',
    bullets: ['Organização automática por categoria', 'Busca rápida por texto ou data'],
  },
  {
    title: 'Gestão de Profissionais',
    description:
      'Mantenha um cadastro completo dos seus médicos e profissionais de saúde. Compartilhe seu histórico de forma seletiva.',
    icon: 'person',
    bullets: ['Compartilhamento seletivo de documentos'],
  },
] as const

export const PARA_VOCE_USE_CASES_SECTION = {
  title: 'Casos de Uso Reais',
  description: 'Veja como o OmniSaúde facilita situações do dia a dia',
} as const

export const PARA_VOCE_USE_CASES: readonly UseCase[] = [
  {
    title: 'Consulta com Novo Médico',
    description:
      'Compartilhe todo o seu histórico com o novo médico em segundos, direto pelo celular. Nada de esquecer documentos em casa.',
  },
  {
    title: 'Cuidando dos Pais',
    description:
      'Acompanhe a saúde dos seus pais à distância. Crie perfis para eles e tenha acesso a todos os exames e documentos.',
  },
  {
    title: 'Emergência',
    description:
      'Em uma situação de emergência, compartilhe rapidamente seu histórico médico e alergias com a equipe de atendimento.',
  },
  {
    title: 'Gestão de Tratamentos',
    description:
      'Fazendo um tratamento longo? Acompanhe a evolução dos exames ao longo do tempo e nunca perca prazos.',
  },
] as const

export const PARA_VOCE_FINAL_CTA = {
  title: 'Pronto para ter tudo em mãos?',
  description: 'É grátis, simples e você terá tudo em suas mãos em minutos',
  primaryCta: { label: 'Criar conta gratuita agora', href: OMNISAUDE_APP_LOGIN },
  secondaryCta: { label: 'Como os dados são protegidos', href: '/omni-saude/seguranca' },
} as const
