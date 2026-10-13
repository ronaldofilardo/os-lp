import { SITE } from '@/config/site'
import type { NavLink } from './navLinks'
import type { HeaderTheme } from './Header'

const HOME_ANCHORS: readonly NavLink[] = [
  { href: '#servicos', label: 'Soluções' },
  { href: '#como-trabalhamos', label: 'Como Trabalhamos' },
  { href: '#integracoes', label: 'Integrações' },
  { href: '#projetos', label: 'Projetos' },
  { href: '#sobre', label: 'Sobre a Omni Sistemas' },
] as const

const LINKS_INSTITUTIONAL: readonly NavLink[] = [
  { href: '/metodologia', label: 'Metodologia STE-DEV' },
  { href: '/artigos', label: 'Artigos' },
  { href: '/conhecimento', label: 'Base de Conhecimento' },
] as const

interface FooterProps {
  readonly anchors?: readonly NavLink[]
  readonly theme?: HeaderTheme
  readonly legalLinks?: readonly NavLink[]
}

export function Footer({
  anchors = HOME_ANCHORS,
  theme = 'dark',
  legalLinks,
}: FooterProps): JSX.Element {
  const light = theme === 'light'

  const wrap = light
    ? 'w-full bg-white border-t border-slate-200 py-space-lg md:py-space-xl'
    : 'w-full bg-surface-container-lowest border-t border-[#1e293b]/40 py-space-lg md:py-space-xl'
  const brand = light ? 'text-slate-900' : 'text-on-surface'
  const muted = light ? 'text-slate-600' : 'text-on-surface-variant'
  const label = light ? 'text-slate-500' : 'text-on-surface-variant'
  const linkHover = light ? 'hover:text-sky-600' : 'hover:text-primary'
  const contactHover = light ? 'hover:text-emerald-700' : 'hover:text-secondary'
  const border = light ? 'border-slate-100' : 'border-[#1e293b]/30'

  return (
    <footer className={wrap}>
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-space-lg md:gap-space-xl pb-space-lg border-b ${border}`}>
          <div className="md:col-span-5 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img
                src="/logo-Omni-Sistema-peq.webp"
                alt="Omni Sistema"
                width={36}
                height={36}
                className="h-9 w-9 rounded-md object-cover shadow-sm"
              />
              <span className={`font-headline-sm text-headline-sm ${brand} font-semibold`}>Omni Sistemas</span>
            </div>
            <p className={`text-sm ${muted} max-w-sm leading-relaxed`}>
              Sistemas sob medida e automação inteligente para empresas que precisam eliminar gargalos
              operacionais. Desenvolvimento, integrações e modernização de legados.
            </p>
            <div className={`flex items-center gap-space-xs text-sm ${light ? 'text-emerald-700' : 'text-secondary'}`}>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">verified</span>
              <span>Desde 1997 • Atendimento direto com quem projeta</span>
            </div>
            <div className="flex flex-col gap-1 mt-1">
              <a
                href={SITE.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-space-xs w-fit text-sm ${brand} ${contactHover} transition-colors`}
              >
                <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[16px]">chat</span>
                <span>WhatsApp {SITE.whatsapp.display}</span>
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className={`inline-flex items-center gap-space-xs w-fit text-sm ${brand} ${linkHover} transition-colors`}
              >
                <span aria-hidden="true" translate="no" className={`material-symbols-outlined text-[16px] ${light ? 'text-sky-600' : 'text-primary'}`}>mail</span>
                <span>{SITE.email}</span>
              </a>
            </div>
          </div>
          <div className="md:col-span-4 flex flex-col gap-space-xs">
            <span className={`font-label-caps text-label-caps uppercase ${label} tracking-wider`}>Navegação</span>
            <div className={`flex flex-col gap-space-xs ${light ? 'text-sm' : 'font-code-md text-code-md'}`}>
              {anchors.map((link) => (
                <a key={link.href} className={`${muted} ${linkHover} transition-colors`} href={link.href}>{link.label}</a>
              ))}
            </div>
          </div>
          <div className="md:col-span-3 flex flex-col gap-space-xs">
            <span className={`font-label-caps text-label-caps uppercase ${label} tracking-wider`}>Institucional</span>
            <div className={`flex flex-col gap-space-xs ${light ? 'text-sm' : 'font-code-md text-code-md'}`}>
              {LINKS_INSTITUTIONAL.map((link) => (
                <a key={link.href} className={`${muted} ${linkHover} transition-colors`} href={link.href}>{link.label}</a>
              ))}
              {legalLinks?.map((link) => (
                <a
                  key={link.href}
                  className={`${muted} ${linkHover} transition-colors`}
                  href={link.href}
                  target={link.href.endsWith('.pdf') ? '_blank' : undefined}
                  rel={link.href.endsWith('.pdf') ? 'noopener noreferrer' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div
              className={
                light
                  ? 'p-space-sm rounded-xl bg-slate-50 border border-slate-200 mt-2'
                  : 'p-space-sm rounded-xl bg-surface-container-low/60 border border-[#1e293b]/40 mt-2'
              }
            >
              <span className={`text-xs ${muted} leading-relaxed block`}>
                A Omni Sistema faz parte da <strong className={`${brand} font-medium`}>BE SMART LTDA</strong>
                <br />
                CNPJ 55.405.487/0001-84
              </span>
            </div>
          </div>
        </div>

        <div className={`pt-space-md pb-space-sm border-b ${light ? 'border-slate-100' : 'border-[#1e293b]/20'} text-center`}>
          <p className={`font-sans text-xs ${light ? 'text-slate-600' : 'text-on-surface-variant/80'} max-w-3xl mx-auto leading-relaxed select-text tracking-normal`}>
            “Mas em todas essas coisas somos mais que vencedores por meio daquele que nos amou. Pois estou convencido de que nem a morte, nem a vida, nem os anjos, nem os demônios, nem o presente, nem o futuro, nem poderes, nem altura, nem profundidade, nem ninguém em toda a criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, o nosso Senhor”. <span className={`font-sans text-[11px] ${light ? 'text-slate-500' : 'text-on-surface-variant/60'} ml-1`}>Rm 8:37-39 NVI</span>
          </p>
        </div>

        <div className={`pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-xs ${muted}`}>
          <span>© 2026 Omni Sistema • BE SMART LTDA — CNPJ 55.405.487/0001-84</span>
          <div className="flex items-center gap-space-md">
            <a href="/metodologia" className={`${linkHover} transition-colors`}>Metodologia STE-DEV</a>
            <a href="/#contato" className={`${linkHover} transition-colors`}>Contato</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
