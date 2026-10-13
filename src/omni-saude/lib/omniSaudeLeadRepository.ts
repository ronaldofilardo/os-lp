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
    phone: row.phone,
    company: row.company,
    role: row.role ?? undefined,
    volume: row.volume ?? undefined,
    message: row.message ?? undefined,
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

  const query = `
    INSERT INTO omni_saude_leads (
      full_name,
      email,
      phone,
      company,
      role,
      volume,
      message,
      status,
      source,
      ip_address,
      user_agent
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
    RETURNING *;
  `

  const values = [
    input.fullName.trim(),
    input.email.trim().toLowerCase(),
    input.phone.trim(),
    input.company.trim(),
    input.role?.trim() || null,
    input.volume?.trim() || null,
    input.message?.trim() || null,
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
