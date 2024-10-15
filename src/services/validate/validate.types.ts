import { GeneralApiProblem } from '../api-problem'
import { Policy } from '../policy'

export type PostValidate = {
  values: Policy
}

export type ErrorResponse = {
  valid: boolean
  failed: string[]
  message: string
}

export type DecodedErrorResponse = {
  sarInc: ErrorResponse
  fplCap: ErrorResponse
}

export interface ValidateResponse extends DecodedErrorResponse {
  [key: string]: ErrorResponse
}

export type ValidatePayload = {
  invalidValues: ValidateResponse
}

export type PostValidateRequest = PostValidate
export type PostValidateResponse = ValidateResponse

export type PostValidateResults =
  | {
      kind?: string
      data: ValidateResponse
    }
  | GeneralApiProblem

export type ValidateApi = {
  postValidate: (data: PostValidateRequest) => Promise<PostValidateResults>
}
