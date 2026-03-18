import type { IAuthRepository } from './auth.repository'
import type { LoginCredentials, LoginEntity } from './login.entity'

export class LoginUseCase {
  private readonly repository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this.repository = repository
  }

  execute(credentials: LoginCredentials): Promise<LoginEntity> {
    return this.repository.login(credentials)
  }
}
