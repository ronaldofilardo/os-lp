import { describe, it, expect } from 'vitest'
import { PROJECTS_DB } from '@/data'
import { projectRowToDTO } from '@/utils/adapter'
import { firstSentence } from './firstSentence'

describe('firstSentence', () => {
  it('returns only the first sentence', () => {
    expect(firstSentence('Primeira frase. Segunda frase.')).toBe('Primeira frase.')
  })

  it('returns the whole text when there is a single sentence', () => {
    expect(firstSentence('Texto sem ponto final')).toBe('Texto sem ponto final')
    expect(firstSentence('Uma frase só.')).toBe('Uma frase só.')
  })

  it('returns an empty string for empty input', () => {
    expect(firstSentence('')).toBe('')
  })

  it('recovers the objective of every project from its summary', () => {
    for (const row of PROJECTS_DB) {
      expect(firstSentence(projectRowToDTO(row).summary)).toBe(row.objective)
    }
  })
})
