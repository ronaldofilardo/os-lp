import { describe, it, expect } from 'vitest'
import { getAllProjectsDTO } from '@/utils/adapter'
import { sectorColorMap, statusDotMap } from './projectStyles'

describe('projectStyles', () => {
  it('has a style class for every sector color used by a project', () => {
    for (const project of getAllProjectsDTO()) {
      expect(Object.keys(sectorColorMap)).toContain(project.sectorColor)
    }
  })

  it('has a status dot class for every status used by a project', () => {
    for (const project of getAllProjectsDTO()) {
      expect(Object.keys(statusDotMap)).toContain(project.statusVariant)
    }
  })

  it('never maps to an empty class string', () => {
    for (const value of [...Object.values(sectorColorMap), ...Object.values(statusDotMap)]) {
      expect(value.trim().length).toBeGreaterThan(0)
    }
  })
})
