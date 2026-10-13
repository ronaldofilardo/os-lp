import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { CadastroShell } from './CadastroShell'
import { OMNISAUDE_APP_LOGIN } from '@/omni-saude/data/navigation'

describe('CadastroShell', () => {
  it('shows the profile split with both choices', () => {
    render(<CadastroShell />)
    expect(screen.getByRole('heading', { level: 2, name: 'Você é paciente ou emissor?' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sou Paciente/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Sou Emissor/ })).toBeInTheDocument()
  })

  it('personal flow shows fields and links the submit to the app login', () => {
    render(<CadastroShell />)
    fireEvent.click(screen.getByRole('button', { name: /Começar/ }))
    expect(
      screen.getByRole('heading', { level: 2, name: 'Preencha seus dados pessoais para criar sua conta.' })
    ).toBeInTheDocument()
    expect(screen.getByLabelText('Nome Completo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Criar Conta Grátis' })).toHaveAttribute('href', OMNISAUDE_APP_LOGIN)
  })

  it('business flow collects company data for WhatsApp and can go back', () => {
    const open = vi.fn()
    Object.defineProperty(window, 'open', { value: open, writable: true, configurable: true })
    render(<CadastroShell />)
    fireEvent.click(screen.getByRole('button', { name: /Quero integrar/ }))
    expect(screen.getByText('Solicitação de Integração')).toBeInTheDocument()
    expect(screen.getByLabelText('Nome da Empresa / Razão Social')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Solicitar Integração' }))
    expect(open).toHaveBeenCalledTimes(1)
    fireEvent.click(screen.getByRole('button', { name: 'Voltar' }))
    expect(screen.getByRole('heading', { level: 2, name: 'Você é paciente ou emissor?' })).toBeInTheDocument()
  })
})
