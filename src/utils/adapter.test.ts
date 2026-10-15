import { describe, it, expect } from 'vitest'
import { projectRowToDTO, serviceRowToDTO, getAllProjectsDTO, getAllServicesDTO } from '@/utils/adapter'
import { PROJECTS_DB, SERVICES_DB } from '@/data'
import type { ProjectRow, ServiceRow } from '@/types'

describe('adapter', () => {
  describe('projectRowToDTO', () => {
    it('converte ProjectRow para ProjectDTO com campos corretos', () => {
      const row = PROJECTS_DB.find((p) => p.id === 'aqui') as ProjectRow
      const dto = projectRowToDTO(row)

      expect(dto.id).toBe(row.id)
      expect(dto.displayName).toBe(row.name)
      expect(dto.sectorLabel).toBe('FinTech')
      expect(dto.sectorColor).toBe('primary')
      expect(dto.statusLabel).toBe('PRODUÇÃO')
      expect(dto.statusVariant).toBe('production')
      expect(dto.techTags).toEqual(row.techStack)
    })

    it('mapeia status in-dev corretamente', () => {
      const row = PROJECTS_DB.find((p) => p.id === 'lwos') as ProjectRow
      const dto = projectRowToDTO(row)

      expect(dto.statusLabel).toBe('EM DEV')
      expect(dto.statusVariant).toBe('in-dev')
    })

    it('mapeia video quando definido', () => {
      const row = PROJECTS_DB.find((p) => p.id === 'qwork-lp') as ProjectRow
      const dto = projectRowToDTO(row)

      expect(dto.video).toBe('/logo-QWORK.mp4')
    })
  })

  describe('serviceRowToDTO', () => {
    it('converte ServiceRow para ServiceDTO com tier highlighted', () => {
      const row = SERVICES_DB.find((s) => s.id === 'dev-sob-medida') as ServiceRow
      const dto = serviceRowToDTO(row)

      expect(dto.id).toBe(row.id)
      expect(dto.title).toBe(row.title)
      expect(dto.isHighlighted).toBe(true)
      expect(dto.tier).toBe('recommended')
    })

    it('marca standard tier como não highlighted', () => {
      const row = SERVICES_DB.find((s) => s.id === 'integracoes') as ServiceRow
      const dto = serviceRowToDTO(row)

      expect(dto.isHighlighted).toBe(false)
    })
  })

  describe('getAllProjectsDTO', () => {
    it('retorna array de ProjectDTO com mesmo tamanho do DB', () => {
      const dtos = getAllProjectsDTO()
      expect(dtos).toHaveLength(PROJECTS_DB.length)
      dtos.forEach((dto) => {
        expect(dto).toHaveProperty('id')
        expect(dto).toHaveProperty('displayName')
        expect(dto).toHaveProperty('sectorColor')
      })
    })
  })

  describe('getAllServicesDTO', () => {
    it('retorna array de ServiceDTO com mesmo tamanho do DB', () => {
      const dtos = getAllServicesDTO()
      expect(dtos).toHaveLength(SERVICES_DB.length)
      dtos.forEach((dto) => {
        expect(dto).toHaveProperty('id')
        expect(dto).toHaveProperty('isHighlighted')
      })
    })
  })
})