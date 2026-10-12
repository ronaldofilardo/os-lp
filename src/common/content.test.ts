import { describe, it, expect } from 'vitest'
import { AUDIT_STEPS } from './auditSteps'
import { PILLARS } from './pillars'

const MAX_PILLAR_DESCRIPTION = 90
const MAX_STEP_DESCRIPTION = 80

describe('PILLARS', () => {
  it('has the four numbered pillars in order', () => {
    expect(PILLARS.map((pillar) => pillar.number)).toEqual(['01', '02', '03', '04'])
  })

  it('has unique titles and non-empty fields', () => {
    expect(new Set(PILLARS.map((pillar) => pillar.title)).size).toBe(PILLARS.length)
    for (const pillar of PILLARS) {
      expect(pillar.icon.length).toBeGreaterThan(0)
      expect(pillar.rule.length).toBeGreaterThan(0)
    }
  })

  it('keeps descriptions short', () => {
    for (const pillar of PILLARS) {
      expect(pillar.description.length).toBeLessThanOrEqual(MAX_PILLAR_DESCRIPTION)
    }
  })
})

describe('AUDIT_STEPS', () => {
  it('has the four numbered steps in order', () => {
    expect(AUDIT_STEPS.map((step) => step.number)).toEqual(['01', '02', '03', '04'])
  })

  it('keeps descriptions short', () => {
    for (const step of AUDIT_STEPS) {
      expect(step.description.length).toBeGreaterThan(0)
      expect(step.description.length).toBeLessThanOrEqual(MAX_STEP_DESCRIPTION)
    }
  })
})
