import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { join } from 'node:path'

const COMMON_DIR = join(process.cwd(), 'src', 'common')

function read(file: string): string {
  return readFileSync(join(COMMON_DIR, file), 'utf8')
}

describe('mobile layout guards', () => {
  it('keeps responsive vertical padding on the main sections', () => {
    for (const file of ['ProblemSection.tsx', 'ProjectsSection.tsx', 'FAQSection.tsx', 'ContactSection.tsx']) {
      expect(read(file)).toContain('py-space-lg md:py-space-xl')
    }
  })

  it('never goes back to the large fixed padding on sections', () => {
    for (const file of ['ProblemSection.tsx', 'ASDSTE100Section.tsx', 'ServicesSection.tsx']) {
      expect(read(file)).not.toMatch(/(^|\s)py-space-xl(\s|")/)
    }
  })

  it('renders projects as a swipeable carousel on mobile', () => {
    const source = read('ProjectsSection.tsx')
    expect(source).toContain('snap-x')
    expect(source).toContain('md:grid')
  })

  it('hides secondary compliance columns on mobile', () => {
    expect(read('ComplianceSection.tsx')).toContain('hidden sm:table-cell')
  })

  it('exposes the mobile menu in the header', () => {
    expect(read('Header.tsx')).toContain('<MobileMenu')
  })
})
