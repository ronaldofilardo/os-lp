import { ContactForm } from './ContactForm'
import { SectionHeader } from './SectionHeader'
import { SITE } from '@/config/site'

const trustPoints = [
  { icon: 'person_check', text: 'Atendimento direto com Arquiteto Sênior (28+ anos) — sem vendedores ou repasses a júniores.' },
  { icon: 'schedule', text: 'Retorno consultivo em até 24 horas úteis com triagem técnica e viabilidade operacional.' },
  { icon: 'gavel', text: 'Diagnóstico preliminar sem custo e sigilo contratual rigoroso sobre a sua operação.' },
  { icon: 'shield_lock', text: 'Conformidade nativa com a LGPD e mentalidade de segurança Zero-Trust desde o primeiro dia.' },
] as const

export function ContactSection(): React.JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-[#f8fafc] border-t border-slate-200" id="contato">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Diagnóstico Técnico de Viabilidade"
          title="Agende uma sessão técnica sobre os gargalos da sua operação"
          description="Conte sobre os gargalos do seu negócio. Retornamos em até 24 horas úteis com parecer técnico preliminar e próximos passos — direto com nosso Arquiteto."
          theme="light"
          tone="secondary"
          maxWidthClass="max-w-2xl"
        />
        <div className="flex flex-wrap items-center gap-space-sm mb-space-md">
          <a
            href={SITE.whatsapp.url}
            target="_blank"
            rel="noopener noreferrer"
            className="skeuo-button-emerald inline-flex items-center gap-space-xs px-space-lg py-3 rounded-xl text-white text-sm font-semibold w-fit"
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">chat</span>
            <span>WhatsApp {SITE.whatsapp.display}</span>
          </a>
          <a
            href={`mailto:${SITE.email}`}
            className="skeuo-button-ghost inline-flex items-center gap-space-xs px-space-lg py-3 rounded-xl text-slate-700 text-sm font-semibold w-fit"
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px] text-sky-600">mail</span>
            <span>E-mail: {SITE.email}</span>
          </a>
        </div>
        <p className="text-sm text-slate-500 mb-space-md">
          Atendimento direto com quem projeta • Engenharia boutique sênior • E-mail oficial:{' '}
          <a href={`mailto:${SITE.email}`} className="text-sky-700 hover:underline font-medium">
            {SITE.email}
          </a>
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg lg:gap-space-xl items-start">
          <div className="max-w-xl">
            <ContactForm />
          </div>
          <aside aria-labelledby="why-trust-heading" className="skeuo-card p-space-lg rounded-2xl">
            <h3 id="why-trust-heading" className="text-xl font-semibold text-slate-900 mb-space-md">
              Garantias do Diagnóstico Omni
            </h3>
            <ul className="flex flex-col gap-space-sm list-none m-0 p-0">
              {trustPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-space-sm text-sm text-slate-600">
                  <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[18px] mt-0.5">{point.icon}</span>
                  <span>{point.text}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </div>
    </section>
  )
}
