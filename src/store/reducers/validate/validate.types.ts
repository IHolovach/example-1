import { DecodedErrorResponse } from '../../../services'

export type ValidateState = {
  isLoggedIn: boolean
  invalidValues: DecodedErrorResponse | any
  invalidValuesOnFailure: any
  error: string
}
