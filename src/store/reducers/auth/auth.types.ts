import { User } from '../../../services'

export type AuthState = {
  isLoggedIn: boolean
  token: string
  user: User | {}
  error: string
}
