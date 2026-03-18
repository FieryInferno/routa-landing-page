import { describe, expect, it, vi } from 'vitest'
import { AuthRepositoryImpl } from './auth.repository.impl'
import type { LoginCredentials } from '../domain/login.entity'
import type { LoginResponseDto } from './login.dto'
import type { RegisterCredentials } from '../domain/register.entity'
import type { RegisterResponseDto } from './register.dto'
import { httpPost } from '../../../lib/http'

vi.mock('../../../lib/http', () => ({
  httpPost: vi.fn(),
}))

describe('AuthRepositoryImpl', () => {
  const credentials: LoginCredentials = {
    email: 'user@example.com',
    password: 'secret123',
    remember: true,
  }

  const dto: LoginResponseDto = {
    accessToken: 'access-token',
    refreshToken: 'refresh-token',
    userId: 'user-123',
    email: 'user@example.com',
  }

  it('posts credentials and returns mapped entity', async () => {
    const post = httpPost as ReturnType<typeof vi.fn>
    post.mockResolvedValue(dto)

    const repository = new AuthRepositoryImpl()

    await expect(repository.login(credentials)).resolves.toEqual({
      accessToken: 'access-token',
      refreshToken: 'refresh-token',
      userId: 'user-123',
      email: 'user@example.com',
    })

    expect(post).toHaveBeenCalledWith('/auth/login', credentials)
  })

  it('propagates errors from axios', async () => {
    const post = httpPost as ReturnType<typeof vi.fn>
    const error = new Error('Network error')
    post.mockRejectedValue(error)

    const repository = new AuthRepositoryImpl()

    await expect(repository.login(credentials)).rejects.toBe(error)
  })
})

describe('AuthRepositoryImpl - register', () => {
  const credentials: RegisterCredentials = {
    email: 'newuser@example.com',
    password: 'securePass123',
    firstName: 'John',
    lastName: 'Doe',
    name: '',
    birthDate: '',
  }

  const dto: RegisterResponseDto = {
    accessToken: 'access-token-123',
    refreshToken: 'refresh-token-456',
    userId: 'user-789',
    email: 'newuser@example.com',
  }

  it('posts credentials and returns mapped entity', async () => {
    const post = httpPost as ReturnType<typeof vi.fn>
    post.mockResolvedValue(dto)

    const repository = new AuthRepositoryImpl()

    await expect(repository.register(credentials)).resolves.toEqual({
      accessToken: 'access-token-123',
      refreshToken: 'refresh-token-456',
      userId: 'user-789',
      email: 'newuser@example.com',
    })

    expect(post).toHaveBeenCalledWith('/auth/register', credentials)
  })

  it('propagates errors from httpPost', async () => {
    const post = httpPost as ReturnType<typeof vi.fn>
    const error = new Error('Network error')
    post.mockRejectedValue(error)

    const repository = new AuthRepositoryImpl()

    await expect(repository.register(credentials)).rejects.toBe(error)
  })
})
