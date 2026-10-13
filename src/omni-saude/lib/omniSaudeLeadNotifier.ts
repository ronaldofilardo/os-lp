// Serviço de notificação por e-mail para novos leads do Omni Saúde via Resend
// Metodologia STE-DEV — Módulo coeso (< 100 linhas), resiliente a falhas
import { Resend } from 'resend'
import type { OmniSaudeLeadRecord } from './omniSaudeLeadTypes'

export interface NotificationResult {
  readonly success: boolean
  readonly messageId?: string | undefined
}

function buildOmniSaudeEmailHtml(lead: OmniSaudeLeadRecord): string {
  const cleanPhone = lead.phone.replace(/\D/g, '')
  const whatsappUrl = `https://wa.me/55${cleanPhone}`

  return `
    <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 8px; background-color: #ffffff; color: #1e293b;">
      <div style="border-bottom: 2px solid #2ecc71; padding-bottom: 16px; margin-bottom: 20px;">
        <h2 style="margin: 0; color: #0a2f51; font-size: 20px;">Nova Solicitação de Demonstração — Omni Saúde</h2>
        <p style="margin: 4px 0 0; color: #64748b; font-size: 13px;">Registrado em ${lead.createdAt}</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <tr>
          <td style="padding: 8px 0; color: #64748b; width: 140px;"><strong>Instituição/Empresa:</strong></td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 700; font-size: 15px;">${lead.company}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;"><strong>Contato:</strong></td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${lead.fullName}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;"><strong>E-mail:</strong></td>
          <td style="padding: 8px 0;"><a href="mailto:${lead.email}" style="color: #0284c7; text-decoration: none;">${lead.email}</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;"><strong>Telefone/WhatsApp:</strong></td>
          <td style="padding: 8px 0;"><a href="${whatsappUrl}" style="color: #16a34a; font-weight: 600; text-decoration: none;" target="_blank">${lead.phone} 📲 Abrir conversa</a></td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;"><strong>Cargo:</strong></td>
          <td style="padding: 8px 0; color: #0f172a;">${lead.role ?? 'Não informado'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #64748b;"><strong>Volume de Exames:</strong></td>
          <td style="padding: 8px 0; color: #0f172a;">${lead.volume ?? 'Não informado'}</td>
        </tr>
      </table>

      ${
        lead.message
          ? `
      <div style="margin-top: 16px; padding: 16px; background-color: #f8fafc; border-radius: 6px; border-left: 4px solid #2ecc71;">
        <strong style="display: block; margin-bottom: 8px; font-size: 13px; color: #475569;">Mensagem / Necessidades:</strong>
        <p style="margin: 0; font-size: 14px; line-height: 1.5; color: #1e293b; white-space: pre-wrap;">${lead.message}</p>
      </div>`
          : ''
      }

      <div style="margin-top: 20px; font-size: 12px; color: #94a3b8; border-top: 1px solid #f1f5f9; padding-top: 12px;">
        <p style="margin: 0;">Origem: ${lead.source} | IP: ${lead.ipAddress ?? 'N/A'}</p>
      </div>
    </div>
  `
}

export async function sendOmniSaudeLeadNotification(
  lead: OmniSaudeLeadRecord
): Promise<NotificationResult> {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn('[omni-saude:notification] RESEND_API_KEY não configurada. Notificação pulada.')
    return { success: false }
  }

  const recipient =
    process.env.LEAD_NOTIFICATION_EMAIL || 'ronaldofilardo@gmail.com'
  const fromAddress =
    process.env.LEAD_NOTIFICATION_FROM || 'Omni Saúde <onboarding@resend.dev>'

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: fromAddress,
      to: [recipient],
      subject: `Novo Lead Omni Saúde: ${lead.company} — ${lead.fullName}`,
      html: buildOmniSaudeEmailHtml(lead),
    })

    if (error) {
      console.error('[omni-saude:notification_error]', error.message)
      return { success: false }
    }

    return { success: true, messageId: data?.id }
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Falha desconhecida'
    console.error('[omni-saude:notification_exception]', message)
    return { success: false }
  }
}
