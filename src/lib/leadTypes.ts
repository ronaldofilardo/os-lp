// Contratos de tipos para Leads e persistência relacional
// Metodologia STE-DEV — Domínio Puro e Tipagem Estrita

export interface LeadInput {
  readonly fullName: string
  readonly email: string
  readonly whatsapp: string
  readonly interestType: string
  readonly message: string
  readonly lgpdConsent: boolean
}

export interface LeadMeta {
  readonly ipAddress?: string | null
  readonly userAgent?: string | null
  readonly source?: string
}

export interface LeadRecord extends LeadInput {
  readonly id: string
  readonly lgpdConsentAt: string
  readonly status: string
  readonly source: string
  readonly ipAddress: string | null
  readonly userAgent: string | null
  readonly createdAt: string
  readonly updatedAt: string
}

export interface LeadDbRow {
  id: string
  full_name: string
  email: string
  whatsapp: string
  interest_type: string
  message: string
  lgpd_consent: boolean
  lgpd_consent_at: Date
  status: string
  source: string
  ip_address: string | null
  user_agent: string | null
  created_at: Date
  updated_at: Date
}
