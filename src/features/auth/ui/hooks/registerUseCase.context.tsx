import { createContext, useContext } from 'react'
import type { RegisterUseCase } from '../../domain/register.usecase'

export const RegisterUseCaseContext = createContext<RegisterUseCase | null>(null)

export const useRegisterUseCase = () => {
  const useCase = useContext(RegisterUseCaseContext)

  if (!useCase) {
    throw new Error('RegisterUseCaseProvider is missing')
  }

  return useCase
}
