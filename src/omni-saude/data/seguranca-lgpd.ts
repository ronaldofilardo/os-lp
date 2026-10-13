export interface SimpleCard {
  readonly title: string
  readonly description: string
  readonly icon: string
}

export interface DataLocationRow {
  readonly label: string
  readonly value: string
}

export const SEGURANCA_LGPD_SECTION = {
  title: 'LGPD na prática',
  description: 'Não é checkbox. É arquitetura.',
} as const

export const SEGURANCA_LGPD_CARDS: readonly SimpleCard[] = [
  { title: 'Política de retenção', description: '7 anos (conforme regulamentação)', icon: 'history' },
  { title: 'Portabilidade', description: 'Exportar tudo em formato aberto', icon: 'download' },
  { title: 'Exclusão', description: 'Apagar tudo, sem resíduo', icon: 'delete' },
  { title: 'DPO', description: 'Em processo de nomeação', icon: 'badge' },
] as const

export const SEGURANCA_IN_PROGRESS_SECTION = {
  title: 'Em processo',
  description: 'Não inventamos selos. O que ainda não temos, está em construção.',
} as const

export const SEGURANCA_IN_PROGRESS_CARDS: readonly SimpleCard[] = [
  {
    title: 'Certificação ISO 27001',
    description: 'Em processo de certificação. Não usamos selo antes de auditoria externa.',
    icon: 'verified_user',
  },
  {
    title: 'Auditoria externa anual',
    description: 'Relatório público com escopo, limitações e plano de remediação.',
    icon: 'fact_check',
  },
] as const

export const SEGURANCA_DATA_LOCATION = {
  title: 'Onde os dados ficam',
  description: 'A verdade, sem marketing de nuvem genérica.',
  rows: [
    { label: 'Provedor', value: 'AWS' },
    { label: 'Região', value: 'sa-east-1 (São Paulo)' },
    { label: 'Backup', value: 'diário + PITR de 35 dias' },
  ],
} as const

export const SEGURANCA_FINAL_CTA = {
  title: 'Segurança é o começo, não o fim.',
  description: 'O paciente é dono. O laboratório entrega. O médico só vê se for convidado.',
  primaryCta: { label: 'Para Laboratórios e Clínicas', href: '/omni-saude/para-labs' },
  secondaryCta: { label: 'Para Médicos', href: '/omni-saude/medicos' },
} as const
