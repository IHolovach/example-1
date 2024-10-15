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
  desc: {
    marginTop: 28
  },
  container: {
    marginTop: 24
  },
  inputContainer: {
    marginTop: 24
  },
  changeInput: {
    marginTop: 18
  },
  input: {
    width: '100%',
    borderRadius: 6
  },
  button: {},
  email: {
    color: theme.colors.darkBlue,
    textDecoration: 'underline'
  },
  forgot: {
    marginTop: 16
  }
}))
