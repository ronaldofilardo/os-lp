import { describe, it, expect } from 'vitest'
import { NextRequest } from 'next/server'
import { middleware } from '../../middleware'

function makeRequest(url: string, accept?: string): NextRequest {
  const headers = new Headers()
  if (accept) headers.set('accept', accept)
  return new NextRequest(new URL(url, 'https://omni-sistemas.com'), { headers })
}

describe('middleware content negotiation', () => {
  it('serves home markdown when Accept: text/markdown is sent on /', async () => {
    const req = makeRequest('/', 'text/markdown')
    const res = middleware(req)

    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).toContain('text/markdown')
    expect(res.headers.get('vary')).toBe('Accept')
    const body = await res.text()
    expect(body).toContain('# Omni Sistemas')
    expect(body).toContain('1996')
  })

  it('keeps serving HTML for Accept: text/html on /', () => {
    const req = makeRequest('/', 'text/html,application/xhtml+xml')
    const res = middleware(req)

    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).not.toContain('text/markdown')
    expect(res.headers.get('vary')).toBe('Accept')
  })

  it('serves 404 markdown when Accept: text/markdown is sent to nonexistent path', async () => {
    const req = makeRequest('/some-path-that-does-not-exist', 'text/markdown')
    const res = middleware(req)

    expect(res.status).toBe(404)
    expect(res.headers.get('content-type')).toContain('text/markdown')
    expect(res.headers.get('vary')).toBe('Accept')
    const body = await res.text()
    expect(body.length).toBeGreaterThan(20)
    expect(body).toContain('404')
    expect(body).toContain('llms.txt')
  })

  it('passes through to normal 404 HTML handler for browser HTML requests on nonexistent path', () => {
    const req = makeRequest('/some-path-that-does-not-exist', 'text/html')
    const res = middleware(req)

    expect(res.status).toBe(200)
    expect(res.headers.get('content-type')).not.toContain('text/markdown')
  })
})
