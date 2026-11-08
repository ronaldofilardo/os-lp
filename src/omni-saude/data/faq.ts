import type { FAQItem } from '@/types'

export const OMNISAUDE_FAQ_DB: readonly FAQItem[] = [
  {
    question: 'O que é o Omni Saúde e como ele funciona?',
    answer:
      'O Omni Saúde é uma plataforma digital que unifica exames, laudos laboratoriais e receitas médicas no celular. O paciente centraliza o histórico de saúde de toda a família, recebe alertas de exames preventivos e compartilha resultados diretamente com médicos e clínicas autorizadas.',
  },
  {
    question: 'O laboratório precisa trocar de software ou sistema LIS para integrar?',
    answer:
      'Não. O Omni Saúde integra-se diretamente ao software LIS existente do laboratório via API REST em cerca de uma semana, ou por painel web assistido. O fluxo de trabalho diário da equipe técnica permanece inalterado, eliminando custos com impressões e portais obsoletos.',
  },
  {
    question: 'Como o Omni Saúde garante o sigilo médico e a conformidade com a LGPD?',
    answer:
      'A plataforma implementa criptografia de ponta a ponta, isolamento de dados por paciente e rastreabilidade total de acessos com consentimento explícito. Desenvolvido sob a metodologia preventiva STE-DEV, o sistema cumpre rigorosamente as normas sanitárias e a Lei Geral de Proteção de Dados.',
  },
  {
    question: 'Como os médicos acessam os laudos e históricos dos pacientes?',
    answer:
      'O médico recebe os exames e laudos diretamente pelo portal web seguro ou por link autenticado com token temporário autorizado pelo paciente. A visualização é rápida, limpa e padronizada, permitindo comparações evolutivas de resultados anteriores em consultas presenciais ou por telemedicina.',
  },
] as const

