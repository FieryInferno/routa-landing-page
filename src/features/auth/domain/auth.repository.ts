import type { LoginCredentials, LoginEntity } from './login.entity'
import type { RegisterCredentials, RegisterEntity } from './register.entity'

export interface IAuthRepository {
  login(credentials: LoginCredentials): Promise<LoginEntity>
  register(credentials: RegisterCredentials): Promise<RegisterEntity>
}
