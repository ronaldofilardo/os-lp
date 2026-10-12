import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { setIntersecting } from '@/test/mocks'
import { LazyOnView } from './LazyOnView'

describe('LazyOnView', () => {
  it('shows the fallback and does not mount the scene before it is visible', () => {
    render(
      <LazyOnView fallback={<span>carregando</span>}>
        <span>cena</span>
      </LazyOnView>,
    )
    expect(screen.getByText('carregando')).toBeInTheDocument()
    expect(screen.queryByText('cena')).not.toBeInTheDocument()
  })

  it('mounts the scene once it enters the viewport', () => {
    render(
      <LazyOnView fallback={<span>carregando</span>}>
        <span>cena</span>
      </LazyOnView>,
    )
    setIntersecting(true)
    expect(screen.getByText('cena')).toBeInTheDocument()
    expect(screen.queryByText('carregando')).not.toBeInTheDocument()
  })

  it('keeps the scene mounted after it leaves the viewport', () => {
    render(
      <LazyOnView fallback={<span>carregando</span>}>
        <span>cena</span>
      </LazyOnView>,
    )
    setIntersecting(true)
    setIntersecting(false)
    expect(screen.getByText('cena')).toBeInTheDocument()
  })
})
