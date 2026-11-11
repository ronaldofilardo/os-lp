import { SITE } from '@/config/site'

export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'
export const INDEXNOW_KEY = 'c44cd888ca874d7e9ff2e49d142cae5d'
export const INDEXNOW_HOST = new URL(SITE.domain).host
export const INDEXNOW_KEY_LOCATION = `${SITE.domain}/${INDEXNOW_KEY}.txt`
export const INDEXNOW_MAX_URLS = 10_000

export interface IndexNowPayload {
  readonly host: string
  readonly key: string
  readonly keyLocation: string
  readonly urlList: readonly string[]
}

export interface IndexNowSubmissionResult {
  readonly ok: boolean
  readonly status: number
  readonly reason: string
  readonly submittedCount: number
}

const STATUS_REASONS: Readonly<Record<number, string>> = {
  200: 'URLs submetidas com sucesso ao IndexNow.',
  202: 'URLs aceitas pelo IndexNow; validação da chave pendente.',
  400: 'Requisição inválida (formato JSON incorreto).',
  403: 'Chave inválida ou arquivo de chave não encontrado/divergente em keyLocation.',
  422: 'Entidade não processável (URLs não pertencem ao host ou chave fora do padrão).',
  429: 'Limite de requisições excedido (Too Many Requests).',
}

export function describeIndexNowStatus(status: number): string {
  return STATUS_REASONS[status] ?? `Resposta HTTP inesperada (${status}).`
}

function normalizeHostUrl(raw: string): string | null {
  const candidate = raw.startsWith('/') ? `${SITE.domain}${raw}` : raw
  try {
    const parsed = new URL(candidate)
    if (parsed.protocol !== 'https:' && parsed.protocol !== 'http:') return null
    if (parsed.host !== INDEXNOW_HOST) return null
    return parsed.toString()
  } catch {
    return null
  }
}

export function buildIndexNowPayload(
  urls: readonly string[],
  key: string = INDEXNOW_KEY
): IndexNowPayload {
  const unique = new Set<string>()
  for (const raw of urls) {
    const normalized = normalizeHostUrl(raw.trim())
    if (normalized) {
      unique.add(normalized)
      if (unique.size >= INDEXNOW_MAX_URLS) break
    }
  }

  return {
    host: INDEXNOW_HOST,
    key,
    keyLocation: `${SITE.domain}/${key}.txt`,
    urlList: [...unique],
  }
}

export async function submitToIndexNow(
  urls: readonly string[],
  options?: {
    readonly key?: string
    readonly fetchImpl?: typeof fetch
  }
): Promise<IndexNowSubmissionResult> {
  const payload = buildIndexNowPayload(urls, options?.key)
  if (payload.urlList.length === 0) {
    return {
      ok: false,
      status: 400,
      reason: 'Nenhuma URL válida do domínio foi informada para submissão.',
      submittedCount: 0,
    }
  }

  const fetchFn = options?.fetchImpl ?? fetch
  const response = await fetchFn(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  return {
    ok: response.status === 200 || response.status === 202,
    status: response.status,
    reason: describeIndexNowStatus(response.status),
    submittedCount: payload.urlList.length,
  }
}

