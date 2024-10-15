import { takeLatest, all } from 'redux-saga/effects'
import { REHYDRATE } from 'redux-persist/es/constants'

import { config } from '../../config'
import API from '../../services/api'
import {
  AuthActionTypes,
  ForgotPasswordActionTypes,
  PolicyActionTypes,
  ValidateActionTypes,
  CoreInfoActionTypes
} from '../actions'

/* ------------- Sagas ------------- */

import { GetUserMe, Login, RegenerateToken } from './login'
import {
  GetPolicies,
  GetPoliciesByPages,
  CreatePolicy,
  GetPolicy,
  UpdatePolicy,
  GetPolicyPlot,
  DeletePolicy,
  GetCatalog,
  GetRegions,
  GetBauDefaults,
  UpdateAffordability,
  GetRestrictions,
  GetComparePoliciesByIdPolicies,
  UpdateAdditionalGraph,
  GetDefaultPolicy,
  GetPolicyReport
} from './policy'
import {
  ResetPassword,
  ChangePassword,
  ChangeCurrentPassword,
  CreatePassword
} from './forgot-password'
import { Validate } from './validate'
import { CoreInfo } from './core-info'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

const api = API.create(config.BASE_URL)

/* ------------- Connect Types To Sagas ------------- */

export default function* root() {
  yield all([
    // Login api request
    takeLatest(AuthActionTypes.LOGIN_USER_REQUEST, Login, api),
    // Get user me api request
    takeLatest(AuthActionTypes.GET_USER_ME_REQUEST, GetUserMe, api),
    // Regenerate token api request
    takeLatest(REHYDRATE, RegenerateToken, api),
    // Get policies from api
    takeLatest(PolicyActionTypes.GET_POLICIES_REQUEST, GetPolicies, api),
    // Get policies from api
    takeLatest(
      PolicyActionTypes.GET_POLICIES_BY_PAGES_REQUEST,
      GetPoliciesByPages,
      api
    ),
    // Create policy from api
    takeLatest(PolicyActionTypes.CREATE_POLICY_REQUEST, CreatePolicy, api),
    // Get policy from api
    takeLatest(PolicyActionTypes.GET_POLICY_REQUEST, GetPolicy, api),
    // Get policy from api
    takeLatest(
      PolicyActionTypes.GET_DEFAULT_POLICY_REQUEST,
      GetDefaultPolicy,
      api
    ),
    // Update policy from api
    takeLatest(PolicyActionTypes.UPDATE_POLICY_REQUEST, UpdatePolicy, api),
    // Update policy from api
    takeLatest(PolicyActionTypes.DELETE_POLICY_REQUEST, DeletePolicy, api),
    // Get policy report from api
    takeLatest(
      PolicyActionTypes.GET_POLICY_REPORT_REQUEST,
      GetPolicyReport,
      api
    ),
    // Get policy plot from api
    takeLatest(PolicyActionTypes.GET_POLICY_PLOT_REQUEST, GetPolicyPlot, api),
    // Get catalog from api
    takeLatest(PolicyActionTypes.GET_CATALOG_REQUEST, GetCatalog, api),
    // Get regions from api
    takeLatest(PolicyActionTypes.GET_REGIONS_REQUEST, GetRegions, api),
    // Get BAU defaults from api
    takeLatest(PolicyActionTypes.GET_BAU_DEFAULTS_REQUEST, GetBauDefaults, api),
    // Get Affordability from api
    takeLatest(
      PolicyActionTypes.UPDATE_AFFORDABILITY_REQUEST,
      UpdateAffordability,
      api
    ),
    // Get Additional Graph from api
    takeLatest(
      PolicyActionTypes.UPDATE_ADDITIONAL_GRAPH_REQUEST,
      UpdateAdditionalGraph,
      api
    ),
    // Get BAU defaults from api
    takeLatest(
      PolicyActionTypes.GET_RESTRICTIONS_REQUEST,
      GetRestrictions,
      api
    ),
    takeLatest(
      PolicyActionTypes.GET_COMPARE_POLICIES_BY_IDS_REQUEST,
      GetComparePoliciesByIdPolicies,
      api
    ),
    // Get reset password from api
    takeLatest(
      ForgotPasswordActionTypes.POST_RESET_PASSWORD_REQUEST,
      ResetPassword,
      api
    ),
    // Get create password from api
    takeLatest(
      ForgotPasswordActionTypes.POST_CREATE_PASSWORD_REQUEST,
      CreatePassword,
      api
    ),
    // Get reset password CONFIRM from api
    takeLatest(
      ForgotPasswordActionTypes.POST_CHANGE_PASSWORD_REQUEST,
      ChangePassword,
      api
    ),
    // Get change current password from api
    takeLatest(
      ForgotPasswordActionTypes.POST_CHANGE_CURRENT_PASSWORD_REQUEST,
      ChangeCurrentPassword,
      api
    ),
    // Post values to validate from api
    takeLatest(ValidateActionTypes.POST_VALIDATE_REQUEST, Validate, api),
    // Get core info from api
    takeLatest(CoreInfoActionTypes.GET_CORE_INFO_REQUEST, CoreInfo, api)
  ])
}

export type RootSaga = typeof root
