import { MobileMenu } from './MobileMenu'
import { NAV_LINKS, type NavLink } from './navLinks'
import { SITE } from '@/config/site'

export interface HeaderCta {
  readonly label: string
  readonly href: string
  readonly icon: string
}

export type HeaderTheme = 'dark' | 'light'

interface HeaderProps {
  readonly links?: readonly NavLink[]
  readonly cta?: HeaderCta
  readonly theme?: HeaderTheme
}

const COMMERCIAL_CTA: HeaderCta = {
  label: 'Agendar Diagnóstico',
  href: '#contato',
  icon: 'assignment',
}

function isLight(theme: HeaderTheme): boolean {
  return theme === 'light'
}

function logoLinkClass(): string {
  return 'flex items-center gap-space-xs group shrink-0'
}

function brandClass(theme: HeaderTheme): string {
  return isLight(theme)
    ? 'font-headline-sm text-headline-sm text-slate-900 font-semibold whitespace-nowrap'
    : 'font-headline-sm text-headline-sm text-on-surface font-semibold whitespace-nowrap'
}

function navClass(theme: HeaderTheme): string {
  return isLight(theme)
    ? 'hidden lg:flex items-center gap-3 xl:gap-space-md 2xl:gap-space-lg font-medium text-sm text-slate-600'
    : 'hidden lg:flex items-center gap-3 xl:gap-space-md 2xl:gap-space-lg font-code-sm text-code-sm text-on-surface-variant'
}

function navLinkClass(theme: HeaderTheme): string {
  return isLight(theme)
    ? 'hover:text-sky-600 transition-colors whitespace-nowrap'
    : 'hover:text-primary transition-colors whitespace-nowrap'
}

function whatsappClass(theme: HeaderTheme): string {
  return isLight(theme)
    ? 'skeuo-button-ghost inline-flex items-center gap-space-xs px-space-md py-2 rounded-xl text-emerald-700 text-sm font-semibold whitespace-nowrap shrink-0 hidden xl:inline-flex'
    : 'inline-flex items-center gap-space-xs px-space-md py-2 rounded bg-secondary-container text-on-secondary-container font-headline-sm text-body-md font-semibold hover:bg-secondary transition-colors whitespace-nowrap shrink-0 hidden xl:inline-flex'
}

function ctaClass(theme: HeaderTheme): string {
  return isLight(theme)
    ? 'skeuo-button-primary inline-flex items-center gap-space-xs px-4 py-2 rounded-xl text-white text-sm font-semibold whitespace-nowrap shrink-0 hidden sm:inline-flex'
    : 'inline-flex items-center gap-space-xs px-4 py-2 rounded bg-primary-container text-on-primary-container font-headline-sm text-body-md font-semibold hover:bg-primary transition-colors whitespace-nowrap shrink-0 hidden sm:inline-flex'
}

export function Header({
  links = NAV_LINKS,
  cta = COMMERCIAL_CTA,
  theme = 'dark',
}: HeaderProps): JSX.Element {
  const light = isLight(theme)

  return (
    <header
      className={
        light
          ? 'fixed top-0 w-full z-50 bg-white/85 backdrop-blur-xl border-b border-slate-200'
          : 'fixed top-0 w-full z-50 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-outline-variant/30'
      }
    >
      <div className="max-w-container mx-auto px-margin-mobile md:px-margin-tablet lg:px-margin">
        <div className="h-16 flex items-center justify-between">
          <a href="/" className={logoLinkClass()}>
            <img
              src="/logo-Omni-Sistema-peq.webp"
              alt="Logo Omni Sistema"
              width={32}
              height={32}
              className="h-8 w-8 rounded-md object-cover shadow-sm group-hover:scale-105 transition-transform"
            />
            <span className={brandClass(theme)}>Omni Sistemas</span>
          </a>
          <nav aria-label="Navegação principal" className={navClass(theme)}>
            {links.map((link) => (
              <a key={link.href} href={link.href} className={navLinkClass(theme)}>{link.label}</a>
            ))}
          </nav>
          <div className="flex items-center gap-space-sm sm:gap-space-md shrink-0">
            <a
              href={SITE.whatsapp.url}
              target="_blank"
              rel="noopener noreferrer"
              className={whatsappClass(theme)}
            >
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">chat</span>
              <span>WhatsApp</span>
            </a>
            <a href={cta.href} className={ctaClass(theme)}>
              <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">{cta.icon}</span>
              <span>{cta.label}</span>
            </a>
            <MobileMenu links={links} cta={cta} theme={theme} />
          </div>
        </div>
      </div>
    </header>
  )
}
