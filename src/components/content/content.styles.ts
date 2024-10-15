import { createUseStyles } from 'react-jss'

export const useStyle = createUseStyles({
  container: {
    padding: '16px 0',
    width: 1110
  },
  '@media screen and (max-width: 1170px)': {
    container: {
      padding: '8px 0',
      width: 'calc(790px - 16px)'
    }
  },
  '@media screen and (max-width: 800px)': {
    container: {
      padding: '8px 0',
      width: 'calc(720px - 16px)'
    }
  }
})
