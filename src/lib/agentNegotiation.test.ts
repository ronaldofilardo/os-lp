import { describe, it, expect } from 'vitest'
import {
  isMarkdownAccepted,
  isKnownPath,
  getHomeMarkdown,
  getNotFoundMarkdown,
} from './agentNegotiation'

describe('agentNegotiation', () => {
  it('detects text/markdown in accept header', () => {
    expect(isMarkdownAccepted('text/markdown')).toBe(true)
    expect(isMarkdownAccepted('text/markdown, text/html;q=0.9')).toBe(true)
    expect(isMarkdownAccepted('text/html, application/xhtml+xml')).toBe(false)
    expect(isMarkdownAccepted(null)).toBe(false)
  })

  it('validates known application paths', () => {
    expect(isKnownPath('/')).toBe(true)
    expect(isKnownPath('/about')).toBe(true)
    expect(isKnownPath('/contact')).toBe(true)
    expect(isKnownPath('/privacy')).toBe(true)
    expect(isKnownPath('/metodologia')).toBe(true)
    expect(isKnownPath('/artigos/algum-artigo')).toBe(true)
    expect(isKnownPath('/conhecimento/1-historico')).toBe(true)
    expect(isKnownPath('/logo.png')).toBe(true)
    expect(isKnownPath('/sitemap.xml')).toBe(true)
    expect(isKnownPath('/llms.txt')).toBe(true)
  })

  it('flags unknown paths as false', () => {
    expect(isKnownPath('/rota-que-nao-existe')).toBe(false)
    expect(isKnownPath('/unknown-doc')).toBe(false)
    expect(isKnownPath('/foo/bar')).toBe(false)
  })

  it('generates rich home markdown with Vary: Accept capability', () => {
    const md = getHomeMarkdown()
    expect(md).toContain('# Omni Sistemas')
    expect(md).toContain('1996')
    expect(md).toContain('30 anos')
    expect(md).toContain('Ronaldo Domingues Filardo')
    expect(md).toContain('/llms.txt')
  })

  it('generates agent-friendly 404 markdown with at least 20 characters and doc links', () => {
    const md = getNotFoundMarkdown('/rota-inexistente')
    expect(md.length).toBeGreaterThan(50)
    expect(md).toContain('404')
    expect(md).toContain('/rota-inexistente')
    expect(md).toContain('/llms.txt')
    expect(md).toContain('/sitemap.xml')
  })
})

