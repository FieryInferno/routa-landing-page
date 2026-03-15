import { useCallback, useState } from 'react'
import type { LoginCredentials } from '../../domain/login.entity'
import type { LoginUseCase } from '../../domain/login.usecase'
import { setHttpAuthToken } from '../../../../lib/http'

interface UseLoginResult {
  login: (values: LoginCredentials) => Promise<void>
  isLoading: boolean
  error: string | null
}

export const useLogin = (useCase: LoginUseCase): UseLoginResult => {
  const authUseCase = useCase
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const login = useCallback(
    async (values: LoginCredentials) => {
      setIsLoading(true)
      setError(null)

      try {
        const loginEntity = await authUseCase.execute(values)

        const primaryStorage = values.remember ? window.localStorage : window.sessionStorage
        const secondaryStorage = values.remember ? window.sessionStorage : window.localStorage

        secondaryStorage.removeItem('routa_access_token')
        secondaryStorage.removeItem('routa_refresh_token')

        primaryStorage.setItem('routa_access_token', loginEntity.accessToken)
        primaryStorage.setItem('routa_refresh_token', loginEntity.refreshToken)

        setHttpAuthToken(loginEntity.accessToken)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Login failed')
      } finally {
        setIsLoading(false)
      }
    },
    [authUseCase]
  )

  return { login, isLoading, error }
}
