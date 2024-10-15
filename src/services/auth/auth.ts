import { ApisauceInstance } from 'apisauce'
import camelcaseKeys from 'camelcase-keys'

import { getGeneralApiProblem } from '../api-problem'
import {
  GetLoginRequest,
  GetLoginResponse,
  GetLoginResults,
  GetUserMeResponse,
  GetUserMeResults,
  RegenerateTokenRequest
} from './auth.types'

// our "constructor"
export const authService = (api: ApisauceInstance) => {
  /**
   * Login user request from service
   * @param userData - Data about user to login auth
   */
  const login = async ({
    email,
    password
  }: GetLoginRequest): Promise<GetLoginResults> => {
    const response = await api.post<GetLoginResponse>('/user/token-access', {
      email,
      password
    })

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

        return { kind: 'ok', token: data.token }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  /**
   * Regenerate request the token from service
   * @param userData - with token in options
   */
  const regenerateToken = async ({
    token
  }: RegenerateTokenRequest): Promise<GetLoginResults> => {
    const response = await api.post<GetLoginResponse>('/user/token-refresh', {
      token
    })

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
        return { kind: 'ok', token: data.token }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  const getUserMe = async (): Promise<GetUserMeResults> => {
    const response = await api.get<GetUserMeResponse>('/user/me')

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

        return { kind: 'ok', user: data }
      }

      return { kind: 'bad-data' }
    } catch {
      return { kind: 'bad-data' }
    }
  }

  return {
    login,
    regenerateToken,
    getUserMe
  }
}
