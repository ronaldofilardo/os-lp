import type { Metadata } from 'next'
import { PageHero } from '@/omni-saude/components/PageHero'
import { CADASTRO_CONTENT } from '@/omni-saude/data/cadastro'
import { CadastroShell } from '@/omni-saude/sections/CadastroShell'

const TITLE = 'Criar Conta — Omni Saúde'
const DESCRIPTION = 'Crie sua conta no OmniSaúde ou solicite a integração do seu laboratório.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/omni-saude/cadastro' },
  robots: { index: false, follow: false },
  openGraph: { title: TITLE, description: DESCRIPTION, siteName: 'Omni Sistemas', type: 'website', locale: 'pt_BR' },
}

export default function CadastroPage(): React.JSX.Element {
  return (
    <>
      <PageHero title={CADASTRO_CONTENT.title} />
      <CadastroShell />
    </>
  )
}
