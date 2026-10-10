import { ContactForm } from './ContactForm'

export function ContactSection(): JSX.Element {
  return (
    <section className="w-full py-space-xl" id="contato">
      <div className="max-w-[1280px] mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="flex flex-col gap-space-xs max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps text-primary uppercase tracking-wider">// Iniciar Auditoria ou Projeto</span>
          <h2 className="font-headline-lg text-headline-lg text-on-surface">
            Contato Direto
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Conte sobre seu desafio técnico. Resposta em até 24 horas úteis com proposta ou parecer preliminar.
          </p>
        </div>
        <div className="max-w-xl">
          <ContactForm />
        </div>
      </div>
    </section>
  )
}