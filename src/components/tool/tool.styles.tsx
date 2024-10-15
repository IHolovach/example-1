import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'
import { ToolStyles } from './tools.types'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  noPadding: {
    padding: 0
  },
  container: {
    padding: 16
  },
  frame: {
    height: 550,
    width: 'calc(100% - 64px)',
    padding: '24px 32px',
    borderRadius: 12,
    backgroundColor: theme.colors.white,
    justifyContent: ({ isLoaded }: ToolStyles) =>
      isLoaded ? 'flex-start' : 'center'
  },
  '@media screen and (max-width: 800px)': {
    frame: {
      height: 565
    }
  }
}))
