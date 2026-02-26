import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useRegister } from './useRegister.hook'
import type { RegisterCredentials, RegisterEntity } from '../../domain/register.entity'
import type { RegisterUseCase } from '../../domain/register.usecase'

describe('useRegister', () => {
  const credentials: RegisterCredentials = {
    email: 'newuser@example.com',
    password: 'securePass123',
    firstName: 'John',
    lastName: 'Doe',
  }

  const entity: RegisterEntity = {
    accessToken: 'access-token-123',
    refreshToken: 'refresh-token-456',
    userId: 'user-789',
    email: 'newuser@example.com',
  }

  it('starts with idle state', () => {
    const useCase = { execute: vi.fn() } as unknown as RegisterUseCase

    const { result } = renderHook(() => useRegister(useCase))

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('executes register and clears error on success', async () => {
    const deferred = createDeferred<RegisterEntity>()
    const useCase = {
      execute: vi.fn().mockReturnValue(deferred.promise),
    } as unknown as RegisterUseCase

    const { result } = renderHook(() => useRegister(useCase))

    act(() => {
      void result.current.register(credentials)
    })

    expect(result.current.isLoading).toBe(true)

    deferred.resolve(entity)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.error).toBeNull()
    expect(useCase.execute).toHaveBeenCalledWith(credentials)
  })

  it('sets error when register fails', async () => {
    const useCase = {
      execute: vi.fn().mockRejectedValue(new Error('Registration failed')),
    } as unknown as RegisterUseCase

    const { result } = renderHook(() => useRegister(useCase))

    await act(async () => {
      await result.current.register(credentials)
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe('Registration failed')
  })
})

function createDeferred<T>() {
  let resolve!: (value: T) => void
  let reject!: (reason?: unknown) => void

  const promise = new Promise<T>((res, rej) => {
    resolve = res
    reject = rej
  })

  return { promise, resolve, reject }
}
