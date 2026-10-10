export type Sector = 'FinTech' | 'HealthTech' | 'Enterprise' | 'Infra' | 'SportTech' | 'Marketing'
export type ProjectStatus = 'production' | 'in-dev'
export type ServiceTier = 'recommended' | 'standard' | 'legacy-repair'

export interface ProjectRow {
  readonly id: string
  readonly name: string
  readonly sector: Sector
  readonly status: ProjectStatus
  readonly objective: string
  readonly audience: string
  readonly techInfo: string
  readonly techStack: readonly string[]
  readonly imageUrl: string
}

export interface ProjectDTO {
  readonly id: string
  readonly displayName: string
  readonly sectorLabel: string
  readonly sectorColor: 'primary' | 'secondary' | 'tertiary'
  readonly statusLabel: string
  readonly statusVariant: 'production' | 'in-dev'
  readonly summary: string
  readonly techTags: readonly string[]
  readonly thumbnail: string
}

export interface ServiceRow {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly tier: ServiceTier
  readonly ctaLabel: string
}

export interface ServiceDTO {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly tier: ServiceTier
  readonly ctaLabel: string
  readonly isHighlighted: boolean
}

export interface AuditViolation {
  readonly code: string
  readonly criterion: string
  readonly file: string
  readonly line: number
  readonly message: string
}

export interface AuditResult {
  readonly score: number
  readonly violations: readonly AuditViolation[]
  readonly passed: readonly string[]
}

export interface ContactFormData {
  readonly fullName: string
  readonly email: string
  readonly interestType: 'auditoria' | 'desenvolvimento' | 'resgate' | 'outro'
  readonly message: string
}

export interface FAQItem {
  readonly question: string
  readonly answer: string
}

export const SECTOR_CONFIG: Record<Sector, { label: string; color: ProjectDTO['sectorColor'] }> = {
  FinTech: { label: 'FinTech', color: 'primary' },
  HealthTech: { label: 'HealthTech', color: 'secondary' },
  Enterprise: { label: 'Enterprise', color: 'primary' },
  Infra: { label: 'Infra', color: 'primary' },
  SportTech: { label: 'SportTech', color: 'tertiary' },
  Marketing: { label: 'Marketing', color: 'secondary' },
} as const

export const STATUS_CONFIG: Record<ProjectStatus, { label: string; variant: ProjectDTO['statusVariant'] }> = {
  production: { label: 'PRODUÇÃO', variant: 'production' },
  'in-dev': { label: 'EM DEV', variant: 'in-dev' },
} as const

export const SERVICE_TIER_CONFIG: Record<ServiceTier, { label: string; isHighlighted: boolean }> = {
  recommended: { label: '★ RECOMENDADO', isHighlighted: true },
  standard: { label: 'SQUAD REDUZIDO', isHighlighted: false },
  'legacy-repair': { label: 'LEGACY REPAIR', isHighlighted: false },
} as const