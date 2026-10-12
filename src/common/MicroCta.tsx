import { SITE } from '@/config/site'
import type { HeaderTheme } from './Header'

interface MicroCtaProps {
  readonly label?: string
  readonly formHref?: string
  readonly theme?: HeaderTheme
}

export function MicroCta({
  label = 'Pronto para eliminar dívida técnica?',
  formHref = '#contato',
  theme = 'dark',
}: MicroCtaProps): React.JSX.Element {
  const light = theme === 'light'

  return (
    <div className="w-full py-space-sm">
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div
          className={
            light
              ? 'skeuo-card-sky flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm rounded-2xl px-space-lg py-space-sm'
              : 'flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm rounded-2xl border border-outline-variant/40 bg-surface-container-low/60 px-space-lg py-space-sm'
          }
        >
          <span className={light ? 'text-sm text-slate-700 font-medium' : 'font-code-sm text-code-sm text-on-surface-variant'}>
            {light
              ? `${label} • Atendimento direto com quem projeta`
              : `${label} • Atendimento técnico direto pelo arquiteto responsável`}
          </span>
          <div className="flex items-center gap-space-sm">
            <a
              href={SITE.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={
                light
                  ? 'skeuo-button-emerald inline-flex items-center gap-space-xs px-space-md py-2 rounded-xl text-white text-sm font-semibold'
                  : 'inline-flex items-center gap-space-xs px-space-md py-2 rounded-xl bg-secondary-container text-on-secondary-container font-headline-sm text-body-sm font-semibold hover:bg-secondary transition-colors'
              }
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">chat</span>
              <span>WhatsApp {SITE.whatsapp.display}</span>
            </a>
            <a
              href={formHref}
              className={light ? 'text-sm text-sky-700 hover:underline whitespace-nowrap' : 'font-code-sm text-code-sm text-primary hover:underline whitespace-nowrap'}
            >
              Formulário →
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
