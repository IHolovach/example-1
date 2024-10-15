import {
  GetLoginRequest,
  GetLoginResponse,
  GetUserMeResponse,
  User
} from '../../../services'

import { ActionFailurePayload, ParamAction } from '../types'

export type LoginActionRequest = ParamAction<GetLoginRequest>
export type LoginActionSuccess = ParamAction<GetLoginResponse>
export type LoginActionFailure = ParamAction<ActionFailurePayload>
export type GetUserMeActionRequest = ParamAction<User>
export type GetUserMeActionSuccess = ParamAction<GetUserMeResponse>
export type GetUserMeActionFailure = ParamAction<ActionFailurePayload>
export type ResetLogout = ParamAction<any>

export type AuthActionsTypes = {
  LOGIN_USER_REQUEST: string
  LOGIN_USER_SUCCESS: string
  LOGIN_USER_FAILURE: string
  GET_USER_ME_REQUEST: string
  GET_USER_ME_SUCCESS: string
  GET_USER_ME_FAILURE: string
  REGENERATE_TOKEN_REQUEST: string
  REGENERATE_TOKEN_SUCCESS: string
  REGENERATE_TOKEN_FAILURE: string
  RESET_LOGOUT: string
}

export type AuthActions = {
  loginUserRequest(user: GetLoginRequest): LoginActionRequest
  loginUserSuccess(data: GetLoginResponse): LoginActionSuccess
  loginUserFailure(error: ActionFailurePayload): LoginActionFailure
  getUserMeRequest(): GetUserMeActionRequest
  getUserMeSuccess(data: User): GetUserMeActionSuccess
  getUserMeFailure(error: ActionFailurePayload): GetUserMeActionFailure
  regenerateTokenSuccess(data: GetLoginResponse): LoginActionSuccess
  regenerateTokenFailure(error: ActionFailurePayload): LoginActionFailure
  resetLogout(): ResetLogout
}
