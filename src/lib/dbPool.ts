// Gerenciador de conexão com Pool PostgreSQL (pg)
// Suporta hot-reload do Next.js e isolamento de ambientes
import pg from 'pg'
import { resolveDatabaseConfig } from './dbConfig'

const { Pool } = pg

declare global {
  var __omniPgPoolInstance: pg.Pool | undefined
}

export function getDatabasePool(): pg.Pool {
  if (globalThis.__omniPgPoolInstance) {
    return globalThis.__omniPgPoolInstance
  }

  const config = resolveDatabaseConfig()
  const pool = new Pool({
    connectionString: config.connectionString,
    ssl: config.ssl,
    max: 10,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 10000,
  })

  if (process.env.NODE_ENV !== 'production') {
    globalThis.__omniPgPoolInstance = pool
  }

  return pool
}

export async function closeDatabasePool(): Promise<void> {
  if (globalThis.__omniPgPoolInstance) {
    await globalThis.__omniPgPoolInstance.end()
    globalThis.__omniPgPoolInstance = undefined
  }
}
