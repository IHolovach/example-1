import { CustomHistory } from '../../actions/app/app.types'

export type AppState = {
  isAppReady: boolean
  isLoaded: boolean
  history: CustomHistory | null
}
