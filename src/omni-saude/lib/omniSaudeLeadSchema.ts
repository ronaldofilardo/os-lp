import { z } from 'zod'

export const omniSaudeLeadSchema = z.object({
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
  phone: z
    .string()
    .trim()
    .min(8, 'Telefone deve ter pelo menos 8 dígitos.')
    .max(30, 'Telefone deve ter no máximo 30 caracteres.'),
  company: z
    .string()
    .trim()
    .min(2, 'O nome da empresa deve ter pelo menos 2 caracteres.')
    .max(150, 'O nome da empresa deve ter no máximo 150 caracteres.'),
  role: z.string().trim().max(80).optional(),
  volume: z.string().trim().max(50).optional(),
  message: z.string().trim().max(2000).optional(),
})

export type OmniSaudeLeadSchemaInput = z.infer<typeof omniSaudeLeadSchema>
