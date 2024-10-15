import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'
import { SliderheaderStyleProps } from './slider-header.types'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  row: {
    padding: '8px 32px',
    width: 'calc(100% - 64px)',
    borderRadius: '12px 12px 0 0',
    height: 40
  },
  filled: {
    backgroundColor: ({ disabled }: SliderheaderStyleProps) =>
      disabled ? theme.colors.grey : theme.colors.tableHeader
  },
  title: {
    marginLeft: 24
  },
  collapse: {
    left: 8,
    marginLeft: 8,
    cursor: ({ disabled }: SliderheaderStyleProps) =>
      disabled ? 'default' : 'pointer'
  },
  disabled: {
    backgroundColor: theme.colors.disableRadioBackground,
    boxShadow: 'none!important',
    '& *': {
      fill: theme.colors.inactive
    },
    '&:hover *': {
      boxShadow: 'none',
      fill: theme.colors.inactive
    }
  },
  replyAll: {
    marginLeft: 8,
    width: 'max-content'
  },
  btn: {
    marginLeft: 16
  },
  reply: {
    cursor: theme.cursor,
    '& > *': {
      cursor: theme.cursor
    }
  }
}))
