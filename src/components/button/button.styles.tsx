import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  button: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    height: 40,
    borderRadius: 6,
    border: 'none',
    fontWeight: 500,
    outline: 'none',
    textDecoration: 'none',
    cursor: theme.cursor,
    '& > *': {
      cursor: theme.cursor,
      textDecoration: 'none'
    },
    '&:disabled, &[disabled]': {
      pointerEvents: 'none',
      cursor: 'default',
      '& > *': {
        cursor: 'default'
      }
    }
  },
  accent: {
    backgroundColor: theme.colors.darkBlue,
    outline: 'none',
    '& > *': {
      color: theme.colors.white
    },
    '&:hover': {
      background: theme.colors.blue,
      '& > *': { color: theme.colors.white }
    },
    '&:disabled, &[disabled]': {
      pointerEvents: 'none',
      backgroundColor: theme.colors.grey,
      '& > *': {
        color: theme.colors.inactive
      },
      '&:hover': {
        '& > *': {
          color: theme.colors.inactive
        }
      }
    },
    '&:active, &[active]': {
      backgroundColor: theme.colors.darkBlue,
      '& > *': {
        color: theme.colors.white
      }
    }
  },
}))
