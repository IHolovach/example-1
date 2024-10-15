import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../../../theme'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  signIn: {
    position: 'relative',
    backgroundColor: theme.colors.white,
    padding: 32,
    borderRadius: 12,
    width: 416,
    height: 376
  },
  title: {
    marginTop: 16
  },
  inputsContainer: {
    marginTop: 28
  },
  inputContainer: {
    marginTop: 24
  },
  input: {
    width: '100%',
    borderRadius: 6
  },
  forgot: {
    marginTop: 8,
    '& > *': {
      cursor: theme.cursor
    }
  },
  button: {}
}))
