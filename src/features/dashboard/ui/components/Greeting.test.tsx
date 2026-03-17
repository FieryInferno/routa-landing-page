import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Greeting from './Greeting.tsx'

describe('Greeting', () => {
  it('renders user and personalized pill from props', () => {
    render(<Greeting user="Rizky" personalizedFor="Backend Developer 3-5 YOE" />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Welcome Back, Rizky! 👋🏻' })
    ).toBeInTheDocument()
    expect(screen.getByText('Personalized for : Backend Developer 3-5 YOE')).toBeInTheDocument()
  })
})
