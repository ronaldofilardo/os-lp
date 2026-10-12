import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '../../app/api/leads/route'
import * as leadRepo from '@/lib/leadRepository'

describe('POST /api/leads route handler', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('rejects invalid JSON with 400', async () => {
    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: 'invalid-json{',
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
    const json = await response.json()
    expect(json.error).toBe('Corpo da requisição inválido.')
  })

  it('rejects validation failure with 400 and descriptive message', async () => {
    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'A', // too short
        email: 'invalid-email',
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
    const json = await response.json()
    expect(json.error).toBeDefined()
  })

  it('successfully persists lead and returns 201 with record id', async () => {
    const mockLead = {
      id: 'b1234567-89ab-cdef-0123-456789abcdef',
      fullName: 'Carlos Alberto',
      email: 'carlos@omni.com.br',
      whatsapp: '(41) 98888-7777',
      interestType: 'conversar',
      message: 'Preciso integrar meu ERP com o Asaas.',
      lgpdConsent: true,
      lgpdConsentAt: '2026-10-12T20:00:00.000Z',
      status: 'novo',
      source: 'landing_page',
      ipAddress: '200.100.50.25',
      userAgent: 'Mozilla/5.0',
      createdAt: '2026-10-12T20:00:00.000Z',
      updatedAt: '2026-10-12T20:00:00.000Z',
    }

    vi.spyOn(leadRepo, 'insertLeadRecord').mockResolvedValue(mockLead)

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'Carlos Alberto',
        email: 'carlos@omni.com.br',
        whatsapp: '(41) 98888-7777',
        interestType: 'conversar',
        message: 'Preciso integrar meu ERP com o Asaas.',
        lgpdConsent: true,
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '200.100.50.25, 10.0.0.1',
        'user-agent': 'Mozilla/5.0 Test Suite',
      },
    })

    const response = await POST(request)
    expect(response.status).toBe(201)
    const json = await response.json()
    expect(json.ok).toBe(true)
    expect(json.id).toBe(mockLead.id)

    expect(leadRepo.insertLeadRecord).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: 'Carlos Alberto',
        email: 'carlos@omni.com.br',
      }),
      expect.objectContaining({
        ipAddress: '200.100.50.25',
        userAgent: 'Mozilla/5.0 Test Suite',
        source: 'landing_page',
      })
    )
  })

  it('handles database error with 500 without leaking stack trace', async () => {
    vi.spyOn(leadRepo, 'insertLeadRecord').mockRejectedValue(
      new Error('Connection timeout')
    )

    const request = new Request('http://localhost/api/leads', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'Carlos Alberto',
        email: 'carlos@omni.com.br',
        whatsapp: '(41) 98888-7777',
        interestType: 'conversar',
        message: 'Preciso integrar meu ERP com o Asaas.',
        lgpdConsent: true,
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    expect(response.status).toBe(500)
    const json = await response.json()
    expect(json.error).toBe(
      'Não foi possível salvar a solicitação. Tente novamente mais tarde.'
    )
  })
})
