import { createUseStyles } from 'react-jss'

export const useStyle = createUseStyles({
  title: {
    padding: '40px 0'
  },
  description: {
    width: '100%',
    '& > *': {
      padding: '8px 0'
    }
  }
})
