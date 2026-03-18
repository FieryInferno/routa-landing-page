import { describe, expect, it, vi } from 'vitest'
import { RegisterUseCase } from './register.usecase'
import type { IAuthRepository } from './auth.repository'
import type { RegisterCredentials, RegisterEntity } from './register.entity'

describe('RegisterUseCase', () => {
  const credentials: RegisterCredentials = {
    email: 'newuser@example.com',
    password: 'securePass123',
    firstName: 'John',
    lastName: 'Doe',
    name: '',
    birthDate: '',
  }

  const entity: RegisterEntity = {
    accessToken: 'access-token-123',
    refreshToken: 'refresh-token-456',
    userId: 'user-789',
    email: 'newuser@example.com',
  }

  it('returns register entity from repository', async () => {
    const repository: IAuthRepository = {
      login: vi.fn(),
      register: vi.fn().mockResolvedValue(entity),
    }

    const useCase = new RegisterUseCase(repository)

    await expect(useCase.execute(credentials)).resolves.toEqual(entity)
    expect(repository.register).toHaveBeenCalledWith(credentials)
    expect(repository.register).toHaveBeenCalledTimes(1)
  })

  it('propagates repository errors', async () => {
    const error = new Error('Registration failed')
    const repository: IAuthRepository = {
      login: vi.fn(),
      register: vi.fn().mockRejectedValue(error),
    }

    const useCase = new RegisterUseCase(repository)

    await expect(useCase.execute(credentials)).rejects.toBe(error)
  })
})
