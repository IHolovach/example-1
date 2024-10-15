import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    backgroundColor: theme.colors.yellow,
    position: 'relative',
    padding: 8,
    maxWidth: 164,
    whiteSpace: 'normal'
  },
  arrow: {
    position: 'absolute',
    bottom: -20,
    left: '25%'
  }
}))
