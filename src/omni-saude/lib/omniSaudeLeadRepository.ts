// Repositório de persistência de leads do Omni Saúde no PostgreSQL
// Metodologia STE-DEV — Módulo coeso (< 100 linhas), queries parametrizadas
import { getDatabasePool } from '@/lib/dbPool'
import type {
  OmniSaudeLeadDbRow,
  OmniSaudeLeadInput,
  OmniSaudeLeadMeta,
  OmniSaudeLeadRecord,
} from './omniSaudeLeadTypes'

export function mapDbRowToOmniSaudeLeadRecord(row: OmniSaudeLeadDbRow): OmniSaudeLeadRecord {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    phone: row.whatsapp,
    whatsapp: row.whatsapp,
    company: row.institution_name,
    institutionName: row.institution_name,
    role: row.role ?? undefined,
    volume: row.monthly_volume ?? undefined,
    monthlyVolume: row.monthly_volume ?? undefined,
    message: row.message ?? undefined,
    lgpdConsent: row.lgpd_consent,
    status: row.status,
    source: row.source,
    ipAddress: row.ip_address,
    userAgent: row.user_agent,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  }
}

export async function insertOmniSaudeLeadRecord(
  input: OmniSaudeLeadInput,
  meta: OmniSaudeLeadMeta = {}
): Promise<OmniSaudeLeadRecord> {
  const pool = getDatabasePool()
  const resolvedPhone = (input.whatsapp || input.phone || '').trim()
  const resolvedCompany = (input.institutionName || input.company || '').trim()
  const resolvedVolume = (input.monthlyVolume || input.volume || '').trim() || null

  const query = `
    INSERT INTO omni_saude_leads (
      full_name,
      institution_name,
      email,
      whatsapp,
      role,
      monthly_volume,
      message,
      lgpd_consent,
      status,
      source,
      ip_address,
      user_agent
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)
    RETURNING *;
  `

  const values = [
    input.fullName.trim(),
    resolvedCompany,
    input.email.trim().toLowerCase(),
    resolvedPhone,
    input.role?.trim() || null,
    resolvedVolume,
    input.message?.trim() || null,
    input.lgpdConsent ?? true,
    'novo',
    meta.source || 'omni_saude_para_labs',
    meta.ipAddress || null,
    meta.userAgent || null,
  ]

  const result = await pool.query<OmniSaudeLeadDbRow>(query, values)
  const savedRow = result.rows[0]
  if (!savedRow) {
    throw new Error('Falha ao persistir lead do Omni Saúde: nenhuma linha retornada.')
  }

  return mapDbRowToOmniSaudeLeadRecord(savedRow)
}
