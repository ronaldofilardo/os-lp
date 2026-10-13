// Contratos de tipos para Leads do Omni Saúde
// Metodologia STE-DEV — Domínio Puro e Tipagem Estrita

export interface OmniSaudeLeadInput {
  readonly fullName: string
  readonly email: string
  readonly phone?: string | undefined
  readonly whatsapp?: string | undefined
  readonly company?: string | undefined
  readonly institutionName?: string | undefined
  readonly role?: string | undefined
  readonly volume?: string | undefined
  readonly monthlyVolume?: string | undefined
  readonly message?: string | undefined
  readonly lgpdConsent?: boolean | undefined
}

export interface OmniSaudeLeadMeta {
  readonly ipAddress?: string | null | undefined
  readonly userAgent?: string | null | undefined
  readonly source?: string | undefined
}

export interface OmniSaudeLeadRecord {
  readonly id: string
  readonly fullName: string
  readonly email: string
  readonly phone: string
  readonly whatsapp: string
  readonly company: string
  readonly institutionName: string
  readonly role?: string | undefined
  readonly volume?: string | undefined
  readonly monthlyVolume?: string | undefined
  readonly message?: string | undefined
  readonly lgpdConsent: boolean
  readonly status: string
  readonly source: string
  readonly ipAddress: string | null
  readonly userAgent: string | null
  readonly createdAt: string
  readonly updatedAt: string
}

export interface OmniSaudeLeadDbRow {
  id: string
  full_name: string
  institution_name: string
  email: string
  whatsapp: string
  role: string | null
  monthly_volume: string | null
  message: string | null
  lgpd_consent: boolean
  lgpd_consent_at: Date
  status: string
  source: string
  ip_address: string | null
  user_agent: string | null
  created_at: Date
  updated_at: Date
}
