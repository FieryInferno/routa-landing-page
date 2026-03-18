import type { IAuthRepository } from './auth.repository'
import type { RegisterCredentials, RegisterEntity } from './register.entity'

export class RegisterUseCase {
  private readonly repository: IAuthRepository

  constructor(repository: IAuthRepository) {
    this.repository = repository
  }

  execute(credentials: RegisterCredentials): Promise<RegisterEntity> {
    return this.repository.register(credentials)
  }
}
