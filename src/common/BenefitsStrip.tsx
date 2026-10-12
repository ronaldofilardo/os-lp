import { Reveal } from '@/motion/Reveal'
import { SectionHeader } from './SectionHeader'
import { BenefitsCarousel, type Benefit } from './BenefitsCarousel'

const BENEFITS: readonly Benefit[] = [
  {
    icon: 'architecture',
    title: 'Feito sob Medida',
    text: 'O sistema se molda à sua operação, sem pacotes engessados que forçam sua empresa a se adaptar ao software.',
  },
  {
    icon: 'cable',
    title: 'Integrações Via API',
    text: 'Conexão nativa com meios de pagamento (como Asaas), bancos, ERPs e ferramentas do seu dia a dia.',
  },
  {
    icon: 'shield_lock',
    title: 'Privacidade e LGPD',
    text: 'Tratamento ético e seguro dos dados dos seus clientes desde o primeiro dia de projeto.',
  },
  {
    icon: 'groups',
    title: 'Sem Intermediários',
    text: 'Você conversa e alinha cada etapa diretamente com quem desenha a arquitetura do software.',
  },
] as const

export function BenefitsStrip(): JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-white border-y border-slate-200" aria-labelledby="beneficios-heading" id="beneficios">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Por que a Omni Sistemas"
          title="Quatro motivos para confiar no seu próximo sistema"
          titleId="beneficios-heading"
          theme="light"
        />
        <Reveal>
          <BenefitsCarousel benefits={BENEFITS} />
        </Reveal>
      </div>
    </section>
  )
}
