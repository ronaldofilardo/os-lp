import { useMemo } from 'react'
import { getAllProjectsDTO } from '@/utils/adapter'
import type { ProjectDTO } from '@/types'

export function useProjects(): { projects: readonly ProjectDTO[] } {
  const projects = useMemo(() => getAllProjectsDTO(), [])
  return { projects }
}