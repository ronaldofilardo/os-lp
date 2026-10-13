import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('keeps the institutional links when no legal links are given', () => {
    render(<Footer theme="light" />)
    expect(screen.getAllByRole('link', { name: 'Metodologia STE-DEV' }).length).toBeGreaterThan(0)
    expect(screen.queryByRole('link', { name: 'Termos de Uso' })).not.toBeInTheDocument()
  })

  it('renders the legal links alongside the institutional ones', () => {
    render(
      <Footer
        theme="light"
        legalLinks={[
          { href: '/omni-saude/termos-de-uso.pdf', label: 'Termos de Uso' },
          { href: '/omni-saude/politica-de-privacidade.pdf', label: 'Política de Privacidade' },
        ]}
      />
    )
    const termos = screen.getByRole('link', { name: 'Termos de Uso' })
    expect(termos).toHaveAttribute('href', '/omni-saude/termos-de-uso.pdf')
    expect(termos).toHaveAttribute('target', '_blank')
    expect(termos.getAttribute('rel')).toContain('noopener')
    expect(screen.getByRole('link', { name: 'Política de Privacidade' })).toBeInTheDocument()
  })

  it('does not force a new tab on non PDF legal links', () => {
    render(<Footer theme="light" legalLinks={[{ href: '/omni-saude', label: 'Omni Saúde' }]} />)
    expect(screen.getByRole('link', { name: 'Omni Saúde' })).not.toHaveAttribute('target')
  })

  it('renders the custom navigation anchors', () => {
    render(
      <Footer
        theme="light"
        anchors={[{ href: '/omni-saude/seguranca', label: 'Segurança' }]}
      />
    )
    expect(screen.getByRole('link', { name: 'Segurança' })).toHaveAttribute(
      'href',
      '/omni-saude/seguranca'
    )
  })
})
