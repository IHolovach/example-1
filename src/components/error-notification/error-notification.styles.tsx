import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    background: theme.colors.roseWhite,
    position: 'fixed',
    top: 16,
    right: 32,
    marginTop: 16,
    zIndex: 3,
    minWidth: 400,
    borderRadius: 12,
    padding: 16
  },
  close: {
    position: 'absolute',
    top: 0,
    right: 0,
    zIndex: 3,
    cursor: theme.cursor
  }
}))
