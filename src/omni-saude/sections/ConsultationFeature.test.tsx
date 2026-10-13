import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ConsultationFeature } from './ConsultationFeature'

describe('ConsultationFeature', () => {
  it('renders the consultation title as h2 with the badge', () => {
    render(<ConsultationFeature />)
    expect(
      screen.getByRole('heading', { level: 2, name: /Na hora da consulta, seu histórico abre sem complicações\./ })
    ).toBeInTheDocument()
    expect(screen.getByText('// Experiência no Consultório')).toBeInTheDocument()
  })

  it('renders the three consultation steps', () => {
    render(<ConsultationFeature />)
    expect(screen.getByText('Você gera um link temporário no app')).toBeInTheDocument()
    expect(screen.getByText('O médico visualiza direto na tela')).toBeInTheDocument()
    expect(screen.getByText('Sua privacidade continua intacta')).toBeInTheDocument()
  })

  it('renders the lazy image and links to the doctors page', () => {
    render(<ConsultationFeature />)
    const img = screen.getByRole('img', { name: /Médica atenciosa/ })
    expect(img).toHaveAttribute('loading', 'lazy')
    expect(screen.getByRole('link', { name: /Saiba como funciona para médicos/ })).toHaveAttribute(
      'href',
      '/omni-saude/medicos'
    )
  })
})
