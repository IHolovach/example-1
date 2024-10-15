import { createUseStyles } from 'react-jss'

import { StyleProps } from '.'
import { LightTheme } from '../../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: ({ active }: StyleProps) => ({
    backgroundColor: active ? theme.colors.white : theme.colors.transparent,
    border: `1px solid ${active ? theme.colors.white : theme.colors.disabled}`,
    cursor: theme.cursor,
    minWidth: 188,
    padding: '0 16px',
    borderRadius: 32,
    height: 32
  }),
  text: {
    cursor: theme.cursor
  }
}))
