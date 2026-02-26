import type { IAuthRepository } from '../domain/auth.repository'
import type { LoginCredentials, LoginEntity } from '../domain/login.entity'
import type { RegisterCredentials, RegisterEntity } from '../domain/register.entity'
import type { LoginResponseDto } from './login.dto'
import type { RegisterResponseDto } from './register.dto'
import { mapLoginDtoToEntity } from './login.mapper'
import { mapRegisterDtoToEntity } from './register.mapper'
import { httpPost } from '../../../lib/http'

export class AuthRepositoryImpl implements IAuthRepository {
  async login(credentials: LoginCredentials): Promise<LoginEntity> {
    const response = await httpPost<LoginResponseDto, LoginCredentials>('/auth/login', credentials)
    return mapLoginDtoToEntity(response)
  }

  async register(credentials: RegisterCredentials): Promise<RegisterEntity> {
    const response = await httpPost<RegisterResponseDto, RegisterCredentials>(
      '/auth/register',
      credentials
    )
    return mapRegisterDtoToEntity(response)
  }
}
