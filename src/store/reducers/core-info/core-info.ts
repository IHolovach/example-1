import { createReducer } from 'reduxsauce'

import { CoreInfoTypes, CoreInfoActionTypes } from '../../actions'
import { CoreInfoState } from './core-info.types'

/* ------------- Reducers ------------- */

const INITIAL_STATE: CoreInfoState = {
  isLoaded: true,
  conditionsOfUse: '',
  error: ''
}

export const getCoreInfoSuccess = (
  state = INITIAL_STATE,
  action: CoreInfoTypes.GetCoreInfoActionSuccess
) => {
  if (action.payload) {
    const { conditionsOfUse } = action.payload

    return {
      ...state,
      isLoaded: true,
      conditionsOfUse,
      error: ''
    }
  }

  return state
}

export const getCoreInfoFailure = (
  state = INITIAL_STATE,
  action: CoreInfoTypes.GetCoreInfoActionFailure
) => {
  if (action.payload) {
    const { error } = action.payload

    return {
      ...state,
      isLoaded: true,
      conditionsOfUse: '',
      error
    }
  }

  return state
}

/* ------------- Hookup Reducers To Types ------------- */

export const coreInfo = createReducer(INITIAL_STATE, {
  [CoreInfoActionTypes.GET_CORE_INFO_SUCCESS]: getCoreInfoSuccess,
  [CoreInfoActionTypes.GET_CORE_INFO_FAILURE]: getCoreInfoFailure
})
