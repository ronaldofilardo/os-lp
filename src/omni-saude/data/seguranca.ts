export interface ArchitectureCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly tone: 'sky' | 'emerald' | 'primary'
  readonly bullets: readonly string[]
}

export const SEGURANCA_HERO = {
  title: 'A gente verifica o que ninguém pede.',
  description:
    'Segurança não é checklist. É arquitetura. E a arquitetura do OmniSaúde coloca o paciente no centro — sem inventar certificação que não temos.',
} as const

export const SEGURANCA_ARCHITECTURE_SECTION = {
  title: 'Como protegemos cada documento',
  description:
    'Três camadas que funcionam de verdade — da máquina do laboratório até a tela do paciente.',
} as const

export const SEGURANCA_ARCHITECTURE_CARDS: readonly ArchitectureCard[] = [
  {
    title: 'Criptografia em repouso e em trânsito',
    description:
      'Arquivos são criptografados com SHA-256 antes de serem armazenados. A transmissão entre laboratório, servidor e navegador do paciente usa TLS 1.3.',
    icon: 'lock',
    tone: 'sky',
    bullets: [
      'SHA-256 em cada documento individualmente',
      'TLS 1.3 em todas as conexões',
      'Chaves gerenciadas separadamente dos dados',
    ],
  },
  {
    title: 'Row Level Security (RLS)',
    description:
      'Cada paciente só acessa seus próprios documentos, mesmo que alguém acesse o banco diretamente. O laboratório vê apenas o que ele mesmo enviou.',
    icon: 'database',
    tone: 'emerald',
    bullets: [
      'Isolamento por tenant no banco de dados',
      'Filtros aplicados antes de consultar',
      'Nenhum bypass possível via API',
    ],
  },
  {
    title: 'Audit Log completo',
    description:
      'Cada acesso, envio, visualização e compartilhamento é registrado com timestamp, IP e identificação do ator — sem exceção.',
    icon: 'search_check',
    tone: 'primary',
    bullets: [
      'Log imutável de cada documento',
      'IP e identificação do ator registrados',
      'Disponível para revisão pelo paciente',
    ],
  },
] as const

export const SEGURANCA_CALLOUT =
  'Compartilhamento público bloqueado por middleware: links temporários expiram e são revogados automaticamente.'
