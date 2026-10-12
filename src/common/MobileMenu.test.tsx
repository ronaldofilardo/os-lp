import { describe, it, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { MobileMenu } from './MobileMenu'
import { NAV_LINKS } from './navLinks'

function panel(): HTMLElement {
  return screen.getByRole('navigation', { name: 'Navegação móvel', hidden: true })
}

describe('MobileMenu', () => {
  it('starts closed', () => {
    render(<MobileMenu />)
    expect(screen.getByRole('button', { name: 'Abrir menu' })).toHaveAttribute('aria-expanded', 'false')
    expect(panel()).toHaveClass('invisible')
  })

  it('opens and closes with the toggle button', () => {
    render(<MobileMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    expect(screen.getByRole('button', { name: 'Fechar menu' })).toHaveAttribute('aria-expanded', 'true')
    expect(panel()).not.toHaveClass('invisible')
    fireEvent.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(panel()).toHaveClass('invisible')
  })

  it('lists every navigation link plus the call to action', () => {
    render(<MobileMenu />)
    for (const link of NAV_LINKS) {
      expect(screen.getByRole('link', { name: link.label, hidden: true })).toHaveAttribute('href', link.href)
    }
    expect(screen.getByRole('link', { name: /Orçamento/, hidden: true })).toHaveAttribute('href', '#contato')
  })

  it('closes after tapping a link', () => {
    render(<MobileMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    fireEvent.click(screen.getByRole('link', { name: 'Projetos' }))
    expect(panel()).toHaveClass('invisible')
  })

  it('closes with the Escape key', () => {
    render(<MobileMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    fireEvent.keyDown(window, { key: 'Escape' })
    expect(panel()).toHaveClass('invisible')
  })

  it('ignores other keys', () => {
    render(<MobileMenu />)
    fireEvent.click(screen.getByRole('button', { name: 'Abrir menu' }))
    fireEvent.keyDown(window, { key: 'Enter' })
    expect(panel()).not.toHaveClass('invisible')
  })
})
