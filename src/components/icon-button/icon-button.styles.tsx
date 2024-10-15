import { createUseStyles } from 'react-jss'
import { TextStyleProps } from '..'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    cursor: 'pointer',
    borderRadius: 12,
    padding: 8
  },
  hover: {
    '&:hover': {
      boxShadow: 'inset 0px 2px 2px rgba(0, 0, 0, 0.25)'
    },
    '&:active': {
      boxShadow: 'none'
    }
  },
  disabled: {
    backgroundColor: `${theme.colors.grey}!important`,
    cursor: 'default',
    '& *': {
      fill: `${theme.colors.inactive}!important`,
      cursor: 'default'
    }
  },
  warning: {
    backgroundColor: theme.colors.orange,
    '& *': {
      fill: theme.colors.white
    },
    '&:hover': {
      backgroundColor: theme.colors.hoverYellowButton
    },
    '&:active, &[active]': {
      backgroundColor: theme.colors.orange
    }
  },
  hintContainer: {
    position: 'absolute',
    right: 0,
    top: 24,
    left: 30,
    width: 'max-content',
    padding: '4px 12px',
    backgroundColor: theme.colors.white,
    border: `1px solid ${theme.colors.border}`,
    borderRadius: 4,
    visibility: ({ hover }: TextStyleProps) => (hover ? 'visible' : 'hidden'),
    zIndex: 2
  },
  hint: {
    position: 'absolute'
  },
  yellowHintContainer: {
    position: 'absolute',
    right: 54,
    top: -8,
    width: 'max-content',
    padding: '4px 12px',
    backgroundColor: theme.colors.yellow,
    visibility: ({ hover }: TextStyleProps) => (hover ? 'visible' : 'hidden'),
    zIndex: 2
  },
  arrow: {
    position: 'absolute',
    bottom: -8,
    right: -20,
    transform: 'rotate(-90deg)'
  }
}))
