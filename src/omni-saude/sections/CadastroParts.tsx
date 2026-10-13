import { SITE } from '@/config/site'
import { CADASTRO_BUSINESS_FIELDS, CADASTRO_CHOICES, type FormField } from '@/omni-saude/data/cadastro'

export function businessWhatsAppUrl(values: Record<string, string>): string {
  const lines = CADASTRO_BUSINESS_FIELDS.map(
    (field) => `${field.label}: ${values[field.id] ?? ''}`
  ).filter((line) => !line.endsWith(': '))
  const text = ['Olá! Quero solicitar a integração do meu laboratório ao OmniSaúde.', '', ...lines].join('\n')
  return `${SITE.whatsapp.url}?text=${encodeURIComponent(text)}`
}

export function FieldRow({
  field,
  value,
  onChange,
}: {
  readonly field: FormField
  readonly value: string
  readonly onChange: (next: string) => void
}): React.JSX.Element {
  return (
    <div className="flex flex-col gap-space-xs">
      <label htmlFor={`cad-${field.id}`} className="font-label-caps text-label-caps uppercase tracking-wider text-slate-500">
        {field.label}
      </label>
      <input
        id={`cad-${field.id}`}
        type={field.type}
        placeholder={field.placeholder}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="skeuo-input w-full px-4 py-3 rounded-xl text-body-md text-slate-900"
      />
    </div>
  )
}

export function ChoiceButton({
  choice,
  onPick,
}: {
  readonly choice: (typeof CADASTRO_CHOICES)[number]
  readonly onPick: () => void
}): React.JSX.Element {
  return (
    <button type="button" onClick={onPick} className="skeuo-card h-full rounded-2xl p-6 text-left flex flex-col gap-space-sm hover:-translate-y-1 transition-transform">
      <span className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-100 to-emerald-100 border border-sky-200 flex items-center justify-center text-sky-700">
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[24px]">{choice.icon}</span>
      </span>
      <span className="font-headline-sm text-headline-sm text-slate-900">{choice.title}</span>
      <span className="text-body-md text-slate-600 leading-relaxed">{choice.description}</span>
      <span className="mt-auto pt-space-xs font-semibold text-emerald-700 text-sm inline-flex items-center gap-1">
        {choice.ctaLabel}
        <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">arrow_forward</span>
      </span>
    </button>
  )
}
