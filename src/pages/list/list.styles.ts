import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  container: {
    padding: '0 16px',
    minHeight: 660
  },
  content: {
    marginTop: 16,
    padding: 0
  },
  listView: {
    minHeight: 660
  },
  iconButtons: {
    '& > *': {
      marginLeft: 24
    }
  },
  innerContent: {},
  '@media screen and (max-width: 1170px)': {
    content: {
      maxWidth: 760,
      minWidth: 760,
      minHeight: 860,
      justifyContent: 'center',
      alignContent: 'center'
    },
    innerContent: {
      position: 'absolute',
      width: '100%',
      height: '100%',
      overflowX: 'scroll',
      overflowY: 'hidden',
      justifyContent: 'flex-start',
      '&::-webkit-scrollbar': {
        height: 10
      },
      /* Track */
      '&::-webkit-scrollbar-track': {
        background: '#f1f1f1'
      },
      /* Handle */
      '&::-webkit-scrollbar-thumb': {
        background: theme.colors.grey
      },
      /* Handle on hover */
      '&::-webkit-scrollbar-thumb &:hover': {
        background: theme.colors.hoverGrey
      }
    }
  },
  '@media screen and (max-width: 800px)': {
    content: {
      maxWidth: 660,
      minWidth: 660,
      minHeight: 860,
      justifyContent: 'center',
      alignContent: 'center'
    }
  }
}))
