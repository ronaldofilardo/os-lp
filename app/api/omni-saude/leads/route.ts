// Rota de recepção e persistência de Leads do Omni Saúde
// Metodologia STE-DEV — Validação estrita Zod e persistência em banco relacional
import { NextResponse } from 'next/server'
import { insertOmniSaudeLeadRecord } from '@/omni-saude/lib/omniSaudeLeadRepository'
import { sendOmniSaudeLeadNotification } from '@/omni-saude/lib/omniSaudeLeadNotifier'
import { omniSaudeLeadSchema } from '@/omni-saude/lib/omniSaudeLeadSchema'

function extractClientIp(request: Request): string | null {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() ?? null
  }
  return request.headers.get('x-real-ip') ?? null
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json(
      { error: 'Corpo da requisição inválido.' },
      { status: 400 }
    )
  }

  const parsed = omniSaudeLeadSchema.safeParse(body)
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]
    return NextResponse.json(
      { error: firstError?.message ?? 'Dados inválidos.' },
      { status: 400 }
    )
  }

  const clientIp = extractClientIp(request)
  const userAgent = request.headers.get('user-agent')

  try {
    const saved = await insertOmniSaudeLeadRecord(parsed.data, {
      ipAddress: clientIp,
      userAgent,
      source: 'omni_saude_para_labs',
    })

    // Dispara notificação por e-mail para ronaldofilardo@gmail.com
    await sendOmniSaudeLeadNotification(saved)

    return NextResponse.json(
      {
        ok: true,
        id: saved.id,
        createdAt: saved.createdAt,
      },
      { status: 201 }
    )
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Erro interno'
    console.error('[omni-saude:lead_persist_error]', message)
    return NextResponse.json(
      { error: 'Falha interna ao registrar lead do Omni Saúde.' },
      { status: 500 }
    )
  }
}
