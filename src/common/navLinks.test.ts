import { describe, it, expect } from 'vitest'
import { NAV_LINKS, NAV_LINKS_OMNISAUDE } from './navLinks'

describe('NAV_LINKS', () => {
  it('has unique hrefs and labels', () => {
    expect(new Set(NAV_LINKS.map((link) => link.href)).size).toBe(NAV_LINKS.length)
    expect(new Set(NAV_LINKS.map((link) => link.label)).size).toBe(NAV_LINKS.length)
  })

  it('points only to page anchors or site paths', () => {
    for (const link of NAV_LINKS) {
      expect(link.href).toMatch(/^(#|\/)[a-z0-9-]+$/)
    }
  })
})

describe('NAV_LINKS_OMNISAUDE', () => {
  it('has unique hrefs and labels', () => {
    expect(new Set(NAV_LINKS_OMNISAUDE.map((link) => link.href)).size).toBe(
      NAV_LINKS_OMNISAUDE.length
    )
    expect(new Set(NAV_LINKS_OMNISAUDE.map((link) => link.label)).size).toBe(
      NAV_LINKS_OMNISAUDE.length
    )
  })

  it('points only to public omni-saude routes', () => {
    for (const link of NAV_LINKS_OMNISAUDE) {
      expect(link.href).toMatch(/^\/omni-saude(\/[a-z0-9-]+)*$/)
    }
  })

  it('covers the six public routes of the section', () => {
    expect(NAV_LINKS_OMNISAUDE.map((link) => link.href)).toEqual([
      '/omni-saude',
      '/omni-saude/para-voce',
      '/omni-saude/para-labs',
      '/omni-saude/medicos',
      '/omni-saude/seguranca',
      '/omni-saude/contato',
    ])
  })
})
