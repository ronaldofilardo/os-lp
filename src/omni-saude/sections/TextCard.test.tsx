import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { TextCard } from './TextCard'

describe('TextCard', () => {
  it('renders the title as h3 with the description', () => {
    render(<TextCard title="Consulta com Novo Médico" description="Compartilhe em segundos." />)
    expect(screen.getByRole('heading', { level: 3, name: 'Consulta com Novo Médico' })).toBeInTheDocument()
    expect(screen.getByText('Compartilhe em segundos.')).toBeInTheDocument()
  })
})
