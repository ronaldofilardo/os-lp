import { describe, it, expect, vi, beforeEach } from 'vitest'
import {
  mapDbRowToOmniSaudeLeadRecord,
  insertOmniSaudeLeadRecord,
} from './omniSaudeLeadRepository'
import * as dbPoolModule from '@/lib/dbPool'
import type { OmniSaudeLeadDbRow, OmniSaudeLeadInput } from './omniSaudeLeadTypes'

describe('omniSaudeLeadRepository', () => {
  const sampleDate = new Date('2026-10-13T10:00:00Z')

  const sampleDbRow: OmniSaudeLeadDbRow = {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    full_name: 'Dra. Patrícia Lima',
    institution_name: 'Laboratório Vida & Saúde',
    email: 'patricia@labvida.com.br',
    whatsapp: '(41) 98888-7777',
    role: 'Diretora Médica',
    monthly_volume: '3.000 a 5.000',
    message: 'Precisamos automatizar a entrega de laudos via WhatsApp e celular.',
    lgpd_consent: true,
    lgpd_consent_at: sampleDate,
    status: 'novo',
    source: 'omni_saude_para_labs',
    ip_address: '10.0.0.1',
    user_agent: 'Vitest Test Agent',
    created_at: sampleDate,
    updated_at: sampleDate,
  }

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('maps snake_case database row to camelCase domain record', () => {
    const record = mapDbRowToOmniSaudeLeadRecord(sampleDbRow)
    expect(record.id).toBe(sampleDbRow.id)
    expect(record.fullName).toBe('Dra. Patrícia Lima')
    expect(record.email).toBe('patricia@labvida.com.br')
    expect(record.phone).toBe('(41) 98888-7777')
    expect(record.whatsapp).toBe('(41) 98888-7777')
    expect(record.company).toBe('Laboratório Vida & Saúde')
    expect(record.institutionName).toBe('Laboratório Vida & Saúde')
    expect(record.role).toBe('Diretora Médica')
    expect(record.volume).toBe('3.000 a 5.000')
    expect(record.monthlyVolume).toBe('3.000 a 5.000')
    expect(record.message).toBe(sampleDbRow.message)
    expect(record.lgpdConsent).toBe(true)
    expect(record.status).toBe('novo')
    expect(record.source).toBe('omni_saude_para_labs')
    expect(record.ipAddress).toBe('10.0.0.1')
    expect(record.createdAt).toBe(sampleDate.toISOString())
  })

  it('inserts record into omni_saude_leads with parameterized query', async () => {
    const mockQuery = vi.fn().mockResolvedValue({
      rows: [sampleDbRow],
    })

    vi.spyOn(dbPoolModule, 'getDatabasePool').mockReturnValue({
      query: mockQuery,
    } as unknown as ReturnType<typeof dbPoolModule.getDatabasePool>)

    const input: OmniSaudeLeadInput = {
      fullName: 'Dra. Patrícia Lima',
      email: 'patricia@labvida.com.br',
      phone: '(41) 98888-7777',
      company: 'Laboratório Vida & Saúde',
      role: 'Diretora Médica',
      volume: '3.000 a 5.000',
      message: 'Precisamos automatizar a entrega de laudos via WhatsApp e celular.',
    }

    const saved = await insertOmniSaudeLeadRecord(input, {
      ipAddress: '10.0.0.1',
      userAgent: 'Vitest Test Agent',
    })

    expect(mockQuery).toHaveBeenCalledTimes(1)
    const [sql, params] = mockQuery.mock.calls[0] as [string, unknown[]]
    expect(sql).toContain('INSERT INTO omni_saude_leads')
    expect(sql).toContain('institution_name')
    expect(sql).toContain('whatsapp')
    expect(params[0]).toBe('Dra. Patrícia Lima')
    expect(params[1]).toBe('Laboratório Vida & Saúde')
    expect(params[2]).toBe('patricia@labvida.com.br')
    expect(params[3]).toBe('(41) 98888-7777')
    expect(saved.id).toBe(sampleDbRow.id)
  })
})
