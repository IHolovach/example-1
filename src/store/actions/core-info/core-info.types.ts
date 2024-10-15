import {
  GetCoreInfoRequest,
  GetCoreInfoResponse
} from '../../../services/core-info'
import { ActionFailurePayload, ParamAction } from '../types'

export type GetCoreInfoActionRequest = ParamAction<GetCoreInfoRequest>
export type GetCoreInfoActionSuccess = ParamAction<GetCoreInfoResponse>
export type GetCoreInfoActionFailure = ParamAction<ActionFailurePayload>

export type CoreInfoActionsTypes = {
  GET_CORE_INFO_REQUEST: string
  GET_CORE_INFO_SUCCESS: string
  GET_CORE_INFO_FAILURE: string
}

export type CoreInfoActions = {
  getCoreInfoRequest(): GetCoreInfoActionRequest
  getCoreInfoSuccess(data: GetCoreInfoResponse): GetCoreInfoActionSuccess
  getCoreInfoFailure(error: ActionFailurePayload): GetCoreInfoActionFailure
}
