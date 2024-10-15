import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  warning: {
    position: 'absolute',
    width: 'max-content',
    right: 38,
    backgroundColor: theme.colors.yellowLight,
    padding: '4px 8px',
    borderRadius: 16
  },
  text: {
    marginLeft: 8,
    opacity: 1
  }
}))
