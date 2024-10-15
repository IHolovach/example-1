import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  header: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0
  },
  navContainer: {
    '& + &': {
      marginLeft: 48
    }
  },
  navText: {
    minWidth: 80,
    textAlign: 'center'
  },
  icon: {
    marginLeft: 16,
    cursor: theme.cursor
  },
  complexContainer: {
    marginLeft: 120
  },
  menu: {
    position: 'absolute',
    right: 0,
    top: 78,
    zIndex: 3
  },
  logo: {
    cursor: theme.cursor
  },
  filledBackground: {
    backgroundColor: theme.colors.white
  }
}))
