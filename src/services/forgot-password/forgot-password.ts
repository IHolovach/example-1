import { ApisauceInstance } from 'apisauce'
import camelcaseKeys from 'camelcase-keys'
import snakecaseKeys from 'snakecase-keys'

import { getGeneralApiProblem } from '../api-problem'
import {
  Reset,
  PostResetPasswordResults,
  PostResetPasswordResponse,
  PostChangePasswordResults,
  PostChangeBEPasswordResponse,
  PostChangePasswordRequest,
  PostChangeCurrentPasswordRequest,
  PostChangeCurrentPasswordResults,
  PostChangeCurrentPasswordResponse,
  PostCreatePasswordRequest,
  PostCreatePasswordResults,
  PostCreatePasswordResponse
} from './forgot-password.types'

// our "constructor"
export const forgotPasswordService = (api: ApisauceInstance) => {
  /**
   * Get policies from api service
   */
  const postResetPassword = async ({
    email
  }: Reset): Promise<PostResetPasswordResults> => {
    const body = {
      email
    }
    const response = await api.post<PostResetPasswordResponse>(
      '/user/password/reset',
      body
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }
    try {
      if (response.data) {
        const data = camelcaseKeys(response.data, {
          deep: true
        })

        return { kind: 'ok', ...data }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  const postChangePassword = async (
    userData: PostChangePasswordRequest
  ): Promise<PostChangePasswordResults> => {
    if (!userData) {
      return { kind: 'unknown', temporary: true }
    }

    const { newPass1, newPass2, uid, token } = userData
    const body = {
      new_password1: newPass1,
      new_password2: newPass2,
      uid,
      token
    }
    const response = await api.post<PostChangeBEPasswordResponse>(
      '/user/password/reset/confirm',
      body
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }
    try {
      if (response.data) {
        const data = camelcaseKeys(response.data, {
          deep: true
        })
        return {
          kind: 'ok',
          detail: data.detail
        }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  const postChangeCurrentPassword = async (
    settings: PostChangeCurrentPasswordRequest | undefined
  ): Promise<PostChangeCurrentPasswordResults> => {
    if (!settings) {
      return { kind: 'unknown', temporary: true }
    }

    const body = snakecaseKeys(settings, {
      deep: true
    })
    const response = await api.post<PostChangeCurrentPasswordResponse>(
      '/user/password/change',
      body
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }
    try {
      if (response.data) {
        const { oldPassword, newPassword1, newPassword2 } = camelcaseKeys(
          response.data,
          {
            deep: true
          }
        )

        return {
          kind: 'ok',
          oldPassword,
          newPassword1,
          newPassword2
        }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  const postCreatePassword = async (
    userData: PostCreatePasswordRequest
  ): Promise<PostCreatePasswordResults> => {
    if (!userData) {
      return { kind: 'unknown', temporary: true }
    }

    const { newPass1, newPass2, uid, token } = userData
    const body = {
      new_password1: newPass1,
      new_password2: newPass2,
      uid,
      token
    }
    const response = await api.post<PostCreatePasswordResponse>(
      '/user/password/reset/confirm',
      body
    )

    if (!response.ok) {
      const problem = getGeneralApiProblem(response)
      if (problem) {
        return problem
      }
    }
    try {
      if (response.data) {
        const data = camelcaseKeys(response.data, {
          deep: true
        })
        return {
          kind: 'ok',
          detail: data.detail
        }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  return {
    postResetPassword,
    postChangePassword,
    postChangeCurrentPassword,
    postCreatePassword
  }
}
