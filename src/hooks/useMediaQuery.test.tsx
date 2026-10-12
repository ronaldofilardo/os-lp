import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { REDUCED_MOTION, installMatchMedia, setMedia } from '@/test/mocks'
import { useMediaQuery } from './useMediaQuery'
import { useReducedMotion } from './useReducedMotion'

const WIDE = '(min-width: 1024px)'

function QueryProbe(): React.JSX.Element {
  return <span data-testid="query">{String(useMediaQuery(WIDE))}</span>
}

function ReducedProbe(): React.JSX.Element {
  return <span data-testid="reduced">{String(useReducedMotion())}</span>
}

describe('useMediaQuery', () => {
  it('is false when the query does not match', () => {
    render(<QueryProbe />)
    expect(screen.getByTestId('query')).toHaveTextContent('false')
  })

  it('is true when the query already matches', () => {
    installMatchMedia({ [WIDE]: true })
    render(<QueryProbe />)
    expect(screen.getByTestId('query')).toHaveTextContent('true')
  })

  it('updates when the media query changes', () => {
    render(<QueryProbe />)
    setMedia(WIDE, true)
    expect(screen.getByTestId('query')).toHaveTextContent('true')
    setMedia(WIDE, false)
    expect(screen.getByTestId('query')).toHaveTextContent('false')
  })
})

describe('useReducedMotion', () => {
  it('is false by default', () => {
    render(<ReducedProbe />)
    expect(screen.getByTestId('reduced')).toHaveTextContent('false')
  })

  it('follows prefers-reduced-motion', () => {
    render(<ReducedProbe />)
    setMedia(REDUCED_MOTION, true)
    expect(screen.getByTestId('reduced')).toHaveTextContent('true')
  })
})
