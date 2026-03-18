import { describe, expect, it, vi } from 'vitest'
import { LoginUseCase } from './login.usecase'
import type { IAuthRepository } from './auth.repository'
import type { LoginCredentials, LoginEntity } from './login.entity'

describe('LoginUseCase', () => {
  const credentials: LoginCredentials = {
    email: 'user@example.com',
    password: 'secret123',
    remember: true,
  }

  const entity: LoginEntity = {
    accessToken: 'access-token',
    refreshToken: 'refresh-token',
    userId: 'user-123',
    email: 'user@example.com',
  }

  it('returns login entity from repository', async () => {
    const repository: IAuthRepository = {
      login: vi.fn().mockResolvedValue(entity),
      register: () => {
        throw new Error('Not implemented')
      },
    }

    const useCase = new LoginUseCase(repository)

    await expect(useCase.execute(credentials)).resolves.toEqual(entity)
    expect(repository.login).toHaveBeenCalledWith(credentials)
    expect(repository.login).toHaveBeenCalledTimes(1)
  })

  it('propagates repository errors', async () => {
    const error = new Error('Login failed')
    const repository: IAuthRepository = {
      login: vi.fn().mockRejectedValue(error),
      register: () => {
        throw new Error('Not implemented')
      },
    }

    const useCase = new LoginUseCase(repository)

    await expect(useCase.execute(credentials)).rejects.toBe(error)
  })
})
