import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { sendLeadNotification } from './leadNotifier'
import type { LeadRecord } from './leadTypes'

const sampleLead: LeadRecord = {
  id: 'b1234567-89ab-cdef-0123-456789abcdef',
  fullName: 'Ronaldo Filardo',
  email: 'ronaldofilardo@gmail.com',
  whatsapp: '(41) 99999-8888',
  interestType: 'conversar',
  message: 'Gostaria de entender melhor a automação.',
  lgpdConsent: true,
  lgpdConsentAt: '2026-10-12T20:00:00.000Z',
  status: 'novo',
  source: 'landing_page',
  ipAddress: '127.0.0.1',
  userAgent: 'TestBrowser/1.0',
  createdAt: '2026-10-12T20:00:00.000Z',
  updatedAt: '2026-10-12T20:00:00.000Z',
}

const mockSend = vi.fn()

vi.mock('resend', () => {
  return {
    Resend: class {
      emails = {
        send: mockSend,
      }
    },
  }
})

describe('leadNotifier', () => {
  const originalEnv = process.env

  beforeEach(() => {
    process.env = { ...originalEnv }
    mockSend.mockReset()
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('skips sending and returns success: false if RESEND_API_KEY is missing', async () => {
    delete process.env.RESEND_API_KEY

    const result = await sendLeadNotification(sampleLead)
    expect(result.success).toBe(false)
    expect(mockSend).not.toHaveBeenCalled()
  })

  it('returns success: true when Resend API sends email', async () => {
    process.env.RESEND_API_KEY = 're_test_dummy_key_123'
    mockSend.mockResolvedValue({
      data: { id: 'msg_123456' },
      error: null,
    })

    const result = await sendLeadNotification(sampleLead)
    expect(result.success).toBe(true)
    expect(result.messageId).toBe('msg_123456')
    expect(mockSend).toHaveBeenCalledWith(
      expect.objectContaining({
        to: ['ronaldofilardo@gmail.com'],
        subject: expect.stringContaining('Ronaldo Filardo'),
      })
    )
  })

  it('handles API error without throwing and returns success: false', async () => {
    process.env.RESEND_API_KEY = 're_test_dummy_key_123'
    mockSend.mockResolvedValue({
      data: null,
      error: { message: 'Invalid API key' },
    })

    const result = await sendLeadNotification(sampleLead)
    expect(result.success).toBe(false)
  })
})
