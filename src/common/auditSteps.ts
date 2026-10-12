export interface AuditStep {
  readonly number: string
  readonly title: string
  readonly description: string
}

export const AUDIT_STEPS: readonly AuditStep[] = [
  { number: '01', title: 'Varredura Sistemática', description: 'Caça componentes > 100 linhas, lógica na UI e any.' },
  { number: '02', title: 'Diagnóstico por Evidências', description: 'Laudo com arquivo:linha, causa raiz e gravidade.' },
  { number: '03', title: 'Plano Atômico em 5 Passos', description: 'Testes, tipos, hooks, UI < 100 linhas e limpeza.' },
  { number: '04', title: 'Governança Permanente', description: 'O padrão preventivo vira regra para novas features.' },
] as const
