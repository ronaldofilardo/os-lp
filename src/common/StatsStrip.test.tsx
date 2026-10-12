import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { StatsStrip } from './StatsStrip'

describe('StatsStrip', () => {
  it('renders the four methodology numbers with their labels', () => {
    render(<StatsStrip />)
    expect(screen.getByText('30 anos')).toBeInTheDocument()
    expect(screen.getByText('< 100')).toBeInTheDocument()
    expect(screen.getByText('0 any')).toBeInTheDocument()
    expect(screen.getByText('5 dias')).toBeInTheDocument()
    expect(screen.getByText('linhas por arquivo')).toBeInTheDocument()
  })

  it('is exposed as a labelled region', () => {
    render(<StatsStrip />)
    expect(screen.getByLabelText('Números da metodologia')).toBeInTheDocument()
  })
})
