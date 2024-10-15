import { GeneralApiProblem } from '../api-problem'

export type RegenerateTokenRequest = {
  token: string
}

export type GetLoginRequest = {
  email: string
  password: string
}

export type GetLoginResponse = {
  token: string
}

export type GetLoginResults =
  | {
      kind?: string
      token: string
    }
  | GeneralApiProblem

export type User = {
  id: string
  email: string
  displayName: string
  dataAggregationLevel: number
}

export type GetUserMeResponse = User

export type GetUserMeResults =
  | {
      kind?: string
      user: User
    }
  | GeneralApiProblem

export type AuthApi = {
  login: (data: GetLoginRequest) => Promise<GetLoginResults>
  getUserMe: (user: User) => Promise<GetUserMeResults>
  regenerateToken: (data: RegenerateTokenRequest) => Promise<GetLoginResults>
}
