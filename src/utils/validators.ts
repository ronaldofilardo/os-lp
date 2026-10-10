import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  interestType: z.enum(['auditoria', 'desenvolvimento', 'resgate', 'outro']),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(2000),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

export function validateContactForm(data: unknown): { success: true; data: ContactFormInput } | { success: false; errors: z.ZodError } {
  const result = contactFormSchema.safeParse(data)
  if (result.success) return { success: true, data: result.data }
  return { success: false, errors: result.error }
}