// Rota de recepção e persistência de Leads
// Metodologia STE-DEV — Validação estrita Zod e persistência em banco relacional
import { NextResponse } from 'next/server'
import { insertLeadRecord } from '@/lib/leadRepository'
import { contactFormSchema } from '@/utils/validators'

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

  const parsed = contactFormSchema.safeParse(body)
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
    const saved = await insertLeadRecord(parsed.data, {
      ipAddress: clientIp,
      userAgent,
      source: 'landing_page',
    })

    return NextResponse.json(
      {
        ok: true,
        id: saved.id,
        createdAt: saved.createdAt,
      },
      { status: 201 }
    )
  } catch (error) {
    // Log estruturado no servidor sem vazar dados sensíveis para o cliente
    const message = error instanceof Error ? error.message : 'Erro interno'
    console.error('[lead:persist_error]', message)

    return NextResponse.json(
      { error: 'Não foi possível salvar a solicitação. Tente novamente mais tarde.' },
      { status: 500 }
    )
  }
}
