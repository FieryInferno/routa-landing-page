import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import RegisterForm from './RegisterForm'

describe('RegisterForm', () => {
  it('submits register data when valid', async () => {
    const user = userEvent.setup()
    const register = vi.fn()

    render(<RegisterForm register={register} isLoading={false} error={null} />)

    await user.type(screen.getByLabelText('Nama'), 'Routa User')
    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.type(screen.getByLabelText('Tanggal Lahir'), '1995-06-15')
    await user.type(screen.getByLabelText('Password'), 'secret123')
    await user.type(screen.getByLabelText('Konfirmasi Password'), 'secret123')
    await user.click(screen.getByRole('button', { name: 'Daftar Akun' }))

    expect(register).toHaveBeenCalledWith({
      name: 'Routa User',
      email: 'user@example.com',
      birthDate: '1995-06-15',
      password: 'secret123',
      confirmPassword: 'secret123',
      firstName: '',
      lastName: '',
    })
  })

  it('does not submit when required fields are empty', async () => {
    const user = userEvent.setup()
    const register = vi.fn()

    render(<RegisterForm register={register} isLoading={false} error={null} />)

    await user.click(screen.getByRole('button', { name: 'Daftar Akun' }))

    expect(register).not.toHaveBeenCalled()
  })

  it('shows error message when provided', () => {
    render(<RegisterForm register={vi.fn()} isLoading={false} error="Register gagal" />)

    expect(screen.getByRole('alert')).toHaveTextContent('Register gagal')
  })

  it('does not submit when password mismatch', async () => {
    const user = userEvent.setup()
    const register = vi.fn()

    render(<RegisterForm register={register} isLoading={false} error={null} />)

    await user.type(screen.getByLabelText('Nama'), 'Routa User')
    await user.type(screen.getByLabelText('Email'), 'user@example.com')
    await user.type(screen.getByLabelText('Tanggal Lahir'), '1995-06-15')
    await user.type(screen.getByLabelText('Password'), 'secret123')
    await user.type(screen.getByLabelText('Konfirmasi Password'), 'secret321')
    await user.click(screen.getByRole('button', { name: 'Daftar Akun' }))

    expect(register).not.toHaveBeenCalled()
    expect(screen.getByRole('alert')).toHaveTextContent('Password tidak sama.')
  })

  it('disables inputs while loading', () => {
    render(<RegisterForm register={vi.fn()} isLoading error={null} />)

    expect(screen.getByLabelText('Nama')).toBeDisabled()
    expect(screen.getByLabelText('Email')).toBeDisabled()
    expect(screen.getByLabelText('Tanggal Lahir')).toBeDisabled()
    expect(screen.getByLabelText('Password')).toBeDisabled()
    expect(screen.getByLabelText('Konfirmasi Password')).toBeDisabled()
  })
})
