import { useMemo } from 'react'
import { getAllServicesDTO } from '@/utils/adapter'
import type { ServiceDTO } from '@/types'

export function useServices(): { services: readonly ServiceDTO[] } {
  const services = useMemo(() => getAllServicesDTO(), [])
  return { services }
}