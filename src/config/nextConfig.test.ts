import { describe, it, expect } from 'vitest'
import nextConfig, { DEV_ORIGINS } from '../../next.config'

describe('next.config dev origins', () => {
  it('allows the common private LAN ranges so a phone can open `next dev`', () => {
    expect(DEV_ORIGINS).toContain('192.168.*.*')
    expect(DEV_ORIGINS).toContain('10.*.*.*')
    expect(DEV_ORIGINS).toContain('172.16.*.*')
    expect(DEV_ORIGINS).toContain('172.31.*.*')
  })

  it('does not open the whole 172.x range (only the private 172.16-31 block)', () => {
    expect(DEV_ORIGINS).not.toContain('172.*.*.*')
    expect(DEV_ORIGINS).not.toContain('172.15.*.*')
    expect(DEV_ORIGINS).not.toContain('172.32.*.*')
  })

  it('never allows every origin', () => {
    expect(DEV_ORIGINS).not.toContain('*')
    expect(DEV_ORIGINS).not.toContain('*.*.*.*')
  })

  it('passes the list to Next', () => {
    expect(nextConfig.allowedDevOrigins).toEqual([...DEV_ORIGINS])
  })
})
