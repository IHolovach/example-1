import {
  PostChangePasswordRequest,
  PostResetPasswordRequest,
  PostResetPasswordResponse,
  PostChangePasswordResponse,
  PostChangeCurrentPasswordRequest,
  PostChangeCurrentPasswordResponse,
  PostCreatePasswordRequest,
  PostCreatePasswordResponse
} from '../../../services/forgot-password'
import { ActionFailurePayload, ParamAction } from '../types'

export type PostPasswordResetActionRequest = ParamAction<PostResetPasswordRequest>
export type PostPasswordResetActionSuccess = ParamAction<PostResetPasswordResponse>
export type PostPasswordResetActionFailure = ParamAction<ActionFailurePayload>
export type PostPasswordChangeActionRequest = ParamAction<PostChangePasswordRequest>
export type PostPasswordChangeActionSuccess = ParamAction<PostChangePasswordResponse>
export type PostPasswordChangeActionFailure = ParamAction<ActionFailurePayload>
export type PostCurrentPasswordChangeActionRequest = ParamAction<PostChangeCurrentPasswordRequest>
export type PostCurrentPasswordChangeActionSuccess = ParamAction<PostChangeCurrentPasswordResponse>
export type PostCurrentPasswordChangeActionFailure = ParamAction<ActionFailurePayload>
export type PostPasswordCreateActionRequest = ParamAction<PostCreatePasswordRequest>
export type PostPasswordCreateActionSuccess = ParamAction<PostCreatePasswordResponse>
export type PostPasswordCreateActionFailure = ParamAction<ActionFailurePayload>

export type ForgotPasswordActionsTypes = {
  POST_RESET_PASSWORD_REQUEST: string
  POST_RESET_PASSWORD_SUCCESS: string
  POST_RESET_PASSWORD_FAILURE: string
  POST_CHANGE_PASSWORD_REQUEST: string
  POST_CHANGE_PASSWORD_SUCCESS: string
  POST_CHANGE_PASSWORD_FAILURE: string
  POST_CHANGE_CURRENT_PASSWORD_REQUEST: string
  POST_CHANGE_CURRENT_PASSWORD_SUCCESS: string
  POST_CHANGE_CURRENT_PASSWORD_FAILURE: string
  POST_CREATE_PASSWORD_REQUEST: string
  POST_CREATE_PASSWORD_SUCCESS: string
  POST_CREATE_PASSWORD_FAILURE: string
}

export type ForgotPasswordActions = {
  postResetPasswordRequest(
    data: PostResetPasswordRequest
  ): PostPasswordResetActionRequest
  postResetPasswordSuccess(
    data: PostResetPasswordResponse
  ): PostPasswordResetActionSuccess
  postResetPasswordFailure(
    error?: ActionFailurePayload
  ): PostPasswordResetActionFailure
  postChangePasswordRequest(
    data?: PostChangePasswordRequest
  ): PostPasswordChangeActionRequest
  postChangePasswordSuccess(
    data: PostChangePasswordResponse
  ): PostPasswordChangeActionSuccess
  postChangePasswordFailure(
    data?: ActionFailurePayload
  ): PostPasswordChangeActionFailure
  postChangeCurrentPasswordRequest(
    data?: PostChangeCurrentPasswordRequest
  ): PostCurrentPasswordChangeActionRequest
  postChangeCurrentPasswordSuccess(
    data: PostChangeCurrentPasswordResponse
  ): PostCurrentPasswordChangeActionSuccess
  postChangeCurrentPasswordFailure(
    data?: ActionFailurePayload
  ): PostCurrentPasswordChangeActionFailure
  postCreatePasswordRequest(
    data?: PostCreatePasswordRequest
  ): PostPasswordCreateActionRequest
  postCreatePasswordSuccess(
    data: PostCreatePasswordResponse
  ): PostPasswordCreateActionSuccess
  postCreatePasswordFailure(
    data?: ActionFailurePayload
  ): PostPasswordResetActionFailure
}
