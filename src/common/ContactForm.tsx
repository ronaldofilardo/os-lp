'use client'

import { useContactForm } from '@/hooks'

export function ContactForm(): React.JSX.Element {
  const { formData, isSubmitting, submitError, submitSuccess, handleChange, handleSubmit } = useContactForm({
    redirectTo: '/obrigado',
  })

  const interestOptions = [
    { value: 'novo-sistema', label: 'Plataforma Operacional Sob Medida' },
    { value: 'integracao-api', label: 'Automação de APIs, Gateways e Finanças' },
    { value: 'modernizar', label: 'Modernização Segura de Legados (Strangler)' },
    { value: 'conversar', label: 'Diagnóstico Direto com o Arquiteto Sênior' },
  ] as const

  if (submitSuccess) {
    return (
      <div className="p-space-lg rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-emerald-600 text-[32px] mb-2 block">check_circle</span>
        <h3 className="text-lg font-semibold text-emerald-800">Solicitação de Diagnóstico Recebida</h3>
        <p className="text-sm text-slate-600 mt-1">
          Análise preliminar pelo Arquiteto Ronaldo Filardo. Redirecionando para confirmação...
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
          <label htmlFor="contact-email" className={labelClass}>E-mail Corporativo</label>
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
          <label htmlFor="contact-whatsapp" className={labelClass}>WhatsApp / Telefone Direto</label>
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
        <label htmlFor="contact-interest" className={labelClass}>Tipo de Demanda Principal</label>
        <select
          id="contact-interest"
          name="interestType"
          aria-label="Tipo de Demanda Principal"
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
        <label htmlFor="contact-message" className={labelClass}>Qual o principal gargalo operacional da sua empresa hoje?</label>
        <textarea
          id="contact-message"
          name="message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={5}
          className={`${inputClass} h-auto py-3 resize-none`}
          placeholder="Descreva brevemente sua operação, sistemas atuais ou processos manuais que estão travando o crescimento do negócio..."
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
          responder sobre este diagnóstico técnico.
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
        className="skeuo-button-primary w-full h-11 px-space-md py-2.5 rounded-xl text-white text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
      >
        {isSubmitting ? 'Enviando Dados...' : 'Solicitar Diagnóstico Técnico de Viabilidade →'}
      </button>
      <span className="text-xs text-slate-500 text-center block pt-1">
        ✓ Triagem técnica por Arquiteto Sênior • Sem compromisso • Sigilo garantido
      </span>
    </form>
  )
}
