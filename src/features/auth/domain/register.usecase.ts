import type { IAuthRepository } from './auth.repository'
import type { RegisterCredentials, RegisterEntity } from './register.entity'

export class RegisterUseCase {
  constructor(private readonly repository: IAuthRepository) {}

  execute(credentials: RegisterCredentials): Promise<RegisterEntity> {
    return this.repository.register(credentials)
  }
}
