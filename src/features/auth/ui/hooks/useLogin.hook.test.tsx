import { act, renderHook, waitFor } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { useLogin } from './useLogin.hook'
import type { LoginCredentials, LoginEntity } from '../../domain/login.entity'
import type { LoginUseCase } from '../../domain/login.usecase'

describe('useLogin', () => {
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

  it('starts with idle state', () => {
    const useCase = { execute: vi.fn() } as unknown as LoginUseCase

    const { result } = renderHook(() => useLogin(useCase))

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBeNull()
  })

  it('executes login and clears error on success', async () => {
    const deferred = createDeferred<LoginEntity>()
    const useCase = {
      execute: vi.fn().mockReturnValue(deferred.promise),
    } as unknown as LoginUseCase

    const { result } = renderHook(() => useLogin(useCase))

    act(() => {
      void result.current.login(credentials)
    })

    expect(result.current.isLoading).toBe(true)

    deferred.resolve(entity)

    await waitFor(() => {
      expect(result.current.isLoading).toBe(false)
    })

    expect(result.current.error).toBeNull()
    expect(useCase.execute).toHaveBeenCalledWith(credentials)
  })

  it('sets error when login fails', async () => {
    const useCase = {
      execute: vi.fn().mockRejectedValue(new Error('Login failed')),
    } as unknown as LoginUseCase

    const { result } = renderHook(() => useLogin(useCase))

    await act(async () => {
      await expect(result.current.login(credentials)).rejects.toThrow('Login failed')
    })

    expect(result.current.isLoading).toBe(false)
    expect(result.current.error).toBe('Login failed')
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
