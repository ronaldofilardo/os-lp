import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { RigorStrip } from './RigorStrip'

describe('RigorStrip', () => {
  it('displays the standardized 1996 experience copy', () => {
    render(<RigorStrip />)
    expect(screen.getByText('1996')).toBeInTheDocument()
    expect(screen.getByText(/Experiência comprovada desde/)).toBeInTheDocument()
  })

  it('displays the standardized 30 years stat number', () => {
    render(<RigorStrip />)
    expect(screen.getByText('30')).toBeInTheDocument()
    expect(screen.getByText(/anos construindo/)).toBeInTheDocument()
  })

  it('links to the methodology page', () => {
    render(<RigorStrip />)
    expect(screen.getByRole('link', { name: /metodologia técnica/i })).toHaveAttribute(
      'href',
      '/metodologia'
    )
  })
})

