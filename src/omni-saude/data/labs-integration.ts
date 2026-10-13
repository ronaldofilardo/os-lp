export interface IntegrationCard {
  readonly title: string
  readonly description: string
}

export const LABS_INTEGRATION_SECTION = {
  anchorId: 'integration',
  title: 'Como funciona a integração',
  description:
    'Você não precisa trocar de LIS ou sistema. Escolha o caminho que cabe na sua operação.',
} as const

export const LABS_INTEGRATION_CARDS: readonly IntegrationCard[] = [
  {
    title: 'Não precisa trocar de LIS',
    description:
      'Mantenha seu sistema atual. A integração é uma camada adicional, não uma substituição.',
  },
  {
    title: 'API para TI — ~1 semana',
    description:
      'Sua equipe de TI integra via API com SDKs prontos. Homologação rápida e suporte dedicado.',
  },
  {
    title: 'Painel web manual',
    description:
      'Sem TI? Use nosso painel de emissor e faça upload ou envio manual quando precisar.',
  },
] as const

export const LABS_DEMO_SECTION = {
  anchorId: 'solicitar-demo',
  eyebrow: '// Demonstração',
  title: 'Solicitar demonstração',
  description:
    'Preencha os dados abaixo e nossa equipe entra em contato para agendar uma demonstração personalizada do OmniSaúde.',
  fields: {
    name: { label: 'Nome Completo', placeholder: 'João da Silva' },
    email: { label: 'E-mail Corporativo', placeholder: 'joao@laboratorio.com.br' },
    phone: { label: 'Telefone', placeholder: '(11) 99999-9999' },
    company: { label: 'Nome da Empresa', placeholder: 'Laboratório Exemplo Ltda' },
    role: { label: 'Seu Cargo', placeholder: 'Gerente' },
    volume: { label: 'Volume Mensal de Exames', placeholder: 'Ex: 1.200' },
    message: { label: 'Mensagem (Opcional)', placeholder: 'Conte-nos mais sobre suas necessidades...' },
  },
  submitLabel: 'Solicitar Demonstração',
} as const
