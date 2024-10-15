import { createUseStyles } from 'react-jss'

import Background from '../components/icon/background.svg'
import { MainStyleProps } from './main.types'

export const useStyle = createUseStyles({
  container: {
    backgroundImage: ({ isLoggedIn }: MainStyleProps) => !isLoggedIn && `url(${Background})`,
    backgroundSize: 'cover',
    minHeight: '100vh'
  }
})
