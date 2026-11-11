import { describe, it, expect, vi } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import { SITE } from '@/config/site'
import { isKnownPath } from '@/lib/agentNegotiation'
import {
  INDEXNOW_ENDPOINT,
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  buildIndexNowPayload,
  describeIndexNowStatus,
  submitToIndexNow,
} from '@/lib/indexnow'
import sitemap from '../../app/sitemap'
import robots from '../../app/robots'

const ROOT = path.resolve(__dirname, '../..')

describe('IndexNow verification & payload', () => {
  it('hosts the UTF-8 key file at public/ without BOM and matching exact key', () => {
    const filePath = path.join(ROOT, 'public', `${INDEXNOW_KEY}.txt`)
    expect(fs.existsSync(filePath)).toBe(true)

    const buf = fs.readFileSync(filePath)
    // Garante ausência de UTF-8 BOM (EF BB BF)
    expect(buf.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf]))).toBe(false)
    expect(buf.toString('utf8')).toBe(INDEXNOW_KEY)
  })

  it('keeps the key file accessible in middleware and robots.txt', () => {
    expect(isKnownPath(`/${INDEXNOW_KEY}.txt`)).toBe(true)
    const rules = robots().rules
    const ruleList = Array.isArray(rules) ? rules : [rules]
    const wildcard = ruleList.find((r) => r.userAgent === '*')
    expect(wildcard?.allow).toBe('/')
  })

  it('builds a valid payload from sitemap URLs belonging strictly to omni-sistemas.com', () => {
    const sitemapUrls = sitemap().map((entry) => entry.url)
    const payload = buildIndexNowPayload([
      ...sitemapUrls,
      'https://omni-sistemas.com/about', // duplicada propositalmente
      'https://outro-dominio.com/ignorar',
      'javascript:alert(1)',
    ])

    expect(payload.host).toBe(INDEXNOW_HOST)
    expect(payload.key).toBe(INDEXNOW_KEY)
    expect(payload.keyLocation).toBe(INDEXNOW_KEY_LOCATION)
    expect(payload.urlList).toHaveLength(sitemapUrls.length)
    expect(payload.urlList.every((u) => u.startsWith(SITE.domain))).toBe(true)
  })

  it('normalizes relative paths into canonical domain URLs', () => {
    const payload = buildIndexNowPayload(['/', '/metodologia'])
    expect(payload.urlList).toEqual([
      `${SITE.domain}/`,
      `${SITE.domain}/metodologia`,
    ])
  })

  it('returns clear messages for IndexNow HTTP status codes', () => {
    expect(describeIndexNowStatus(200)).toContain('sucesso')
    expect(describeIndexNowStatus(403)).toContain('Chave inválida')
    expect(describeIndexNowStatus(422)).toContain('host')
    expect(describeIndexNowStatus(429)).toContain('Too Many Requests')
  })

  it('submits payload via POST to api.indexnow.org and handles success and error responses', async () => {
    const mockFetch = vi.fn<typeof fetch>().mockResolvedValueOnce(
      new Response(null, { status: 200 })
    )

    const okResult = await submitToIndexNow(['https://omni-sistemas.com/'], {
      fetchImpl: mockFetch,
    })

    expect(okResult.ok).toBe(true)
    expect(okResult.status).toBe(200)
    expect(okResult.submittedCount).toBe(1)
    expect(mockFetch).toHaveBeenCalledWith(
      INDEXNOW_ENDPOINT,
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
      })
    )

    const forbiddenFetch = vi.fn<typeof fetch>().mockResolvedValueOnce(
      new Response(null, { status: 403 })
    )
    const errResult = await submitToIndexNow(['https://omni-sistemas.com/'], {
      fetchImpl: forbiddenFetch,
    })
    expect(errResult.ok).toBe(false)
    expect(errResult.status).toBe(403)
  })

  it('refuses submission when no valid host URLs are provided', async () => {
    const mockFetch = vi.fn<typeof fetch>()
    const result = await submitToIndexNow(['https://example.org/'], {
      fetchImpl: mockFetch,
    })

    expect(result.ok).toBe(false)
    expect(result.status).toBe(400)
    expect(result.submittedCount).toBe(0)
    expect(mockFetch).not.toHaveBeenCalled()
  })
})

