import { describe, it, expect } from 'vitest'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { NAV_LINKS } from './navLinks'

const COMMON_DIR = join(process.cwd(), 'src', 'common')

function readSections(): string {
  return readdirSync(COMMON_DIR)
    .filter((file) => file.endsWith('.tsx'))
    .map((file) => readFileSync(join(COMMON_DIR, file), 'utf8'))
    .join('\n')
}

describe('navigation anchors', () => {
  const source = readSections()
  const anchors = NAV_LINKS.filter((link) => link.href.startsWith('#')).map((link) => link.href.slice(1))

  it('links to at least one section anchor', () => {
    expect(anchors.length).toBeGreaterThan(0)
  })

  it.each(anchors)('has a section with id="%s"', (anchor) => {
    expect(source).toContain(`id="${anchor}"`)
  })
})
