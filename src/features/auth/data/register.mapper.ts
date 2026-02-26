import type { RegisterEntity } from '../domain/register.entity'
import type { RegisterResponseDto } from './register.dto'

export const mapRegisterDtoToEntity = (dto: RegisterResponseDto): RegisterEntity => ({
  accessToken: dto.accessToken,
  refreshToken: dto.refreshToken,
  userId: dto.userId,
  email: dto.email,
})
