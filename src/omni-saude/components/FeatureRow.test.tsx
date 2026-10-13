import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { FeatureRow } from './FeatureRow'

describe('FeatureRow', () => {
  it('renders the title as h2 by default', () => {
    render(<FeatureRow title="Na hora da consulta" description="Abre sem complicações." />)
    expect(screen.getByRole('heading', { level: 2, name: 'Na hora da consulta' })).toBeInTheDocument()
    expect(screen.getByText('Abre sem complicações.')).toBeInTheDocument()
  })

  it('renders the title as h3 when requested', () => {
    render(<FeatureRow title="Repositório de Arquivos" headingLevel="h3" />)
    expect(screen.getByRole('heading', { level: 3, name: 'Repositório de Arquivos' })).toBeInTheDocument()
  })

  it('renders the image with dimensions, alt and lazy loading', () => {
    render(
      <FeatureRow
        title="Título"
        image={{
          src: '/omni-saude/doctor_patient_care.webp',
          alt: 'Médica atenciosa',
          width: 1024,
          height: 1024,
        }}
      />
    )
    const img = screen.getByRole('img', { name: 'Médica atenciosa' })
    expect(img).toHaveAttribute('src', '/omni-saude/doctor_patient_care.webp')
    expect(img).toHaveAttribute('width', '1024')
    expect(img).toHaveAttribute('loading', 'lazy')
  })

  it('renders the icon tile with hygiene when there is no image', () => {
    render(<FeatureRow title="Título" icon="schedule" />)
    const icon = screen.getByText('schedule')
    expect(icon).toHaveAttribute('aria-hidden', 'true')
    expect(icon).toHaveAttribute('translate', 'no')
  })

  it('renders bullets, the badge, children and the CTA link', () => {
    render(
      <FeatureRow
        title="Título"
        badge="Experiência no Consultório"
        bullets={['Item um']}
        cta={{ label: 'Saiba como funciona para médicos', href: '/omni-saude/medicos' }}
      >
        <p>Conteúdo extra</p>
      </FeatureRow>
    )
    expect(screen.getByText('// Experiência no Consultório')).toBeInTheDocument()
    expect(screen.getByText('Item um')).toBeInTheDocument()
    expect(screen.getByText('Conteúdo extra')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Saiba como funciona/ })).toHaveAttribute(
      'href',
      '/omni-saude/medicos'
    )
  })
})
