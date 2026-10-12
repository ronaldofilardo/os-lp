import { describe, it, expect, vi } from 'vitest'
import { renderToString } from 'react-dom/server'
import { render, screen } from '@testing-library/react'
import { setIntersecting } from '@/test/mocks'
import { Reveal } from './Reveal'

describe('Reveal', () => {
  it('renders hidden until it enters the viewport', () => {
    render(<Reveal>conteúdo</Reveal>)
    const node = screen.getByText('conteúdo')
    expect(node).toHaveClass('reveal')
    expect(node).not.toHaveClass('reveal-in')
  })

  it('becomes visible once it intersects', () => {
    render(<Reveal>conteúdo</Reveal>)
    setIntersecting(true)
    expect(screen.getByText('conteúdo')).toHaveClass('reveal-in')
  })

  it('stays visible after leaving the viewport', () => {
    render(<Reveal>conteúdo</Reveal>)
    setIntersecting(true)
    setIntersecting(false)
    expect(screen.getByText('conteúdo')).toHaveClass('reveal-in')
  })

  it('applies the stagger delay and extra classes', () => {
    render(<Reveal delayMs={150} className="h-full">conteúdo</Reveal>)
    const node = screen.getByText('conteúdo')
    expect(node).toHaveStyle({ transitionDelay: '150ms' })
    expect(node).toHaveClass('h-full')
  })
})

describe('Reveal progressive enhancement', () => {
  it('is visible in the server-rendered HTML (no hidden content if JS never runs)', () => {
    const html = renderToString(<Reveal>conteúdo</Reveal>)
    expect(html).toContain('conteúdo')
    expect(html).not.toContain('reveal')
  })

  it('does not hide an element that is already on screen when it mounts', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 100, bottom: 300, left: 0, right: 200, width: 200, height: 200, x: 0, y: 100,
      toJSON: () => ({}),
    })
    render(<Reveal>conteúdo</Reveal>)
    expect(screen.getByText('conteúdo')).not.toHaveClass('reveal')
  })

  it('hides an element below the fold until it is scrolled into view', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockReturnValue({
      top: 2000, bottom: 2200, left: 0, right: 200, width: 200, height: 200, x: 0, y: 2000,
      toJSON: () => ({}),
    })
    render(<Reveal>conteúdo</Reveal>)
    expect(screen.getByText('conteúdo')).toHaveClass('reveal')
    expect(screen.getByText('conteúdo')).not.toHaveClass('reveal-in')
    setIntersecting(true)
    expect(screen.getByText('conteúdo')).toHaveClass('reveal', 'reveal-in')
  })
})
