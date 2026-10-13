// Contratos de tipos para Leads do Omni Saúde
// Metodologia STE-DEV — Domínio Puro e Tipagem Estrita

export interface OmniSaudeLeadInput {
  readonly fullName: string
  readonly email: string
  readonly phone: string
  readonly company: string
  readonly role?: string | undefined
  readonly volume?: string | undefined
  readonly message?: string | undefined
}

export interface OmniSaudeLeadMeta {
  readonly ipAddress?: string | null | undefined
  readonly userAgent?: string | null | undefined
  readonly source?: string | undefined
}

export interface OmniSaudeLeadRecord extends OmniSaudeLeadInput {
  readonly id: string
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
  email: string
  phone: string
  company: string
  role: string | null
  volume: string | null
  message: string | null
  status: string
  source: string
  ip_address: string | null
  user_agent: string | null
  created_at: Date
  updated_at: Date
}
