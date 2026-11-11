/**
 * Submete URLs da Omni Sistemas ao protocolo IndexNow (Bing / Yandex / buscadores).
 *
 * Uso:
 *   pnpm indexnow:submit                  # lê https://omni-sistemas.com/sitemap.xml e envia tudo
 *   pnpm indexnow:submit -- --dry-run     # valida e imprime o payload sem enviar
 *   pnpm indexnow:submit -- https://omni-sistemas.com/ https://omni-sistemas.com/metodologia
 */

const SITE_ORIGIN = 'https://omni-sistemas.com'
const INDEXNOW_HOST = 'omni-sistemas.com'
const INDEXNOW_KEY = process.env.INDEXNOW_KEY || 'c44cd888ca874d7e9ff2e49d142cae5d'
const KEY_LOCATION = `${SITE_ORIGIN}/${INDEXNOW_KEY}.txt`
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/IndexNow'
const DEFAULT_SITEMAP_URL = `${SITE_ORIGIN}/sitemap.xml`

function parseArgs(argv) {
  const args = argv.slice(2)
  const dryRun = args.includes('--dry-run')
  const skipVerify = args.includes('--skip-verify')
  const sitemapIdx = args.indexOf('--sitemap')
  const sitemapUrl = sitemapIdx >= 0 && args[sitemapIdx + 1] ? args[sitemapIdx + 1] : DEFAULT_SITEMAP_URL

  const urls = args.filter((arg, index) => {
    if (arg === '--dry-run' || arg === '--skip-verify' || arg === '--sitemap') return false
    if (sitemapIdx >= 0 && index === sitemapIdx + 1) return false
    return !arg.startsWith('--')
  })

  return { dryRun, skipVerify, sitemapUrl, urls }
}

function extractLocsFromSitemapXml(xml) {
  const matches = [...xml.matchAll(/<loc>\s*([^<\s]+)\s*<\/loc>/gi)]
  return matches.map((m) => m[1])
}

async function fetchSitemapUrls(sitemapUrl) {
  const res = await fetch(sitemapUrl)
  if (!res.ok) {
    throw new Error(`Falha ao buscar sitemap em ${sitemapUrl}: HTTP ${res.status}`)
  }
  const xml = await res.text()
  return extractLocsFromSitemapXml(xml)
}

async function verifyKeyHosted() {
  const res = await fetch(KEY_LOCATION)
  if (!res.ok) {
    throw new Error(
      `Arquivo de chave indisponível em ${KEY_LOCATION} (HTTP ${res.status}). Faça o deploy de public/${INDEXNOW_KEY}.txt antes de submeter.`
    )
  }
  const body = (await res.text()).trim()
  if (body !== INDEXNOW_KEY) {
    throw new Error(`Conteúdo divergente em ${KEY_LOCATION}. Esperado: ${INDEXNOW_KEY}`)
  }
}

async function main() {
  const { dryRun, skipVerify, sitemapUrl, urls } = parseArgs(process.argv)
  const rawUrls = urls.length > 0 ? urls : await fetchSitemapUrls(sitemapUrl)

  const urlList = [...new Set(rawUrls)].filter((url) => {
    try {
      return new URL(url).host === INDEXNOW_HOST
    } catch {
      return false
    }
  })

  if (urlList.length === 0) {
    throw new Error('Nenhuma URL válida do domínio omni-sistemas.com encontrada.')
  }

  const payload = {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList,
  }

  if (dryRun) {
    console.log('[DRY RUN] Payload IndexNow preparado:')
    console.log(JSON.stringify(payload, null, 2))
    return
  }

  if (!skipVerify) {
    console.log(`Verificando chave em ${KEY_LOCATION}...`)
    await verifyKeyHosted()
    console.log('✓ Arquivo de chave validado em produção.')
  }

  console.log(`Enviando ${urlList.length} URLs para ${INDEXNOW_ENDPOINT}...`)
  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(payload),
  })

  console.log(`Resposta IndexNow: HTTP ${res.status} ${res.statusText}`)
  if (res.status !== 200 && res.status !== 202) {
    const text = await res.text().catch(() => '')
    throw new Error(`Falha na submissão IndexNow (${res.status}): ${text}`)
  }

  console.log('✓ URLs submetidas com sucesso. Verifique o recebimento no Bing Webmaster Tools.')
}

main().catch((err) => {
  console.error('Erro IndexNow:', err instanceof Error ? err.message : err)
  process.exitCode = 1
})

