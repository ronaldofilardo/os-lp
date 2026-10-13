import { OMNISAUDE_APP_LOGIN } from './navigation'

export interface BenefitCard {
  readonly title: string
  readonly description: string
  readonly icon: string
  readonly tone: 'sky' | 'emerald' | 'primary'
}

export const PARA_VOCE_HERO = {
  title: 'Cada exame seu, chegando em um só lugar — desde o primeiro.',
  description: 'A gente avisa quando o resultado fica pronto. Você guarda. Você decide.',
  ctaLabel: 'Criar conta grátis agora',
  ctaHref: OMNISAUDE_APP_LOGIN,
} as const

export const PARA_VOCE_BENEFITS_SECTION = {
  title: 'Por Que Usar o OmniSaúde?',
  description: 'Acabou a era de procurar papéis, acessar dezenas de portais ou esquecer senhas',
} as const

export const PARA_VOCE_BENEFITS: readonly BenefitCard[] = [
  {
    title: 'Para Você e Para Quem Você Ama',
    description:
      'A saúde não é individual. Com o OmniSaúde, você pode criar perfis para seus filhos, pais ou qualquer familiar que dependa de você. Centralize o histórico de saúde de todos em um único lugar seguro, com timelines separadas e organizadas.',
    icon: 'group',
    tone: 'sky',
  },
  {
    title: 'Dê adeus à confusão de portais e senhas',
    description:
      'Laboratório A, clínica B, hospital C... cada um com seu portal e senha. Essa fragmentação pode acabar. O OmniSaúde é seu ponto de acesso único. Receba arquivos automaticamente e faça upload manual quando precisar.',
    icon: 'description',
    tone: 'emerald',
  },
  {
    title: 'Segurança Total',
    description:
      'Seus dados são criptografados e protegidos segundo as normas da LGPD. Você tem controle total sobre quem acessa o quê. Funciona direto no seu navegador, sem precisar baixar nada.',
    icon: 'lock',
    tone: 'primary',
  },
] as const
