import { createReducer } from 'reduxsauce'
import camelcaseKeys from 'camelcase-keys'

import { ValidateTypes, ValidateActionTypes } from '../../actions'
import { ValidateState } from './validate.types'

/* ------------- Reducers ------------- */

const INITIAL_STATE: ValidateState = {
  isLoggedIn: false,
  invalidValues: {},
  invalidValuesOnFailure: {},
  error: ''
}

export const postValidateSuccess = (
  state = INITIAL_STATE,
  action: ValidateTypes.PostValidateActionSuccess
) => {
  if (action.payload) {
    const { error, results, warning } = action.payload
    let alignedResponse = {}

    if (results) {
      alignedResponse = camelcaseKeys(results, {
        deep: true
      })
    }

    if (error) {
      return {
        ...state,
        invalidValuesOnFailure: alignedResponse,
        error: String(error),
      }
    }

    if (warning) {
      return {
        ...state,
        invalidValues: alignedResponse,
        error: '',
      }
    }

    return {
      ...state,
      invalidValues: {},
      invalidValuesOnFailure: {},
      error: ''
    }
  }

  return state
}

export const postValidateFailure = (
  state = INITIAL_STATE,
  action: ValidateTypes.PostValidateActionFailure
) => {
  if (action.payload) {
    const { error, response = {} } = action.payload
    let alignedResponse = {}
    if (response.data) {
      alignedResponse = camelcaseKeys(response.data, {
        deep: true
      })
    }

    return {
      ...state,
      invalidValuesOnFailure: alignedResponse,
      error
    }
  }

  return state
}

/* ------------- Hookup Reducers To Types ------------- */

export const validate = createReducer(INITIAL_STATE, {
  [ValidateActionTypes.POST_VALIDATE_SUCCESS]: postValidateSuccess,
  [ValidateActionTypes.POST_VALIDATE_FAILURE]: postValidateFailure
})
