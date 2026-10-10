import { NextResponse } from 'next/server'
import { contactFormSchema } from '@/utils/validators'

interface LeadRecord {
  readonly fullName: string
  readonly email: string
  readonly interestType: string
  readonly message: string
  readonly submittedAt: string
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: unknown
  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: 'Corpo da requisição inválido.' }, { status: 400 })
  }

  const parsed = contactFormSchema.safeParse(body)
  if (!parsed.success) {
    const firstError = parsed.error.issues[0]
    return NextResponse.json(
      { error: firstError?.message ?? 'Dados inválidos.' },
      { status: 400 }
    )
  }

  const lead: LeadRecord = {
    fullName: parsed.data.fullName,
    email: parsed.data.email,
    interestType: parsed.data.interestType,
    message: parsed.data.message,
    submittedAt: new Date().toISOString(),
  }

  // Ponto de integração: trocar por persistência real (banco, e-mail ou CRM).
  // A interface LeadRecord é o contrato de saída validado.
  console.info('[lead]', JSON.stringify(lead))

  return NextResponse.json({ ok: true }, { status: 201 })
}
