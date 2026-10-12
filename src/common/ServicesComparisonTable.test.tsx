import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ServicesComparisonTable } from './ServicesComparisonTable'

describe('ServicesComparisonTable', () => {
  it('renders one column per service plus the aspect column', () => {
    render(<ServicesComparisonTable />)
    expect(screen.getAllByRole('columnheader')).toHaveLength(4)
    expect(screen.getByRole('columnheader', { name: 'Aspecto' })).toBeInTheDocument()
  })

  it('renders the five comparison rows', () => {
    render(<ServicesComparisonTable />)
    expect(screen.getAllByRole('rowheader')).toHaveLength(5)
    expect(screen.getByRole('rowheader', { name: 'Melhor para' })).toBeInTheDocument()
  })

  it('marks every cell with a check icon', () => {
    render(<ServicesComparisonTable />)
    expect(screen.getAllByText('check_circle')).toHaveLength(15)
  })

  it('uses a strong coloured header and distinct column accents', () => {
    const { container } = render(<ServicesComparisonTable />)
    expect(container.querySelector('.from-sky-700')).toBeInTheDocument()
    expect(container.querySelector('.border-t-sky-500')).toBeInTheDocument()
    expect(container.querySelector('.border-t-emerald-500')).toBeInTheDocument()
    expect(container.querySelector('.border-t-indigo-500')).toBeInTheDocument()
  })

  it('stays keyboard scrollable and labelled', () => {
    render(<ServicesComparisonTable />)
    expect(screen.getByRole('region', { name: 'Comparativo de serviços' })).toHaveAttribute('tabindex', '0')
  })
})
