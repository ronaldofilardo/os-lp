import { describe, it, expect } from 'vitest'
import { NAV_LINKS } from './navLinks'

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
