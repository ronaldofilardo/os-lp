import { describe, it, expect, vi } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { PillarCard } from './PillarCard'
import { PILLARS } from './pillars'

const pillar = PILLARS[1]

describe('PillarCard', () => {
  it('shows the number, title, description and rule', () => {
    if (!pillar) throw new Error('missing pillar fixture')
    render(<PillarCard {...pillar} isActive={false} onActivate={vi.fn()} />)
    expect(screen.getByText(`PILAR ${pillar.number}`)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: pillar.title })).toBeInTheDocument()
    expect(screen.getByText(pillar.description)).toBeInTheDocument()
    expect(screen.getByText(`// ${pillar.rule}`)).toBeInTheDocument()
  })

  it('activates on mouse enter and on keyboard focus', () => {
    if (!pillar) throw new Error('missing pillar fixture')
    const onActivate = vi.fn()
    render(<PillarCard {...pillar} isActive={false} onActivate={onActivate} />)
    const card = screen.getByRole('heading', { name: pillar.title }).closest('[tabindex]')
    if (!card) throw new Error('card not focusable')
    fireEvent.mouseEnter(card)
    fireEvent.focus(card)
    expect(onActivate).toHaveBeenCalledTimes(2)
  })

  it('highlights only the active card', () => {
    if (!pillar) throw new Error('missing pillar fixture')
    const { rerender, container } = render(<PillarCard {...pillar} isActive={false} onActivate={vi.fn()} />)
    expect(container.firstElementChild).not.toHaveClass('border-primary/70')
    rerender(<PillarCard {...pillar} isActive onActivate={vi.fn()} />)
    expect(container.firstElementChild).toHaveClass('border-primary/70')
  })
})
