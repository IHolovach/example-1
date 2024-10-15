import { AuthApi } from './auth'
import { PolicyApi } from './policy'
import { ForgotPasswordApi } from './forgot-password'
import { ValidateApi } from './validate'
import { CoreInfoApi } from './core-info'

export type ApiMethods = {
  setHeader: (key: string, prop: string) => void
  setToken: (token: string) => void
}

export interface Api extends ApiMethods {
  auth: AuthApi
  policy: PolicyApi
  forgotPassword: ForgotPasswordApi
  validate: ValidateApi
  coreInfo: CoreInfoApi
}

export type List<T> = {
  count: number
  next: string
  previous: string
  results: T[]
  reset?: boolean
}
