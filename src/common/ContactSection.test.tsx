import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactSection } from './ContactSection'

vi.mock('./ContactForm', () => ({
  ContactForm: () => <div data-testid="contact-form" />,
}))

describe('ContactSection', () => {
  it('displays the standardized 30 years trust point', () => {
    render(<ContactSection />)
    expect(
      screen.getByText(/Atendimento direto com Arquiteto Sênior \(30 anos\)/)
    ).toBeInTheDocument()
  })

  it('renders the contact form and direct WhatsApp CTA', () => {
    render(<ContactSection />)
    expect(screen.getByTestId('contact-form')).toBeInTheDocument()
    expect(screen.getByText('Conversar Direto pelo WhatsApp')).toBeInTheDocument()
  })
})

