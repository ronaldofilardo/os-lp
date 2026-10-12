import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BenefitsStrip } from './BenefitsStrip'

describe('BenefitsStrip', () => {
  it('keeps the section heading and the four reasons in the markup', () => {
    render(<BenefitsStrip />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Quatro motivos')
    for (const title of ['Feito sob Medida', 'Integrações Via API', 'Privacidade e LGPD', 'Sem Intermediários']) {
      expect(screen.getByText(title)).toBeInTheDocument()
    }
  })

  it('keeps the section anchor and label', () => {
    const { container } = render(<BenefitsStrip />)
    expect(container.querySelector('#beneficios')).toHaveAttribute('aria-labelledby', 'beneficios-heading')
  })
})
