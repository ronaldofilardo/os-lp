import { describe, it, expect, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { BusinessPanel } from './BusinessPanel'

describe('BusinessPanel', () => {
  it('renders the panel title, rows and integrations', () => {
    render(<BusinessPanel />)
    expect(screen.getByText('Painel de Operação')).toBeInTheDocument()
    expect(screen.getByText('R$ 12.480')).toBeInTheDocument()
    expect(screen.getByText('38 boletos')).toBeInTheDocument()
    for (const label of ['Asaas', 'Banco', 'ERP', 'WhatsApp']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('updates the live values over time', () => {
    vi.useFakeTimers()
    render(<BusinessPanel />)
    act(() => {
      vi.advanceTimersByTime(2800)
    })
    expect(screen.getByText('R$ 12.660')).toBeInTheDocument()
  })

  it('highlights one row at a time', () => {
    vi.useFakeTimers()
    const { container } = render(<BusinessPanel />)
    expect(container.querySelectorAll('.bg-sky-50\\/80')).toHaveLength(1)
    act(() => {
      vi.advanceTimersByTime(2800)
    })
    expect(container.querySelectorAll('.bg-sky-50\\/80')).toHaveLength(1)
  })

  it('keeps the decorative animation layers hidden from assistive tech', () => {
    const { container } = render(<BusinessPanel />)
    expect(container.querySelector('.panel-scan')).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('.panel-glow')).toHaveAttribute('aria-hidden', 'true')
  })
})
