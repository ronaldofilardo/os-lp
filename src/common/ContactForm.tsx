'use client'

import { useContactForm } from '@/hooks'

export function ContactForm(): React.JSX.Element {
  const { formData, isSubmitting, submitError, submitSuccess, handleChange, handleSubmit } = useContactForm()

  const interestOptions = [
    { value: 'novo-sistema', label: 'Criar um sistema novo' },
    { value: 'integracao-api', label: 'Integração de APIs (ex.: Asaas)' },
    { value: 'modernizar', label: 'Modernizar sistema existente' },
    { value: 'conversar', label: 'Quero conversar para entender melhor' },
  ] as const

  if (submitSuccess) {
    return (
      <div className="p-space-lg rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[32px] mb-2 block">check_circle</span>
        <h3 className="text-lg font-semibold text-emerald-800">Mensagem enviada</h3>
        <p className="text-sm text-slate-600 mt-1">
          Retorno em até 24 horas úteis. Enquanto isso, você também pode nos chamar no WhatsApp.
        </p>
      </div>
    )
  }

  const inputClass =
    'skeuo-input w-full h-11 px-3 rounded-xl text-slate-900 placeholder:text-slate-400 text-sm outline-none'
  const labelClass = 'text-xs font-semibold text-slate-700 uppercase tracking-wide'

  return (
    <form onSubmit={handleSubmit} className="skeuo-card flex flex-col gap-space-xs p-space-md md:p-space-lg rounded-2xl">
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-name" className={labelClass}>Nome completo</label>
        <input
          id="contact-name"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className={inputClass}
          placeholder="Ex.: Lucas Mendes"
          required
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-email" className={labelClass}>E-mail</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleChange('email', e.target.value)}
            className={inputClass}
            placeholder="lucas@suaempresa.com.br"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="contact-whatsapp" className={labelClass}>WhatsApp / Telefone</label>
          <input
            id="contact-whatsapp"
            name="whatsapp"
            type="tel"
            value={formData.whatsapp}
            onChange={(e) => handleChange('whatsapp', e.target.value)}
            className={inputClass}
            placeholder="(41) 99999-9999"
            required
          />
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-interest" className={labelClass}>Interesse</label>
        <select
          id="contact-interest"
          name="interestType"
          aria-label="Interesse"
          value={formData.interestType}
          onChange={(e) => handleChange('interestType', e.target.value)}
          className={inputClass}
        >
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="contact-message" className={labelClass}>Mensagem / Descrição da necessidade</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={5}
          className={`${inputClass} h-auto py-3 resize-none`}
          placeholder="Conte um pouco sobre o seu negócio e o que gostaria de resolver..."
          required
        />
      </div>
      <label htmlFor="contact-lgpd" className="flex items-start gap-2 py-1 cursor-pointer">
        <input
          id="contact-lgpd"
          name="lgpdConsent"
          type="checkbox"
          checked={formData.lgpdConsent}
          onChange={(e) => handleChange('lgpdConsent', e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-slate-300 text-sky-600 focus:ring-sky-500"
          required
        />
        <span className="text-xs text-slate-600 leading-relaxed">
          Autorizo o contato da Omni Sistemas e o tratamento dos meus dados conforme a LGPD, apenas para
          responder sobre esta solicitação.
        </span>
      </label>
      {submitError && (
        <div className="p-3 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-sm">
          {submitError}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="skeuo-button-primary w-full h-11 px-space-md py-2.5 rounded-xl text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
      <span className="text-xs text-slate-500 text-center block pt-1">
        ✓ Retorno em até 24h úteis • Sem compromisso • Sigilo garantido
      </span>
    </form>
  )
}
