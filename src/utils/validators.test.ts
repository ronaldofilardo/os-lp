import { describe, it, expect } from 'vitest'
import { validateContactForm } from '@/utils/validators'

describe('validators', () => {
  describe('validateContactForm', () => {
    it('valida dados corretos', () => {
      const input = {
        fullName: 'Lucas Mendes',
        email: 'lucas@empresa.com.br',
        interestType: 'auditoria' as const,
        message: 'Preciso de uma auditoria no meu projeto legacy.',
      }
      const result = validateContactForm(input)
      expect(result.success).toBe(true)
      if (result.success) {
        expect(result.data.fullName).toBe('Lucas Mendes')
      }
    })

    it('rejeita nome muito curto', () => {
      const input = {
        fullName: 'L',
        email: 'lucas@empresa.com.br',
        interestType: 'auditoria' as const,
        message: 'Mensagem válida com tamanho suficiente.',
      }
      const result = validateContactForm(input)
      expect(result.success).toBe(false)
    })

    it('rejeita email inválido', () => {
      const input = {
        fullName: 'Lucas Mendes',
        email: 'email-invalido',
        interestType: 'auditoria' as const,
        message: 'Mensagem válida com tamanho suficiente.',
      }
      const result = validateContactForm(input)
      expect(result.success).toBe(false)
    })

    it('rejeita mensagem muito curta', () => {
      const input = {
        fullName: 'Lucas Mendes',
        email: 'lucas@empresa.com.br',
        interestType: 'auditoria' as const,
        message: 'Curta',
      }
      const result = validateContactForm(input)
      expect(result.success).toBe(false)
    })
  })
})