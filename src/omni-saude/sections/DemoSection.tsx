'use client'

import { useState, type FormEvent } from 'react'
import { SITE } from '@/config/site'
import { Reveal } from '@/motion/Reveal'
import { LABS_DEMO_SECTION } from '@/omni-saude/data/labs-integration'

const FIELDS = Object.entries(LABS_DEMO_SECTION.fields)

function buildWhatsAppUrl(values: Record<string, string>): string {
  const lines = FIELDS.map(([key, field]) => `${field.label}: ${values[key] ?? ''}`).filter(
    (line) => !line.endsWith(': ')
  )
  const text = [`Olá! Gostaria de solicitar uma demonstração do OmniSaúde.`, '', ...lines].join('\n')
  return `${SITE.whatsapp.url}?text=${encodeURIComponent(text)}`
}

function Field({
  fieldKey,
  label,
  placeholder,
  value,
  onChange,
}: {
  readonly fieldKey: string
  readonly label: string
  readonly placeholder: string
  readonly value: string
  readonly onChange: (next: string) => void
}): React.JSX.Element {
  const id = `demo-${fieldKey}`
  const classes = 'skeuo-input w-full px-4 py-3 rounded-xl text-body-md text-slate-900'
  return (
    <div className="flex flex-col gap-space-xs">
      <label htmlFor={id} className="font-label-caps text-label-caps uppercase tracking-wider text-slate-500">
        {label}
      </label>
      {fieldKey === 'message' ? (
        <textarea id={id} rows={3} placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={classes} />
      ) : (
        <input id={id} type="text" placeholder={placeholder} value={value} onChange={(e) => onChange(e.target.value)} className={classes} />
      )}
    </div>
  )
}

export function DemoSection(): React.JSX.Element {
  const [values, setValues] = useState<Record<string, string>>({})

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    window.open(buildWhatsAppUrl(values), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id={LABS_DEMO_SECTION.anchorId} className="py-12 md:py-16 bg-white border-y border-slate-200">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <Reveal className="max-w-2xl mb-space-xl">
          <span className="font-label-caps text-label-caps uppercase tracking-wider text-emerald-700">
            {LABS_DEMO_SECTION.eyebrow}
          </span>
          <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900 mt-space-xs">
            {LABS_DEMO_SECTION.title}
          </h2>
          <p className="text-body-md text-slate-600 mt-space-xs">{LABS_DEMO_SECTION.description}</p>
        </Reveal>
        <Reveal>
          <form onSubmit={handleSubmit} className="skeuo-card rounded-2xl p-6 md:p-8 grid sm:grid-cols-2 gap-space-sm">
            {FIELDS.map(([key, field]) => (
              <Field
                key={key}
                fieldKey={key}
                label={field.label}
                placeholder={field.placeholder}
                value={values[key] ?? ''}
                onChange={(next) => setValues((current) => ({ ...current, [key]: next }))}
              />
            ))}
            <div className="sm:col-span-2 flex flex-col sm:flex-row gap-space-sm sm:items-center pt-space-xs">
              <button type="submit" className="skeuo-button-emerald inline-flex items-center justify-center gap-space-xs px-6 py-3 rounded-xl text-white text-sm font-semibold">
                <span>{LABS_DEMO_SECTION.submitLabel}</span>
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">chat</span>
              </button>
              <p className="text-body-sm text-slate-500">Abrimos o WhatsApp da equipe com suas respostas já preenchidas.</p>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
