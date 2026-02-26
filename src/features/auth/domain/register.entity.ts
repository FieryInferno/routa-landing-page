export interface RegisterCredentials {
  email: string
  password: string
  firstName: string
  lastName: string
  name: string
  birthDate: string
}

export interface RegisterEntity {
  accessToken: string
  refreshToken: string
  userId: string
  email: string
}
