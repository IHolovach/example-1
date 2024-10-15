import { GeneralApiProblem } from '../api-problem'

export type Reset = {
  email: string
}

export type PostResetPasswordRequest = Reset
export type PostResetPasswordResponse = Reset

export type PostResetPasswordResults =
  | {
      kind?: string
      email: string
    }
  | GeneralApiProblem

// Create password

export type Create = {
  newPass1: string
  newPass2: string
  uid: string
  token: string
}

export type CreateBE = {
  detail: string
}

export type PostCreatePasswordRequest = Create
export type PostCreatePasswordResponse = CreateBE

export type PostCreatePasswordResults =
  | {
      kind?: string
      detail: string
    }
  | GeneralApiProblem

// eof Create Password

// Change Password
export type Change = {
  newPass1: string
  newPass2: string
  uid: string
  token: string
}

export type ChangeBE = {
  detail: string
}

export type ChangePassword = {
  oldPassword: string
  newPassword1: string
  newPassword2: string
}

export type PostChangePasswordRequest = Change
export type PostChangePasswordResponse = ChangeBE
export type PostChangeBEPasswordRequest = Change
export type PostChangeBEPasswordResponse = ChangeBE

export type PostChangePasswordBEResults =
  | {
      kind?: string
      new_password1: string
      new_password2: string
      uid: string
      token: string
    }
  | GeneralApiProblem

export type PostChangePasswordResults =
  | {
      kind?: string
      detail: string
    }
  | GeneralApiProblem

export type PostChangeCurrentPasswordRequest = ChangePassword
export type PostChangeCurrentPasswordResponse = ChangePassword

export type PostChangeCurrentPasswordResults =
  | {
      kind?: string
      oldPassword: string
      newPassword1: string
      newPassword2: string
    }
  | GeneralApiProblem

// eof Change Password

export type ForgotPasswordApi = {
  postResetPassword: (
    data: PostResetPasswordRequest
  ) => Promise<PostResetPasswordResults>
  postChangePassword: (
    data: PostChangePasswordRequest
  ) => Promise<PostChangePasswordResults>
  postChangeCurrentPassword: (
    data: PostChangeCurrentPasswordRequest
  ) => Promise<PostChangeCurrentPasswordResults>
  postCreatePassword: (
    data: PostCreatePasswordRequest
  ) => Promise<PostCreatePasswordResults>
}
