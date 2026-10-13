import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { CalloutBand } from './CalloutBand'

describe('CalloutBand', () => {
  it('renders the title as h2 by default with eyebrow and description', () => {
    render(
      <CalloutBand eyebrow="Conformidade com a LGPD" title="Seus dados são seus." description="Criptografia bancária." />
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Seus dados são seus.' })).toBeInTheDocument()
    expect(screen.getByText('// Conformidade com a LGPD')).toBeInTheDocument()
    expect(screen.getByText('Criptografia bancária.')).toBeInTheDocument()
  })

  it('renders the title as a paragraph when headingLevel is p', () => {
    const { container } = render(<CalloutBand title="Compartilhamento bloqueado por middleware." headingLevel="p" />)
    expect(container.querySelector('h2')).not.toBeInTheDocument()
    expect(screen.getByText('Compartilhamento bloqueado por middleware.').tagName).toBe('P')
  })

  it('links the optional CTA and keeps icon hygiene', () => {
    render(
      <CalloutBand title="Título" icon="lock" cta={{ label: 'Ver detalhes de segurança', href: '/omni-saude/seguranca' }} />
    )
    expect(screen.getByRole('link', { name: /Ver detalhes/ })).toHaveAttribute('href', '/omni-saude/seguranca')
    const icon = screen.getByText('lock')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('translate', 'no')
  })
})
