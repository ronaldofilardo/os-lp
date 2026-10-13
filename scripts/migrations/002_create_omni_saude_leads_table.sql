-- Migration: 002_create_omni_saude_leads_table.sql
-- Descrição: Tabela dedicada para leads de laboratórios e clínicas do Omni Saúde

CREATE TABLE IF NOT EXISTS omni_saude_leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(30) NOT NULL,
  company VARCHAR(150) NOT NULL,
  role VARCHAR(80),
  volume VARCHAR(50),
  message TEXT,
  status VARCHAR(30) NOT NULL DEFAULT 'novo',
  source VARCHAR(50) NOT NULL DEFAULT 'omni_saude_para_labs',
  ip_address VARCHAR(45),
  user_agent TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Índices para consulta e ordenação
CREATE INDEX IF NOT EXISTS idx_omni_saude_leads_created_at ON omni_saude_leads(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_omni_saude_leads_email ON omni_saude_leads(email);
CREATE INDEX IF NOT EXISTS idx_omni_saude_leads_status ON omni_saude_leads(status);

-- Comentários para conformidade
COMMENT ON TABLE omni_saude_leads IS 'Leads e solicitações de demonstração do ecossistema Omni Saúde';
COMMENT ON COLUMN omni_saude_leads.company IS 'Nome da instituição, laboratório ou clínica solicitante';
