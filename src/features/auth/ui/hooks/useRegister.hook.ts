import { useCallback, useState } from 'react'
import type { RegisterCredentials } from '../../domain/register.entity'
import type { RegisterUseCase } from '../../domain/register.usecase'

interface UseRegisterResult {
  register: (values: RegisterCredentials) => Promise<void>
  isLoading: boolean
  error: string | null
}

export const useRegister = (useCase: RegisterUseCase): UseRegisterResult => {
  const authUseCase = useCase
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const register = useCallback(
    async (values: RegisterCredentials) => {
      setIsLoading(true)
      setError(null)

      try {
        await authUseCase.execute(values)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Registration failed')
      } finally {
        setIsLoading(false)
      }
    },
    [authUseCase]
  )

  return { register, isLoading, error }
}
