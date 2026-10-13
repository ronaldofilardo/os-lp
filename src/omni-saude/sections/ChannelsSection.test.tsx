import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ChannelsSection } from './ChannelsSection'
import { SITE } from '@/config/site'

describe('ChannelsSection', () => {
  it('renders the channels heading as h2 with the response promise', () => {
    render(<ChannelsSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Canais Diretos de Atendimento' })).toBeInTheDocument()
    expect(screen.getByText('Nossa equipe responde em até 24 horas úteis.')).toBeInTheDocument()
  })

  it('links WhatsApp and the corporate e-mail', () => {
    render(<ChannelsSection />)
    expect(screen.getByRole('link', { name: /WhatsApp Oficial/ })).toHaveAttribute('href', SITE.whatsapp.url)
    expect(screen.getByRole('link', { name: /E-mail Corporativo/ })).toHaveAttribute(
      'href',
      'mailto:contato@omnisaude.com.br'
    )
  })

  it('shows the business hours', () => {
    render(<ChannelsSection />)
    expect(screen.getByText('Horário de Atendimento: Segunda a Sexta, das 08h às 18h')).toBeInTheDocument()
  })
})
