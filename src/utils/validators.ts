import { z } from 'zod'

export const contactFormSchema = z.object({
  fullName: z.string().min(2, 'Nome deve ter pelo menos 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  whatsapp: z.string().min(10, 'Informe um WhatsApp com DDD, ex.: (41) 99999-9999'),
  interestType: z.enum(['novo-sistema', 'integracao-api', 'modernizar', 'conversar']),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres').max(2000),
  lgpdConsent: z
    .boolean()
    .refine((value) => value === true, {
      message: 'É necessário aceitar o tratamento de dados para enviar',
    }),
})

export type ContactFormInput = z.infer<typeof contactFormSchema>

export function validateContactForm(data: unknown): { success: true; data: ContactFormInput } | { success: false; errors: z.ZodError } {
  const result = contactFormSchema.safeParse(data)
  if (result.success) return { success: true, data: result.data }
  return { success: false, errors: result.error }
}
