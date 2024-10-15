import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    background: '#55555555',
    position: 'fixed',
    top: 0,
    left: 0,
    height: 'calc(100vh)',
    width: '100vw',
    zIndex: 100
  },
  modal: {
    backgroundColor: theme.colors.white,
    borderRadius: 12,
    padding: 32,
    position: 'relative',
    height: 416,
    width: 416,
    boxShadow: theme.boxShadow
  },
  close: {
    position: 'absolute',
    top: 16,
    right: 16,
    cursor: theme.cursor
  }
}))
