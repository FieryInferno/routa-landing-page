import { describe, expect, it } from 'vitest'
import { mapRegisterDtoToEntity } from './register.mapper'
import type { RegisterEntity } from '../domain/register.entity'
import type { RegisterResponseDto } from './register.dto'

describe('mapRegisterDtoToEntity', () => {
  it('maps register response DTO to entity', () => {
    const dto: RegisterResponseDto = {
      accessToken: 'access-token-123',
      refreshToken: 'refresh-token-456',
      userId: 'user-789',
      email: 'newuser@example.com',
    }

    const expected: RegisterEntity = {
      accessToken: 'access-token-123',
      refreshToken: 'refresh-token-456',
      userId: 'user-789',
      email: 'newuser@example.com',
    }

    expect(mapRegisterDtoToEntity(dto)).toEqual(expected)
  })
})
