import { describe, it, expect } from 'vitest'
import { render } from '@testing-library/react'
import { SceneFallback } from './SceneFallback'

describe('SceneFallback', () => {
  it('draws a six-faced CSS cube', () => {
    const { container } = render(<SceneFallback />)
    expect(container.querySelectorAll('.css-cube > span')).toHaveLength(6)
  })

  it('is hidden from assistive technology', () => {
    const { container } = render(<SceneFallback />)
    expect(container.firstElementChild).toHaveAttribute('aria-hidden', 'true')
  })
})
