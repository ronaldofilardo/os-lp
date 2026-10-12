import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { AnimatedLetters } from './AnimatedLetters'

function delays(container: HTMLElement): number[] {
  return Array.from(container.querySelectorAll<HTMLElement>('.letter-wave')).map((node) => parseInt(node.style.animationDelay, 10))
}

describe('AnimatedLetters', () => {
  it('exposes the full text to assistive tech', () => {
    render(<h3><AnimatedLetters text="Reunião de Descoberta" /></h3>)
    expect(screen.getByLabelText('Reunião de Descoberta')).toBeInTheDocument()
  })

  it('wraps every letter in its own animated span', () => {
    const { container } = render(<AnimatedLetters text="Reunião de Descoberta" />)
    expect(container.querySelectorAll('.letter-wave')).toHaveLength('ReuniãodeDescoberta'.length)
  })

  it('staggers the letters in increasing order', () => {
    const { container } = render(<AnimatedLetters text="Entrega" />)
    const values = delays(container)
    expect(values[0]).toBe(70)
    expect(values).toEqual([...values].sort((a, b) => a - b))
    expect(new Set(values).size).toBe(values.length)
  })

  it('shifts the whole sequence by the offset', () => {
    const { container } = render(<AnimatedLetters text="Plano" offset={6} />)
    expect(delays(container)[0]).toBe(490)
  })

  it('never breaks a word across lines', () => {
    const { container } = render(<AnimatedLetters text="Planejamento & Arquitetura" />)
    expect(container.querySelectorAll('.whitespace-nowrap')).toHaveLength(3)
  })
})
