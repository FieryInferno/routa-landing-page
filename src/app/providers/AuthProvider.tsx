import type { PropsWithChildren } from 'react'
import { AuthRepositoryImpl } from '../../features/auth/data/auth.repository.impl'
import { LoginUseCase } from '../../features/auth/domain/login.usecase'
import { RegisterUseCase } from '../../features/auth/domain/register.usecase'
import AuthUseCaseContext from './AuthUseCase.context'

const repository = new AuthRepositoryImpl()
const loginUseCase = new LoginUseCase(repository)
const registerUseCase = new RegisterUseCase(repository)
const AuthProvider = ({ children }: PropsWithChildren) => (
  <AuthUseCaseContext.Provider value={{ loginUseCase, registerUseCase }}>
    {children}
  </AuthUseCaseContext.Provider>
)

export default AuthProvider
