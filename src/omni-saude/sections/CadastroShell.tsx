'use client'

import { useState } from 'react'
import { Reveal } from '@/motion/Reveal'
import {
  CADASTRO_BUSINESS_FIELDS,
  CADASTRO_BUSINESS_NOTICE,
  CADASTRO_CHOICES,
  CADASTRO_CONTENT,
  CADASTRO_PERSONAL_FIELDS,
  CADASTRO_SUBMIT,
} from '@/omni-saude/data/cadastro'
import { businessWhatsAppUrl, ChoiceButton, FieldRow } from './CadastroParts'

type Choice = 'personal' | 'business'

export function CadastroShell(): React.JSX.Element {
  const [choice, setChoice] = useState<Choice | null>(null)
  const [values, setValues] = useState<Record<string, string>>({})

  if (choice === null) {
    return (
      <Reveal className="max-w-4xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pb-12">
        <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900 text-center">
          {CADASTRO_CONTENT.splitSubtitle}
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 mt-space-lg">
          {CADASTRO_CHOICES.map((option, index) => (
            <ChoiceButton key={option.title} choice={option} onPick={() => setChoice(index === 0 ? 'personal' : 'business')} />
          ))}
        </div>
      </Reveal>
    )
  }

  const fields = choice === 'personal' ? CADASTRO_PERSONAL_FIELDS : CADASTRO_BUSINESS_FIELDS
  return (
    <Reveal className="max-w-2xl mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin pb-12">
      <h2 className="font-headline-lg text-2xl md:text-3xl font-semibold text-slate-900">
        {choice === 'personal' ? CADASTRO_CONTENT.personalSubtitle : CADASTRO_CONTENT.businessSubtitle}
      </h2>
      {choice === 'business' ? (
        <div className="skeuo-card-sky rounded-2xl p-5 mt-space-md">
          <span className="font-headline-sm text-headline-sm text-slate-900">{CADASTRO_BUSINESS_NOTICE.title}</span>
          <p className="text-body-sm text-slate-600 mt-1">{CADASTRO_BUSINESS_NOTICE.description}</p>
        </div>
      ) : null}
      <div className="flex flex-col gap-space-sm mt-space-md">
        {fields.map((field) => (
          <FieldRow key={field.id} field={field} value={values[field.id] ?? ''} onChange={(next) => setValues((current) => ({ ...current, [field.id]: next }))} />
        ))}
      </div>
      <div className="flex flex-col sm:flex-row gap-space-sm mt-space-md">
        {choice === 'personal' ? (
          <a href={CADASTRO_SUBMIT.href} className="skeuo-button-emerald inline-flex items-center justify-center px-6 py-3 rounded-xl text-white text-sm font-semibold">
            {CADASTRO_SUBMIT.personalLabel}
          </a>
        ) : (
          <button type="button" onClick={() => window.open(businessWhatsAppUrl(values), '_blank', 'noopener,noreferrer')} className="skeuo-button-emerald inline-flex items-center justify-center px-6 py-3 rounded-xl text-white text-sm font-semibold">
            {CADASTRO_SUBMIT.businessLabel}
          </button>
        )}
        <button type="button" onClick={() => setChoice(null)} className="skeuo-button-ghost inline-flex items-center justify-center px-6 py-3 rounded-xl text-slate-700 text-sm font-semibold">
          {CADASTRO_SUBMIT.backLabel}
        </button>
      </div>
    </Reveal>
  )
}
