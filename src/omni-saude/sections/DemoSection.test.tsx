import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { DemoSection } from './DemoSection'
import { SITE } from '@/config/site'

describe('DemoSection', () => {
  it('renders the demo heading and every form field', () => {
    render(<DemoSection />)
    expect(screen.getByRole('heading', { level: 2, name: 'Solicitar demonstração' })).toBeInTheDocument()
    expect(screen.getByLabelText('Nome Completo')).toBeInTheDocument()
    expect(screen.getByLabelText('E-mail Corporativo')).toBeInTheDocument()
    expect(screen.getByLabelText('Mensagem (Opcional)')).toBeInTheDocument()
  })

  it('is anchored to the solicitar-demo section', () => {
    const { container } = render(<DemoSection />)
    expect(container.querySelector('section')).toHaveAttribute('id', 'solicitar-demo')
  })

  it('opens WhatsApp with the filled answers on submit', () => {
    const open = vi.fn()
    Object.defineProperty(window, 'open', { value: open, writable: true, configurable: true })
    render(<DemoSection />)
    fireEvent.change(screen.getByLabelText('Nome Completo'), { target: { value: 'João' } })
    fireEvent.change(screen.getByLabelText('E-mail Corporativo'), { target: { value: 'joao@lab.com.br' } })
    fireEvent.click(screen.getByRole('button', { name: /Solicitar Demonstração/ }))
    expect(open).toHaveBeenCalledTimes(1)
    const [url] = open.mock.calls[0] as [string]
    expect(url.startsWith(`${SITE.whatsapp.url}?text=`)).toBe(true)
    expect(decodeURIComponent(url)).toContain('João')
    expect(decodeURIComponent(url)).toContain('joao@lab.com.br')
  })
})
