import { Footer } from '@/common/Footer'
import { Header, type HeaderCta } from '@/common/Header'
import { NAV_LINKS_OMNISAUDE } from '@/common/navLinks'
import {
  OMNISAUDE_APP_LOGIN,
  OMNISAUDE_FOOTER_ANCHORS,
  OMNISAUDE_LEGAL_LINKS,
} from '@/omni-saude/data/navigation'

const OMNISAUDE_CTA: HeaderCta = {
  label: 'Criar conta',
  href: OMNISAUDE_APP_LOGIN,
  icon: 'person_add',
}

export default function OmniSaudeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>): React.JSX.Element {
  return (
    <div className="bg-[#f8fafc] text-slate-900 min-h-screen font-sans antialiased">
      <div className="scroll-progress" aria-hidden="true" />
      <Header links={NAV_LINKS_OMNISAUDE} cta={OMNISAUDE_CTA} theme="light" />
      <main className="pt-16">{children}</main>
      <Footer anchors={OMNISAUDE_FOOTER_ANCHORS} theme="light" legalLinks={OMNISAUDE_LEGAL_LINKS} />
    </div>
  )
}
