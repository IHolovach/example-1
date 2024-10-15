export type ResetPasswordState = {
  isLoggedIn: boolean
  email: string
  error: string
}

export type ChangePasswordState = {
  isLoggedIn: boolean
  reseted: boolean
  response: any
  error: string
}

export type ChangeCurrentPasswordState = {
  isLoggedIn: boolean
  changed: boolean
  invalidValues: any
  error: string
}

export type CreatePasswordState = {
  isLoggedIn: boolean
  created: boolean
  response: any
  error: string
}
