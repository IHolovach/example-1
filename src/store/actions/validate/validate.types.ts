import {
  PostValidateRequest,
  PostValidateResponse
} from '../../../services/validate'
import { ActionFailurePayload, ParamAction } from '../types'

export type PostValidateActionRequest = ParamAction<PostValidateRequest>
export type PostValidateActionSuccess = ParamAction<PostValidateResponse>
export type PostValidateActionFailure = ParamAction<ActionFailurePayload>

export type ValidateActionsTypes = {
  POST_VALIDATE_REQUEST: string
  POST_VALIDATE_SUCCESS: string
  POST_VALIDATE_FAILURE: string
}

export type ValidateActions = {
  postValidateRequest(data: PostValidateRequest): PostValidateActionRequest
  postValidateSuccess(data: PostValidateResponse): PostValidateActionSuccess
  postValidateFailure(error: ActionFailurePayload): PostValidateActionFailure
}
