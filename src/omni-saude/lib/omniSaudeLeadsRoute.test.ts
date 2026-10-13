import { describe, it, expect, vi, beforeEach } from 'vitest'
import { POST } from '../../../app/api/omni-saude/leads/route'
import * as omniRepo from './omniSaudeLeadRepository'
import type { OmniSaudeLeadRecord } from './omniSaudeLeadTypes'

describe('POST /api/omni-saude/leads route handler', () => {
  beforeEach(() => {
    vi.restoreAllMocks()
  })

  it('rejects invalid JSON with 400', async () => {
    const request = new Request('http://localhost/api/omni-saude/leads', {
      method: 'POST',
      body: 'invalid-json{',
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
    const json = await response.json()
    expect(json.error).toBe('Corpo da requisição inválido.')
  })

  it('rejects incomplete payload with 400', async () => {
    const request = new Request('http://localhost/api/omni-saude/leads', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'J',
        email: 'invalid-email',
      }),
      headers: { 'Content-Type': 'application/json' },
    })

    const response = await POST(request)
    expect(response.status).toBe(400)
    const json = await response.json()
    expect(json.error).toBeDefined()
  })

  it('persists omni saude lead and returns 201 with record id', async () => {
    const mockLead: OmniSaudeLeadRecord = {
      id: 'f47ac10b-58cc-4372-a567-0e02b2c3d479',
      fullName: 'Dr. Roberto Dias',
      email: 'roberto@clinicadias.com.br',
      phone: '(41) 97777-6666',
      whatsapp: '(41) 97777-6666',
      company: 'Clínica Dias Diagnósticos',
      institutionName: 'Clínica Dias Diagnósticos',
      role: 'Responsável Técnico',
      volume: '1.000 a 3.000',
      monthlyVolume: '1.000 a 3.000',
      message: 'Gostaria de conhecer o painel de entrega de laudos.',
      lgpdConsent: true,
      status: 'novo',
      source: 'omni_saude_para_labs',
      ipAddress: '187.20.10.5',
      userAgent: 'Mozilla/5.0 Vitest',
      createdAt: '2026-10-13T10:00:00.000Z',
      updatedAt: '2026-10-13T10:00:00.000Z',
    }

    vi.spyOn(omniRepo, 'insertOmniSaudeLeadRecord').mockResolvedValue(mockLead)

    const request = new Request('http://localhost/api/omni-saude/leads', {
      method: 'POST',
      body: JSON.stringify({
        fullName: 'Dr. Roberto Dias',
        email: 'roberto@clinicadias.com.br',
        phone: '(41) 97777-6666',
        company: 'Clínica Dias Diagnósticos',
        role: 'Responsável Técnico',
        volume: '1.000 a 3.000',
        message: 'Gostaria de conhecer o painel de entrega de laudos.',
      }),
      headers: {
        'Content-Type': 'application/json',
        'x-forwarded-for': '187.20.10.5',
      },
    })

    const response = await POST(request)
    expect(response.status).toBe(201)
    const json = await response.json()
    expect(json.ok).toBe(true)
    expect(json.id).toBe(mockLead.id)
  })
})
