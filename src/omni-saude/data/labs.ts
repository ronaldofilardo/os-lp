export interface ProblemCard {
  readonly title: string
  readonly description: string
  readonly icon: string
}

export interface StepCard {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description?: string
}

export const LABS_HERO = {
  title: 'Integre uma vez. O paciente recebe na hora.',
  description:
    'Menos ligação perguntando "tá pronto?". Menos paciente que some. Você libera, o Omni entrega — direto no celular, sem esforço do paciente.',
  primaryCta: { label: 'Quero integrar meu laboratório', href: '#solicitar-demo' },
  secondaryCta: { label: 'Ver documentação técnica', href: '#integration' },
} as const

export const LABS_PROBLEM_SECTION = {
  title: 'O problema que resolvemos',
  description: 'Três dores que todo laboratório e clínica conhece de perto.',
} as const

export const LABS_PROBLEMS: readonly ProblemCard[] = [
  {
    title: 'O paciente liga perguntando se o exame ficou pronto',
    description: 'Ligações que tomam tempo da recepção, repetidas ao longo do dia.',
    icon: 'call',
  },
  {
    title: 'Ele perde o resultado em e-mail antigo, portal, pasta do HD',
    description: 'Fragmentado e fora do controle do paciente — e do laboratório.',
    icon: 'mail',
  },
  {
    title: 'Vocês ligam pra avisar, mas nem todo mundo atende',
    description: 'Follow-up manual caro e com taxa de resposta baixa.',
    icon: 'notifications',
  },
] as const

export const LABS_STEPS_SECTION = {
  title: 'Como funciona',
  description: 'Três passos. Do seu sistema diretamente para o paciente.',
} as const

export const LABS_STEPS: readonly StepCard[] = [
  { number: '1', label: 'Passo', title: 'Laboratório libera o laudo pelo seu sistema' },
  { number: '2', label: 'Passo', title: 'O resultado chega direto no Omni do paciente (push)' },
  { number: '3', label: 'Passo', title: 'Paciente guarda, decide quem vê' },
] as const
