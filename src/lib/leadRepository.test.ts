import { describe, it, expect, vi, beforeEach } from 'vitest'
import { mapDbRowToLeadRecord, insertLeadRecord } from './leadRepository'
import * as dbPoolModule from './dbPool'
import type { LeadDbRow, LeadInput } from './leadTypes'

describe('leadRepository', () => {
  const sampleDate = new Date('2026-10-12T20:00:00Z')

  const sampleDbRow: LeadDbRow = {
    id: 'a5713437-a5ec-4464-90ff-4e782d8471b0',
    full_name: 'Lucas Mendes',
    email: 'lucas@empresa.com.br',
    whatsapp: '(41) 99999-9999',
    interest_type: 'conversar',
    message: 'Gostaria de automatizar nossos processos de faturamento.',
    lgpd_consent: true,
    lgpd_consent_at: sampleDate,
    status: 'novo',
    source: 'landing_page',
    ip_address: '192.168.1.1',
    user_agent: 'Mozilla/5.0 Test Agent',
    created_at: sampleDate,
    updated_at: sampleDate,
  }

  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('maps database snake_case row to camelCase domain LeadRecord', () => {
    const record = mapDbRowToLeadRecord(sampleDbRow)

    expect(record.id).toBe(sampleDbRow.id)
    expect(record.fullName).toBe('Lucas Mendes')
    expect(record.email).toBe('lucas@empresa.com.br')
    expect(record.whatsapp).toBe('(41) 99999-9999')
    expect(record.interestType).toBe('conversar')
    expect(record.message).toBe(sampleDbRow.message)
    expect(record.lgpdConsent).toBe(true)
    expect(record.lgpdConsentAt).toBe(sampleDate.toISOString())
    expect(record.status).toBe('novo')
    expect(record.source).toBe('landing_page')
    expect(record.ipAddress).toBe('192.168.1.1')
    expect(record.userAgent).toBe('Mozilla/5.0 Test Agent')
    expect(record.createdAt).toBe(sampleDate.toISOString())
  })

  it('inserts lead record with parameterized query and returns mapped entity', async () => {
    const mockQuery = vi.fn().mockResolvedValue({
      rows: [sampleDbRow],
    })

    vi.spyOn(dbPoolModule, 'getDatabasePool').mockReturnValue({
      query: mockQuery,
    } as unknown as ReturnType<typeof dbPoolModule.getDatabasePool>)

    const input: LeadInput = {
      fullName: 'Lucas Mendes',
      email: 'lucas@empresa.com.br',
      whatsapp: '(41) 99999-9999',
      interestType: 'conversar',
      message: 'Gostaria de automatizar nossos processos de faturamento.',
      lgpdConsent: true,
    }

    const result = await insertLeadRecord(input, {
      ipAddress: '192.168.1.1',
      userAgent: 'Mozilla/5.0 Test Agent',
      source: 'landing_page',
    })

    expect(mockQuery).toHaveBeenCalledTimes(1)
    const [queryText, values] = mockQuery.mock.calls[0]
    expect(queryText).toContain('INSERT INTO leads')
    expect(values).toEqual([
      'Lucas Mendes',
      'lucas@empresa.com.br',
      '(41) 99999-9999',
      'conversar',
      'Gostaria de automatizar nossos processos de faturamento.',
      true,
      'landing_page',
      '192.168.1.1',
      'Mozilla/5.0 Test Agent',
    ])

    expect(result.id).toBe(sampleDbRow.id)
    expect(result.fullName).toBe('Lucas Mendes')
  })

  it('throws error when database returns empty row set', async () => {
    const mockQuery = vi.fn().mockResolvedValue({ rows: [] })
    vi.spyOn(dbPoolModule, 'getDatabasePool').mockReturnValue({
      query: mockQuery,
    } as unknown as ReturnType<typeof dbPoolModule.getDatabasePool>)

    const input: LeadInput = {
      fullName: 'Lucas Mendes',
      email: 'lucas@empresa.com.br',
      whatsapp: '(41) 99999-9999',
      interestType: 'conversar',
      message: 'Gostaria de automatizar.',
      lgpdConsent: true,
    }

    await expect(insertLeadRecord(input)).rejects.toThrow(
      'Falha ao registrar lead no banco de dados.'
    )
  })
})
