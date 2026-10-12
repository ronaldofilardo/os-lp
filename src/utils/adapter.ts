import type { ProjectRow, ProjectDTO, ServiceRow, ServiceDTO } from '@/types'
import { PROJECTS_DB, SERVICES_DB } from '@/data'
import { SECTOR_CONFIG, STATUS_CONFIG, SERVICE_TIER_CONFIG } from '@/types'

export function projectRowToDTO(row: ProjectRow): ProjectDTO {
  const sectorCfg = SECTOR_CONFIG[row.sector]
  const statusCfg = STATUS_CONFIG[row.status]

  return {
    id: row.id,
    displayName: row.name,
    sectorLabel: sectorCfg.label,
    sectorColor: sectorCfg.color,
    statusLabel: statusCfg.label,
    statusVariant: statusCfg.variant,
    summary: `${row.objective} ${row.audience} ${row.techInfo}`,
    techTags: row.techStack,
    ...(row.logo !== undefined ? { logo: row.logo } : {}),
    ...(row.url !== undefined ? { url: row.url } : {}),
  }
}

export function serviceRowToDTO(row: ServiceRow): ServiceDTO {
  const tierCfg = SERVICE_TIER_CONFIG[row.tier]

  return {
    id: row.id,
    title: row.title,
    description: row.description,
    icon: row.icon,
    tier: row.tier,
    ctaLabel: row.ctaLabel,
    isHighlighted: tierCfg.isHighlighted,
  }
}

export function getAllProjectsDTO(): readonly ProjectDTO[] {
  return PROJECTS_DB.map(projectRowToDTO)
}

export function getAllServicesDTO(): readonly ServiceDTO[] {
  return SERVICES_DB.map(serviceRowToDTO)
}

export function getProjectDTOById(id: string): ProjectDTO | undefined {
  const row = PROJECTS_DB.find((p) => p.id === id)
  return row ? projectRowToDTO(row) : undefined
}

export function getServiceDTOById(id: string): ServiceDTO | undefined {
  const row = SERVICES_DB.find((s) => s.id === id)
  return row ? serviceRowToDTO(row) : undefined
}