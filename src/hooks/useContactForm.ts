import { useState } from 'react'
import { validateContactForm, type ContactFormInput } from '@/utils/validators'

export interface ContactFormState {
  readonly isSubmitting: boolean
  readonly submitError: string | null
  readonly submitSuccess: boolean
}

export interface ContactFormActions {
  readonly handleChange: (_field: keyof ContactFormInput, _value: string) => void
  readonly handleSubmit: (_e: React.FormEvent<HTMLFormElement>) => Promise<void>
  readonly reset: () => void
}

export function useContactForm(): ContactFormState & ContactFormActions & { readonly formData: ContactFormInput } {
  const [formData, setFormData] = useState<ContactFormInput>({
    fullName: '',
    email: '',
    interestType: 'auditoria',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (_field: keyof ContactFormInput, _value: string): void => {
    setFormData((prev) => ({ ...prev, [_field]: _value }))
    if (submitError) setSubmitError(null)
  }

  const handleSubmit = async (_e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    _e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(null)

    const validation = validateContactForm(formData)
    if (!validation.success) {
      const firstError = validation.errors.issues[0]?.message ?? 'Erro de validação'
      setSubmitError(firstError)
      setIsSubmitting(false)
      return
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(validation.data),
      })

      if (!response.ok) {
        const payload = (await response.json().catch(() => null)) as { error?: string } | null
        setSubmitError(payload?.error ?? 'Falha ao enviar. Tente novamente.')
        return
      }

      setSubmitSuccess(true)
      setFormData({ fullName: '', email: '', interestType: 'auditoria', message: '' })
    } catch {
      setSubmitError('Falha ao enviar. Tente novamente.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const reset = (): void => {
    setFormData({ fullName: '', email: '', interestType: 'auditoria', message: '' })
    setSubmitError(null)
    setSubmitSuccess(false)
  }

  return {
    formData,
    isSubmitting,
    submitError,
    submitSuccess,
    handleChange,
    handleSubmit,
    reset,
  }
}
