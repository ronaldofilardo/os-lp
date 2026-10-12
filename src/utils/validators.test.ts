import { describe, it, expect } from 'vitest'
import { validateContactForm } from '@/utils/validators'

const baseInput = {
  fullName: 'Lucas Mendes',
  email: 'lucas@empresa.com.br',
  whatsapp: '(41) 99999-9999',
  interestType: 'novo-sistema' as const,
  message: 'Preciso de um sistema para automatizar minhas cobranças.',
  lgpdConsent: true,
}

describe('validators', () => {
  describe('validateContactForm', () => {
    it('valida dados corretos', () => {
      const result = validateContactForm(baseInput)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.fullName).toBe('Lucas Mendes')
        expect(result.data.whatsapp).toBe('(41) 99999-9999')
        expect(result.data.lgpdConsent).toBe(true)
      }
    })

    it('aceita todos os tipos de interesse comercial', () => {
      for (const interestType of ['novo-sistema', 'integracao-api', 'modernizar', 'conversar'] as const) {
        const result = validateContactForm({ ...baseInput, interestType })
        expect(result.success, interestType).toBe(true)
      }
    })

    it('rejeita nome muito curto', () => {
      const result = validateContactForm({ ...baseInput, fullName: 'L' })
      expect(result.success).toBe(false)
    })

    it('rejeita email inválido', () => {
      const result = validateContactForm({ ...baseInput, email: 'email-invalido' })
      expect(result.success).toBe(false)
    })

    it('rejeita whatsapp muito curto', () => {
      const result = validateContactForm({ ...baseInput, whatsapp: '99999' })
      expect(result.success).toBe(false)
    })

    it('rejeita mensagem muito curta', () => {
      const result = validateContactForm({ ...baseInput, message: 'Curta' })
      expect(result.success).toBe(false)
    })

    it('rejeita envio sem consentimento LGPD', () => {
      const result = validateContactForm({ ...baseInput, lgpdConsent: false })
      expect(result.success).toBe(false)
    })
  })
})
