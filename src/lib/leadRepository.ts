// Repositório de persistência de leads no PostgreSQL
// Metodologia STE-DEV — Módulo coeso (< 100 linhas), queries parametrizadas
import { getDatabasePool } from './dbPool'
import type { LeadDbRow, LeadInput, LeadMeta, LeadRecord } from './leadTypes'

export function mapDbRowToLeadRecord(row: LeadDbRow): LeadRecord {
  return {
    id: row.id,
    fullName: row.full_name,
    email: row.email,
    whatsapp: row.whatsapp,
    interestType: row.interest_type,
    message: row.message,
    lgpdConsent: row.lgpd_consent,
    lgpdConsentAt: row.lgpd_consent_at.toISOString(),
    status: row.status,
    source: row.source,
    ipAddress: row.ip_address,
    userAgent: row.user_agent,
    createdAt: row.created_at.toISOString(),
    updatedAt: row.updated_at.toISOString(),
  }
}

export async function insertLeadRecord(
  input: LeadInput,
  meta: LeadMeta = {}
): Promise<LeadRecord> {
  const pool = getDatabasePool()

  const query = `
    INSERT INTO leads (
      full_name,
      email,
      whatsapp,
      interest_type,
      message,
      lgpd_consent,
      lgpd_consent_at,
      status,
      source,
      ip_address,
      user_agent,
      created_at,
      updated_at
    ) VALUES (
      $1, $2, $3, $4, $5, $6, NOW(), 'novo', $7, $8, $9, NOW(), NOW()
    )
    RETURNING
      id, full_name, email, whatsapp, interest_type, message,
      lgpd_consent, lgpd_consent_at, status, source, ip_address,
      user_agent, created_at, updated_at
  `

  const values = [
    input.fullName,
    input.email,
    input.whatsapp,
    input.interestType,
    input.message,
    input.lgpdConsent,
    meta.source || 'landing_page',
    meta.ipAddress || null,
    meta.userAgent || null,
  ]

  const result = await pool.query<LeadDbRow>(query, values)
  const row = result.rows[0]

  if (!row) {
    throw new Error('Falha ao registrar lead no banco de dados.')
  }

  return mapDbRowToLeadRecord(row)
}
