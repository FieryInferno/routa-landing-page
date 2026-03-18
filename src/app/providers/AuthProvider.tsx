import type { PropsWithChildren } from 'react'
import { AuthRepositoryImpl } from '../../features/auth/data/auth.repository.impl'
import { LoginUseCase } from '../../features/auth/domain/login.usecase'
import { RegisterUseCase } from '../../features/auth/domain/register.usecase'
import AuthUseCaseContext from './AuthUseCase.context'

// const repository = new AuthRepositoryImpl()
class TestAuthRepository extends AuthRepositoryImpl {
  async login() {
    return {
      accessToken: 'test_access_token',
      refreshToken: 'test_refresh_token',
      userId: 'user-123',
      email: 'user@example.com',
    }
  }
}
const testRepository = new TestAuthRepository()
const loginUseCase = new LoginUseCase(testRepository)
const registerUseCase = new RegisterUseCase(testRepository)
const AuthProvider = ({ children }: PropsWithChildren) => (
  <AuthUseCaseContext.Provider value={{ loginUseCase, registerUseCase }}>
    {children}
  </AuthUseCaseContext.Provider>
)

export default AuthProvider
