-- Migration: 001_create_leads_table.sql
-- Descrição: Tabela canônica de armazenamento de leads com consentimento LGPD

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

-- Índices de consulta e ordenação
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- Comentários para conformidade e documentação da tabela
COMMENT ON TABLE leads IS 'Armazenamento de solicitações de contato/leads via Landing Page Omni Sistemas';
COMMENT ON COLUMN leads.lgpd_consent IS 'Indica se o titular consentiu expressamente com o tratamento dos dados';
COMMENT ON COLUMN leads.lgpd_consent_at IS 'Data/hora do registro de consentimento LGPD';
