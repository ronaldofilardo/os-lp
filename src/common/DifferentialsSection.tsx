import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'
import { ApiFlowBackdrop, ListeningBackdrop, SecurityBackdrop } from './DifferentialBackdrops'

interface Differential {
  readonly icon: string
  readonly eyebrow: string
  readonly title: string
  readonly body: string
  readonly message: string
  readonly bullets: readonly string[]
  readonly accent: 'sky' | 'emerald'
  readonly backdrop: 'api' | 'listening' | 'security'
}

const BACKDROPS = { api: ApiFlowBackdrop, listening: ListeningBackdrop, security: SecurityBackdrop } as const

const DIFFERENTIALS: readonly Differential[] = [
  {
    icon: 'swap_horiz',
    eyebrow: 'Integrações',
    title: 'Conexão com APIs e Meios de Pagamento',
    body: 'Automatização do ciclo financeiro — geração de cobranças (Pix, Boleto, Cartão), notificações automáticas e conciliação em tempo real.',
    message: 'Conectamos sua operação às principais APIs do mercado para eliminar o trabalho manual.',
    bullets: ['Asaas e gateways de pagamento', 'Bancos e ERPs', 'Ferramentas do seu dia a dia'],
    accent: 'sky',
    backdrop: 'api',
  },
  {
    icon: 'hearing',
    eyebrow: 'Escuta Ativa',
    title: 'Diagnóstico Antes de Qualquer Linha de Código',
    body: 'Reuniões e chamadas de alinhamento com a diretoria e a operação para entender o fluxo de trabalho real da empresa.',
    message: 'Não empurramos tecnologias da moda. Desenhamos a arquitetura exata para o tamanho da sua demanda.',
    bullets: ['Reuniões de descoberta sem compromisso', 'Mapeamento de processos reais', 'Proposta clara de escopo e prazos'],
    accent: 'emerald',
    backdrop: 'listening',
  },
  {
    icon: 'shield_lock',
    eyebrow: 'Segurança & LGPD',
    title: 'Privacidade Levada a Sério',
    body: 'Proteção de dados sensíveis de ponta a ponta, controle de acessos e respeito total à privacidade do usuário final.',
    message: 'Seus dados e os dados dos seus clientes protegidos desde o primeiro dia de projeto.',
    bullets: ['Conformidade com a LGPD', 'Controle de acesso por perfil', 'Boas práticas de segurança da informação'],
    accent: 'sky',
    backdrop: 'security',
  },
] as const

function DifferentialCard({ item, index }: { readonly item: Differential; readonly index: number }): JSX.Element {
  const sky = item.accent === 'sky'
  const Backdrop = BACKDROPS[item.backdrop]

  return (
    <Reveal delayMs={index * 100} className="h-full">
      <article
        className={`relative overflow-hidden h-full flex flex-col rounded-2xl p-space-lg md:p-space-xl transition-all duration-200 hover:-translate-y-1 ${
          sky ? 'skeuo-card-sky hover:border-sky-300' : 'skeuo-card-emerald hover:border-emerald-300'
        }`}
      >
        <Backdrop />
        <div className="relative flex items-center gap-3 mb-space-sm">
          <span
            className={`skeuo-chip w-12 h-12 rounded-xl flex items-center justify-center ${
              sky ? 'text-sky-600' : 'text-emerald-700'
            }`}
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{item.icon}</span>
          </span>
          <span className={`text-xs font-bold uppercase tracking-wider ${sky ? 'text-sky-700' : 'text-emerald-800'}`}>
            {item.eyebrow}
          </span>
        </div>
        <h3 className="relative text-xl font-semibold text-slate-900 mb-space-xs">{item.title}</h3>
        <p className="relative text-sm text-slate-600 leading-relaxed mb-space-sm">{item.body}</p>
        <ul className="relative flex flex-col gap-2 mb-space-md list-none m-0 p-0">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 text-sm text-slate-700">
              <span aria-hidden="true" translate="no" className={`material-symbols-outlined text-[16px] mt-0.5 ${sky ? 'text-sky-500' : 'text-emerald-600'}`}>
                check_circle
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
        <p className={`relative mt-auto text-sm font-medium border-t pt-space-sm ${sky ? 'text-sky-800 border-sky-100' : 'text-emerald-800 border-emerald-100'}`}>
          “{item.message}”
        </p>
      </article>
    </Reveal>
  )
}

export function DifferentialsSection(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-white" id="integracoes">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Diferenciais & Integrações"
          title="O que faz da Omni Sistemas diferente"
          description="Três pilares de entrega de valor que você não encontra em qualquer fornecedor de software."
          theme="light"
          maxWidthClass="max-w-2xl"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg items-stretch">
          {DIFFERENTIALS.map((item, index) => (
            <DifferentialCard key={item.title} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
