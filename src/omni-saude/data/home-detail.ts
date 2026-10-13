import { OMNISAUDE_APP_LOGIN } from './navigation'

export const HOME_CONSULTATION = {
  image: {
    src: '/omni-saude/doctor_patient_care.webp',
    alt: 'Médica atenciosa explicando resultados de exames no tablet para paciente',
    width: 1024,
    height: 1024,
  },
  badge: 'Experiência no Consultório',
  title: 'Na hora da consulta, seu histórico abre sem complicações.',
  description:
    'Quando você vai a um médico novo ou consulta de retorno, não precisa se preocupar em lembrar onde deixou a pasta de exames.',
  steps: [
    {
      title: 'Você gera um link temporário no app',
      description: 'Escolha quais exames quer mostrar e defina a duração da permissão.',
    },
    {
      title: 'O médico visualiza direto na tela',
      description: 'Sem necessidade de cadastro, login ou instalação de programas pelo médico.',
    },
    {
      title: 'Sua privacidade continua intacta',
      description: 'O link expira automaticamente. Você tem total controle sobre quem acessa.',
    },
  ],
  ctaLabel: 'Saiba como funciona para médicos',
  ctaHref: '/omni-saude/medicos',
} as const

export const HOME_SECURITY_BANNER = {
  badge: 'Conformidade com a LGPD',
  title: 'Seus dados são seus. Ninguém vende, ninguém espiona.',
  description:
    'Utilizamos criptografia padrão bancário (SHA-256 e TLS 1.3). Somente pessoas autorizadas por você conseguem visualizar seus documentos de saúde.',
  ctaLabel: 'Ver detalhes de segurança',
  ctaHref: '/omni-saude/seguranca',
} as const

export const HOME_FINAL_CTA = {
  title: 'Pronto para ter seu histórico médico sempre à mão?',
  description: 'Crie sua conta em menos de 2 minutos.',
  ctaLabel: 'Criar minha conta grátis agora',
  ctaHref: OMNISAUDE_APP_LOGIN,
} as const
