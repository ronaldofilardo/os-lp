export interface RuleCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly tone: 'sky' | 'emerald' | 'primary'
}

export interface FlowStep {
  readonly number: string
  readonly label: string
  readonly title: string
  readonly description: string
}

export const MEDICOS_HERO = {
  title: 'Você só vê o que o paciente te envia. Nada mais.',
  description:
    'Sem cadastro de paciente, sem busca por CPF, sem "sistema". O paciente compartilha com você — ponto final.',
} as const

export const MEDICOS_RULE_SECTION = {
  title: 'Uma tela. Uma regra.',
  description:
    'O OmniSaúde não te fornece prontuário, não armazena histórico do paciente nem exige que você crie conta na plataforma. O paciente gera um link de compartilhamento temporário. Você abre. Vê o que ele mandou. Pronto.',
} as const

export const MEDICOS_RULE_CARDS: readonly RuleCard[] = [
  {
    title: 'Paciente lidera o acesso',
    description:
      'Quem autoriza é o paciente — ele escolhe quais documentos compartilhar e com quem. Você só aparece se ele te incluir na lista.',
    icon: 'person_check',
    tone: 'sky',
  },
  {
    title: 'Acesso tracejado pelo tempo',
    description:
      'O link temporário expira. O que você recebe é o que o paciente liberou — exame, laudo, receita. Sem surpresas. Sem portas abertas para além do necessário.',
    icon: 'timer',
    tone: 'primary',
  },
  {
    title: 'Sem armazenamento do seu lado',
    description:
      'Você não cadastra paciente no OmniSaúde. O documento é exibido diretamente — sem cópia local, sem importação para seu sistema. Você vê, não guarda.',
    icon: 'folder_off',
    tone: 'emerald',
  },
] as const

export const MEDICOS_FLOW_SECTION = {
  title: 'Fluxo do médico',
  description: 'Três etapas. Zero complicação.',
} as const

export const MEDICOS_FLOW_STEPS: readonly FlowStep[] = [
  {
    number: '1',
    label: 'Etapa',
    title: 'Paciente compartilha com você',
    description:
      'Ele seleciona os exames relevantes e envia um link temporário — por WhatsApp, e-mail ou QR code na sala de espera.',
  },
  {
    number: '2',
    label: 'Etapa',
    title: 'Você abre sem login',
    description:
      'Sem senha, sem cadastro, sem perfil. O link já carrega a identidade do compartilhamento. Abriu, viu.',
  },
  {
    number: '3',
    label: 'Etapa',
    title: 'Prontuário continua lá',
    description:
      'Seus registros continuam no seu sistema. O OmniSaúde só foi o canal — sem conflito de dados, sem migração.',
  },
] as const
