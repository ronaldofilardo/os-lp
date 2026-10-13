import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { DataLocationTable } from './DataLocationTable'

const ROWS = [
  { label: 'Provedor', value: 'AWS' },
  { label: 'Região', value: 'sa-east-1 (São Paulo)' },
  { label: 'Backup', value: 'diário + PITR de 35 dias' },
] as const

describe('DataLocationTable', () => {
  it('renders the title as h2 and the description', () => {
    render(
      <DataLocationTable
        title="Onde os dados ficam"
        description="A verdade, sem marketing de nuvem genérica."
        rows={ROWS}
      />
    )
    expect(screen.getByRole('heading', { level: 2, name: 'Onde os dados ficam' })).toBeInTheDocument()
    expect(screen.getByText('A verdade, sem marketing de nuvem genérica.')).toBeInTheDocument()
  })

  it('renders every row as a term/definition pair', () => {
    const { container } = render(<DataLocationTable title="Onde os dados ficam" rows={ROWS} />)
    expect(container.querySelectorAll('dt')).toHaveLength(3)
    expect(container.querySelectorAll('dd')).toHaveLength(3)
    expect(screen.getByText('Provedor')).toBeInTheDocument()
    expect(screen.getByText('sa-east-1 (São Paulo)')).toBeInTheDocument()
    expect(screen.getByText('diário + PITR de 35 dias')).toBeInTheDocument()
  })

  it('keeps the last row without a divider', () => {
    const { container } = render(<DataLocationTable title="Dados" rows={ROWS} />)
    const rows = container.querySelectorAll('dl > div')
    expect(rows).toHaveLength(3)
    expect(rows[2]).not.toHaveClass('border-b')
    expect(rows[0]).toHaveClass('border-b')
  })

  it('omits the description when it is not provided', () => {
    const { container } = render(<DataLocationTable title="Dados" rows={ROWS} />)
    expect(container.querySelector('h2 + p')).not.toBeInTheDocument()
  })
})
