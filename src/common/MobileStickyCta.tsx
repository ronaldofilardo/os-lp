'use client'

import { useEffect, useState } from 'react'
import { SITE } from '@/config/site'

export function MobileStickyCta(): React.JSX.Element | null {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = (): void => {
      const scrollY = window.scrollY
      const contactSection = document.getElementById('contato')
      if (!contactSection) {
        setIsVisible(scrollY > 280)
        return
      }

      const rect = contactSection.getBoundingClientRect()
      // Oculta quando o formulário de contato entra na viewport
      const isContactInView = rect.top < window.innerHeight && rect.bottom > 0
      setIsVisible(scrollY > 280 && !isContactInView)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  if (!isVisible) return null

  return (
    <aside
      aria-label="Ações rápidas de contato"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/80 px-4 py-2.5 shadow-2xl transition-all duration-300 ease-out"
      style={{ paddingBottom: 'max(0.625rem, env(safe-area-inset-bottom))' }}
    >
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="#contato"
          className="skeuo-button-primary flex-1 inline-flex items-center justify-center gap-1.5 h-11 px-4 rounded-xl text-white font-semibold text-xs tracking-wide shadow-sm"
        >
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[18px]">
            assignment
          </span>
          <span>Agendar Diagnóstico</span>
        </a>
        <a
          href={SITE.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Conversar no WhatsApp ${SITE.whatsapp.display}`}
          className="skeuo-button-emerald inline-flex items-center justify-center w-11 h-11 rounded-xl text-white shadow-sm shrink-0"
        >
          <span aria-hidden="true" translate="no" className="material-symbols-outlined text-[20px]">
            chat
          </span>
        </a>
      </div>
    </aside>
  )
}
