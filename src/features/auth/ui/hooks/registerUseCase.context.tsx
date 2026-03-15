import { useContext } from 'react'
import AuthUseCaseContext from '../../../../app/providers/AuthUseCase.context'

export const useRegisterUseCase = () => {
  const context = useContext(AuthUseCaseContext)

  if (!context) {
    throw new Error('RegisterUseCaseProvider is missing')
  }

  return context.registerUseCase
}