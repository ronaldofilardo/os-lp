import { OMNISAUDE_APP_LOGIN } from './navigation'

export interface FormField {
  readonly id: string
  readonly label: string
  readonly placeholder: string
  readonly type: 'text' | 'email' | 'tel'
}

export interface ProfileChoice {
  readonly title: string
  readonly description: string
  readonly ctaLabel: string
  readonly icon: string
}

export const CADASTRO_CONTENT = {
  title: 'Crie sua Conta no OmniSaúde',
  splitSubtitle: 'Você é paciente ou emissor?',
  personalSubtitle: 'Preencha seus dados pessoais para criar sua conta.',
  businessSubtitle: 'Preencha os dados da empresa para solicitar acesso.',
} as const

export const CADASTRO_CHOICES: readonly ProfileChoice[] = [
  {
    title: 'Sou Paciente',
    description: 'Quero receber meus exames e laudos diretamente no celular.',
    ctaLabel: 'Começar',
    icon: 'group',
  },
  {
    title: 'Sou Emissor',
    description: 'Represento um laboratório, clínica ou hospital e quero integrar.',
    ctaLabel: 'Quero integrar',
    icon: 'domain',
  },
] as const

export const CADASTRO_PERSONAL_FIELDS: readonly FormField[] = [
  { id: 'name', label: 'Nome Completo', placeholder: 'João da Silva', type: 'text' },
  { id: 'email', label: 'E-mail', placeholder: 'joao@email.com', type: 'email' },
  { id: 'phone', label: 'Telefone', placeholder: '(11) 99999-9999', type: 'tel' },
] as const

export const CADASTRO_BUSINESS_NOTICE = {
  title: 'Solicitação de Integração',
  description: 'Em até 24h nossa equipe entrará em contato para agendar uma demonstração.',
} as const

export const CADASTRO_BUSINESS_FIELDS: readonly FormField[] = [
  { id: 'company', label: 'Nome da Empresa / Razão Social', placeholder: 'Laboratório Exemplo Ltda', type: 'text' },
  { id: 'role', label: 'Nome do Responsável', placeholder: 'Maria Souza', type: 'text' },
  { id: 'businessEmail', label: 'E-mail Corporativo', placeholder: 'maria@laboratorio.com.br', type: 'email' },
  { id: 'businessPhone', label: 'Telefone / WhatsApp', placeholder: '(11) 99999-9999', type: 'tel' },
] as const

export const CADASTRO_SUBMIT = {
  personalLabel: 'Criar Conta Grátis',
  businessLabel: 'Solicitar Integração',
  backLabel: 'Voltar',
  href: OMNISAUDE_APP_LOGIN,
} as const
