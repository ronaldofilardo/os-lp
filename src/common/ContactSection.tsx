import { ContactForm } from './ContactForm'
import { SectionHeader } from './SectionHeader'
import { SITE } from '@/config/site'

const trustPoints = [
  { icon: 'person', text: 'Atendimento direto com quem projeta o sistema — sem camadas comerciais.' },
  { icon: 'schedule', text: 'Retorno em até 24 horas úteis com proposta clara de escopo e prazos.' },
  { icon: 'gavel', text: 'Orçamento sem compromisso e sigilo garantido sobre sua operação.' },
  { icon: 'shield_lock', text: 'Conformidade com a LGPD e proteção de dados desde o primeiro dia.' },
] as const

export function ContactSection(): React.JSX.Element {
  return (
    <section className="w-full py-space-lg md:py-space-xl bg-[#f8fafc] border-t border-slate-200" id="contato">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <SectionHeader
          eyebrow="// Contato"
          title="Vamos tomar um café e conversar sobre o seu projeto?"
          description="Conte sobre o seu desafio. Retornamos em até 24 horas úteis com os próximos passos — sem compromisso."
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
          Atendimento direto com quem projeta • E-mail oficial:{' '}
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
              Garantias ao lado do formulário
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
