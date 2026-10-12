// Resolução de configuração de banco de dados por ambiente
// Alvos: dev (os-lp_db), test (os-lp_db_test), prod (Neon PostgreSQL)

export interface ResolvedDbConfig {
  readonly connectionString: string
  readonly ssl: boolean | { readonly rejectUnauthorized: boolean }
}

export function resolveDatabaseConfig(): ResolvedDbConfig {
  const isTest = process.env.NODE_ENV === 'test'

  if (isTest) {
    const testUrl =
      process.env.TEST_DATABASE_URL ||
      'postgresql://postgres:postgres@localhost:5432/os-lp_db_test'
    const isTestSsl =
      testUrl.includes('neon.tech') || testUrl.includes('sslmode=require')
    return {
      connectionString: testUrl,
      ssl: isTestSsl ? { rejectUnauthorized: false } : false,
    }
  }

  const defaultUrl =
    process.env.DATABASE_URL ||
    'postgresql://postgres:postgres@localhost:5432/os-lp_db'

  const requiresSsl =
    defaultUrl.includes('neon.tech') || defaultUrl.includes('sslmode=require')

  return {
    connectionString: defaultUrl,
    ssl: requiresSsl ? { rejectUnauthorized: false } : false,
  }
}
