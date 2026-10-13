import pg from 'pg'

const { Pool } = pg

const connectionString =
  process.env.DATABASE_URL ||
  'postgresql://postgres:postgres@localhost:5432/os-lp_db'

async function main() {
  console.log('Connecting to Neon database...')
  const pool = new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
    max: 2,
    connectionTimeoutMillis: 10000,
  })

  try {
    const client = await pool.connect()
    console.log('Connected successfully!')
    
    const versionRes = await client.query('SELECT version();')
    console.log('PostgreSQL version:', versionRes.rows[0].version)

    // Check or create leads table
    const createTableQuery = `
      CREATE TABLE IF NOT EXISTS leads (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        full_name VARCHAR(150) NOT NULL,
        email VARCHAR(255) NOT NULL,
        whatsapp VARCHAR(30) NOT NULL,
        interest_type VARCHAR(50) NOT NULL,
        message TEXT NOT NULL,
        lgpd_consent BOOLEAN NOT NULL DEFAULT true,
        lgpd_consent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        status VARCHAR(30) NOT NULL DEFAULT 'novo',
        source VARCHAR(50) NOT NULL DEFAULT 'landing_page',
        ip_address VARCHAR(45),
        user_agent TEXT,
        created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
        updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
      );
      CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
      CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
      CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
    `
    await client.query(createTableQuery)
    console.log('Table "leads" ensured in Neon database.')

    const countRes = await client.query('SELECT count(*)::int as count FROM leads;')
    console.log('Current lead count:', countRes.rows[0].count)

    client.release()
    await pool.end()
    console.log('Database test complete!')
  } catch (err) {
    console.error('Error connecting to Neon database:', err)
    process.exit(1)
  }
}

main()
