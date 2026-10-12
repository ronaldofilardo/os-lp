'use client'

import { useEffect, useState } from 'react'
import { NAV_LINKS, type NavLink } from './navLinks'
import type { HeaderCta, HeaderTheme } from './Header'

const COMMERCIAL_CTA: HeaderCta = {
  label: 'Solicitar Orçamento',
  href: '#contato',
  icon: 'description',
}

interface MobileMenuProps {
  readonly links?: readonly NavLink[]
  readonly cta?: HeaderCta
  readonly theme?: HeaderTheme
}

export function MobileMenu({
  links = NAV_LINKS,
  cta = COMMERCIAL_CTA,
  theme = 'dark',
}: MobileMenuProps): React.JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const light = theme === 'light'

  useEffect(() => {
    if (!isOpen) return
    const onKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') setIsOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [isOpen])

  const close = (): void => setIsOpen(false)
  const panelState = isOpen ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0 invisible'

  return (
    <div className="lg:hidden">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls="mobile-nav"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        onClick={() => setIsOpen((current) => !current)}
        className={
          light
            ? 'w-10 h-10 flex items-center justify-center rounded border border-slate-300 text-slate-700 active:bg-slate-100'
            : 'w-10 h-10 flex items-center justify-center rounded border border-outline-variant/50 text-on-surface active:bg-surface-container-high'
        }
      >
        <span aria-hidden="true" translate="no" className="material-symbols-outlined">{isOpen ? 'close' : 'menu'}</span>
      </button>
      <nav
        id="mobile-nav"
        aria-label="Navegação móvel"
        className={`absolute left-0 right-0 top-full overflow-hidden border-b transition-all duration-300 ${
          light
            ? `bg-white border-slate-200 ${panelState}`
            : `bg-surface-container-lowest border-outline-variant/30 ${panelState}`
        }`}
      >
        <ul className={`px-margin-mobile py-space-sm flex flex-col ${light ? 'text-base' : 'font-code-md text-code-md'}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={close}
                className={
                  light
                    ? 'block py-3 text-slate-600 border-b border-slate-100 active:text-sky-600'
                    : 'block py-3 text-on-surface-variant border-b border-outline-variant/20 active:text-primary'
                }
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="px-margin-mobile pb-space-md">
          <a
            href={cta.href}
            onClick={close}
            className={
              light
                ? 'w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded bg-sky-600 text-white font-semibold'
                : 'w-full inline-flex items-center justify-center gap-space-xs px-space-lg py-3 rounded bg-primary-container text-on-primary-container font-semibold'
            }
          >
            <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">{cta.icon}</span>
            <span>{cta.label}</span>
          </a>
        </div>
      </nav>
    </div>
  )
}
