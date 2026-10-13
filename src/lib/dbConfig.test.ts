import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import { resolveDatabaseConfig } from './dbConfig'

describe('resolveDatabaseConfig', () => {
  const originalEnv = process.env

  function setNodeEnv(value: string): void {
    const env = process.env as Record<string, string | undefined>
    env['NODE_ENV'] = value
  }

  beforeEach(() => {
    process.env = { ...originalEnv }
  })

  afterEach(() => {
    process.env = originalEnv
  })

  it('resolves test database when NODE_ENV is test', () => {
    setNodeEnv('test')
    delete process.env.TEST_DATABASE_URL

    const config = resolveDatabaseConfig()
    expect(config.connectionString).toContain('os-lp_db_test')
    expect(config.ssl).toBe(false)
  })

  it('uses custom TEST_DATABASE_URL when set in test mode', () => {
    setNodeEnv('test')
    process.env.TEST_DATABASE_URL = 'postgresql://custom:5432/my_test_db'

    const config = resolveDatabaseConfig()
    expect(config.connectionString).toBe('postgresql://custom:5432/my_test_db')
  })

  it('resolves dev database default when NODE_ENV is development and DATABASE_URL is unset', () => {
    setNodeEnv('development')
    delete process.env.DATABASE_URL

    const config = resolveDatabaseConfig()
    expect(config.connectionString).toContain('os-lp_db')
    expect(config.ssl).toBe(false)
  })

  it('enables SSL rejectUnauthorized: false when URL points to Neon', () => {
    setNodeEnv('production')
    process.env.DATABASE_URL =
      'postgresql://neondb_owner:secret@ep-round-smoke.aws.neon.tech/neondb?sslmode=require'

    const config = resolveDatabaseConfig()
    expect(config.connectionString).toContain('neon.tech')
    expect(config.ssl).toEqual({ rejectUnauthorized: false })
  })
})
