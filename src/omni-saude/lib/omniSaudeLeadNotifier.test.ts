import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { sendOmniSaudeLeadNotification } from './omniSaudeLeadNotifier'
import type { OmniSaudeLeadRecord } from './omniSaudeLeadTypes'

describe('omniSaudeLeadNotifier', () => {
  const originalEnv = { ...process.env }

  const sampleLead: OmniSaudeLeadRecord = {
    id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
    fullName: 'Dra. Patrícia Lima',
    email: 'patricia@labvida.com.br',
    phone: '(41) 98888-7777',
    company: 'Laboratório Vida & Saúde',
    role: 'Diretora Médica',
    volume: '3.000 a 5.000',
    message: 'Gostaria de agendar demo.',
    status: 'novo',
    source: 'omni_saude_para_labs',
    ipAddress: '10.0.0.1',
    userAgent: 'Vitest Test Agent',
    createdAt: '2026-10-13T10:00:00.000Z',
    updatedAt: '2026-10-13T10:00:00.000Z',
  }

  beforeEach(() => {
    vi.restoreAllMocks()
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('skips sending and returns false if RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY
    const result = await sendOmniSaudeLeadNotification(sampleLead)
    expect(result.success).toBe(false)
  })

  it('handles API error without throwing and returns false', async () => {
    process.env.RESEND_API_KEY = 'invalid-key'
    const result = await sendOmniSaudeLeadNotification(sampleLead)
    expect(result.success).toBe(false)
  })
})
