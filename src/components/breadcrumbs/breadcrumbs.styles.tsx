import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    padding: 0
  },
  text: {
    color: theme.colors.text
  },
  navText: {
    cursor: theme.cursor,
    '& > *': {
      cursor: theme.cursor
    },
    '&:hover > *': {
      fill: theme.colors.hoverGrey,
      color: theme.colors.hoverGrey
    },
    '&:active > *': {
      fill: theme.colors.text,
      color: theme.colors.text
    }
  }
}))
