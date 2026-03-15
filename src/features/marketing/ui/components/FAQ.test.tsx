import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import FAQ from './FAQ.component'

describe('FAQ', () => {
  it('renders all questions and shows the default expanded answer', () => {
    render(<FAQ />)

    expect(screen.getByRole('heading', { name: 'Apa itu Routa?' })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Bagaimana cara belajar di Routa?' })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Kenapa harus di Routa' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Apakah Ada Garansinya?' })).toBeInTheDocument()
    expect(screen.getByText(/buka potensi puncakmu hanya dengan 30 ribu/i)).toBeInTheDocument()
    expect(screen.queryByText(/platform belajar berbasis ai/i)).not.toBeInTheDocument()
  })

  it('switches the expanded item when another question is clicked', async () => {
    const user = userEvent.setup()

    render(<FAQ />)

    const firstQuestionButton = screen.getByRole('button', { name: 'Apa itu Routa?' })
    const defaultQuestionButton = screen.getByRole('button', {
      name: 'Bagaimana cara belajar di Routa?',
    })

    await user.click(firstQuestionButton)

    expect(firstQuestionButton).toHaveAttribute('aria-expanded', 'true')
    expect(defaultQuestionButton).toHaveAttribute('aria-expanded', 'false')
    expect(screen.getByText(/platform belajar berbasis ai/i)).toBeInTheDocument()
    expect(
      screen.queryByText(/buka potensi puncakmu hanya dengan 30 ribu/i)
    ).not.toBeInTheDocument()
  })

  it('collapses the expanded item when it is clicked again', async () => {
    const user = userEvent.setup()

    render(<FAQ />)

    const defaultQuestionButton = screen.getByRole('button', {
      name: 'Bagaimana cara belajar di Routa?',
    })

    await user.click(defaultQuestionButton)

    expect(defaultQuestionButton).toHaveAttribute('aria-expanded', 'false')
    expect(
      screen.queryByText(/buka potensi puncakmu hanya dengan 30 ribu/i)
    ).not.toBeInTheDocument()
  })
})
