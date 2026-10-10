import { useContactForm } from '@/hooks'

export function ContactForm(): JSX.Element {
  const { formData, isSubmitting, submitError, submitSuccess, handleChange, handleSubmit } = useContactForm()

  const interestOptions = [
    { value: 'auditoria', label: 'Auditoria de Código STE-DEV' },
    { value: 'desenvolvimento', label: 'Desenvolvimento de Novo Software' },
    { value: 'resgate', label: 'Resgate e Modernização de Legado' },
    { value: 'outro', label: 'Consultoria em Governança de IA' },
  ] as const

  if (submitSuccess) {
    return (
      <div className="p-space-lg rounded-lg bg-secondary-container/10 border border-secondary/30 text-center">
        <span className="material-symbols-outlined text-secondary text-[32px] mb-2 block">check_circle</span>
        <h3 className="font-headline-sm text-headline-sm text-secondary">Solicitação Registrada</h3>
        <p className="font-body-md text-body-md text-on-surface-variant mt-1">
          Resposta em até 24 horas úteis com proposta ou parecer preliminar.
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-space-xs">
      <div className="flex flex-col gap-1">
        <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Nome Completo</label>
        <input
          type="text"
          value={formData.fullName}
          onChange={(e) => handleChange('fullName', e.target.value)}
          className="w-full h-11 px-3 rounded bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md outline-none focus:bg-surface-container-high transition-colors"
          placeholder="Ex.: Lucas Mendes"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">E-mail Corporativo</label>
        <input
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="w-full h-11 px-3 rounded bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md outline-none focus:bg-surface-container-high transition-colors"
          placeholder="lucas@suaempresa.com.br"
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Tipo de Interesse</label>
        <select
          value={formData.interestType}
          onChange={(e) => handleChange('interestType', e.target.value as typeof formData.interestType)}
          className="w-full h-11 px-3 rounded bg-surface-container text-on-surface font-body-md text-body-md outline-none focus:bg-surface-container-high transition-colors"
        >
          {interestOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="font-label-caps text-label-caps text-on-surface-variant uppercase">Desafio Técnico</label>
        <textarea
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          rows={5}
          className="w-full px-3 py-3 rounded bg-surface-container text-on-surface placeholder:text-outline font-body-md text-body-md outline-none focus:bg-surface-container-high transition-colors resize-none"
          placeholder="Descreva o problema arquitetural, dívida técnica ou objetivo do projeto..."
          required
        />
      </div>
      {submitError && (
        <div className="p-3 rounded bg-error-container/10 border border-error/30 text-error font-code-sm text-code-sm">
          {submitError}
        </div>
      )}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full h-11 px-space-md py-2.5 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
      </button>
      <span className="font-code-sm text-code-sm text-on-surface-variant text-center block pt-1">
        ✓ Resposta técnica em até 24h úteis • Sem compromisso comercial • Sigilo garantido
      </span>
    </form>
  )
}