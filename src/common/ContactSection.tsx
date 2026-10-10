import { ContactForm } from './ContactForm'

const trustPoints = [
  { icon: 'verified', text: 'Metodologia proprietária STE-DEV baseada na norma aeroespacial ASD-STE100.' },
  { icon: 'description', text: 'Laudos com inventário de violações mapeado por arquivo:linha e causa raiz.' },
  { icon: 'schedule', text: 'Auditorias entregues em até 5 dias úteis com plano de remediação sequencial.' },
  { icon: 'handshake', text: 'Atendimento direto com engenheiro responsável — sem camadas comerciais.' },
] as const

export function ContactSection(): React.JSX.Element {
  return (
    <section className="w-full py-space-xl" id="contato">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Iniciar Auditoria ou Projeto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Contato Direto
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Conte sobre seu desafio técnico. Resposta em até 24 horas úteis com proposta ou parecer preliminar.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-xl items-start">
          <div className="max-w-xl">
            <ContactForm />
          </div>
          <aside aria-labelledby="why-trust-heading" className="p-space-lg rounded-lg bg-surface-container-low border border-outline-variant/60">
            <h3 id="why-trust-heading" className="font-headline-md text-headline-md text-on-surface mb-space-md">
              Por que confiar na Omni Sistemas
            </h3>
            <ul className="flex flex-col gap-space-sm">
              {trustPoints.map((point) => (
                <li key={point.text} className="flex items-start gap-space-sm font-body-md text-body-md text-on-surface-variant">
                  <span className="material-symbols-outlined text-primary text-icon-md mt-0.5">{point.icon}</span>
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
