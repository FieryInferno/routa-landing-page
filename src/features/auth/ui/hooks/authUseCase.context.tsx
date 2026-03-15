import { useContext } from 'react'
import AuthUseCaseContext from '../../../../app/providers/AuthUseCase.context'

export const useAuthUseCase = () => {
  const context = useContext(AuthUseCaseContext)

  if (!context) throw new Error('AuthUseCaseProvider is missing')

  return context.loginUseCase
}
