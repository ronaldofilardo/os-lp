import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TechMarquee } from './TechMarquee'

describe('TechMarquee', () => {
  it('lists the methodology terms', () => {
    render(<TechMarquee />)
    expect(screen.getAllByText('ASD-STE100').length).toBeGreaterThan(0)
    expect(screen.getAllByText('Zero-any').length).toBeGreaterThan(0)
  })

  it('repeats the list once for a seamless loop, hiding the copy from screen readers', () => {
    const { container } = render(<TechMarquee />)
    const lists = container.querySelectorAll('ul')
    expect(lists).toHaveLength(2)
    expect(lists[1]?.parentElement).toHaveAttribute('aria-hidden', 'true')
    expect(lists[0]?.children.length).toBe(lists[1]?.children.length)
  })

  it('does not repeat a term inside one list', () => {
    const { container } = render(<TechMarquee />)
    const items = Array.from(container.querySelectorAll('ul')[0]?.children ?? []).map((item) => item.textContent)
    expect(new Set(items).size).toBe(items.length)
  })
})
