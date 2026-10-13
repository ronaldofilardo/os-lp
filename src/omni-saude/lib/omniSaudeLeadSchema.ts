import { z } from 'zod'

export const omniSaudeLeadSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'O nome deve ter pelo menos 2 caracteres.')
      .max(150, 'O nome deve ter no máximo 150 caracteres.'),
    email: z
      .string()
      .trim()
      .email('E-mail corporativo inválido.')
      .max(255, 'O e-mail deve ter no máximo 255 caracteres.'),
    phone: z.string().trim().max(30).optional(),
    whatsapp: z.string().trim().max(30).optional(),
    company: z.string().trim().max(150).optional(),
    institutionName: z.string().trim().max(150).optional(),
    role: z.string().trim().max(80).optional(),
    volume: z.string().trim().max(50).optional(),
    monthlyVolume: z.string().trim().max(50).optional(),
    message: z.string().trim().max(2000).optional(),
    lgpdConsent: z.boolean().optional().default(true),
  })
  .refine(
    (data) => {
      const contact = (data.whatsapp || data.phone || '').trim()
      return contact.length >= 8
    },
    {
      message: 'Telefone ou WhatsApp deve ter pelo menos 8 dígitos.',
      path: ['phone'],
    }
  )
  .refine(
    (data) => {
      const org = (data.institutionName || data.company || '').trim()
      return org.length >= 2
    },
    {
      message: 'Nome da instituição/empresa deve ter pelo menos 2 caracteres.',
      path: ['company'],
    }
  )

export type OmniSaudeLeadSchemaInput = z.infer<typeof omniSaudeLeadSchema>
