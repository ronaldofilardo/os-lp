export interface PillarItem {
  readonly number: string
  readonly icon: string
  readonly title: string
  readonly description: string
  readonly rule: string
}

export const PILLARS: readonly PillarItem[] = [
  {
    number: '01',
    icon: 'spellcheck',
    title: 'Semântica ASD-STE100',
    description: 'Um conceito, um nome. Sem termos vagos como handle ou utils.',
    rule: 'Vocabulário controlado',
  },
  {
    number: '02',
    icon: 'layers',
    title: 'Arquitetura Limpa & SOLID',
    description: 'Camadas desacopladas, com dependências sempre apontando para o domínio.',
    rule: 'DB-Row ≠ DTO',
  },
  {
    number: '03',
    icon: 'rule',
    title: 'Desenvolvimento Preventivo',
    description: 'Máximo de 100 linhas por arquivo, zero-any e try/catch em todo I/O.',
    rule: 'Refatorar depois = falha na origem',
  },
  {
    number: '04',
    icon: 'troubleshoot',
    title: 'Engenharia Reversa & Auditoria',
    description: 'Inventário de violações por linha e plano atômico em 5 passos.',
    rule: 'Strangler Pattern, sem regressão',
  },
] as const
