// Script de migração de banco de dados (Dev, Test e Prod)
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import pg from 'pg'

const { Pool } = pg
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

function resolveDatabaseUrl() {
  const target = process.argv[2] || process.env.DB_TARGET || 'default'
  if (target === 'test') {
    return process.env.TEST_DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/os-lp_db_test'
  }
  if (target === 'dev') {
    return process.env.DATABASE_URL_DEV || 'postgresql://postgres:postgres@localhost:5432/os-lp_db'
  }
  if (target === 'prod') {
    if (!process.env.DATABASE_URL) {
      throw new Error('DATABASE_URL é obrigatória para migração de produção.')
    }
    return process.env.DATABASE_URL
  }
  return process.env.DATABASE_URL || 'postgresql://postgres:postgres@localhost:5432/os-lp_db'
}

async function runMigrations() {
  const connectionString = resolveDatabaseUrl()
  const isNeonOrSsl = connectionString.includes('neon.tech') || connectionString.includes('sslmode=require')

  console.log('[migrate] Executando migrações...')
  console.log(`[migrate] Destino: ${connectionString.split('@')[1] || connectionString}`)

  const pool = new Pool({
    connectionString,
    ssl: isNeonOrSsl ? { rejectUnauthorized: false } : false,
  })

  try {
    const migrationFile = path.join(__dirname, 'migrations', '001_create_leads_table.sql')
    const sql = fs.readFileSync(migrationFile, 'utf8')

    await pool.query(sql)
    console.log('[migrate] Sucesso! Tabela "leads" e índices aplicados com sucesso.')
  } catch (error) {
    console.error('[migrate] Falha ao executar migração:', error.message)
    process.exitCode = 1
  } finally {
    await pool.end()
  }
}

runMigrations()
