import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  useRef,
  ChangeEvent,
  KeyboardEvent
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { useTheme } from 'react-jss'

import {
  Button,
  Column,
  Input,
  Row,
  Text,
  ComponentTextProps
} from '../../../../components'
import { AuthCreators, State } from '../../../../store'
import { Spinner } from '../../../../components/spinner'
import { LightTheme } from '../../../../theme'
import {
  emailLabelProps,
  errorMessageLabelProps,
  passwordLabelProps
} from './labels'
import { getReversedBoolean, getIconName } from './helpers'
import { TypesValue } from '../forgot-password/forgot-password.types'
import { SignInProps } from './sign-in.types'
import { useStyle } from './sign-in.styles'

export const SignIn: FC<SignInProps> = ({ className = '', ...props }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const [login, changeLogin] = useState({
    email: '',
    password: ''
  })
  const [types, changeTypes] = useState<TypesValue>({
    password: 'password'
  })
  const { isLoaded, error } = useSelector((state: State) => ({
    ...state.app,
    error: state.auth.error
  }))
  const [errorMessage, changeErrorMessage] = useState<
    ComponentTextProps | undefined
  >()
  const ref = useRef<HTMLDivElement>(null)

  const goToForgotPassword = () => {
    history.push('/forgot-password')
  }

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { id, value } = e.target

    changeLogin({
      ...login,
      [id]: value
    })
  }

  const onIconClick = () => {
    const isPassword = types.password !== 'input'
    const type = isPassword ? 'input' : 'password'

    changeTypes({
      ...types,
      password: type
    })
  }
  const onPassIconClick = () => onIconClick()

  const handleOnSubmit = useCallback(() => {
    const { email } = login
    const isAtLeastOneFalse = Object.values(login).some(getReversedBoolean)
    const lowerCaseEmail = email.toLowerCase()

    if (isAtLeastOneFalse) {
      return
    }

    dispatch(
      AuthCreators.loginUserRequest({
        ...login,
        email: lowerCaseEmail
      })
    )
  }, [login])

  const enterPressListener = useCallback(
    (event: KeyboardEvent) => {
      if (event.code === 'Enter' || event.code === 'NumpadEnter') {
        event.preventDefault()
        handleOnSubmit()
      }
    },
    [handleOnSubmit]
  )

  useEffect(() => {
    if (ref && ref.current) {
      // @ts-ignore
      document.addEventListener('keydown', enterPressListener)
    }

    return () => {
      if (ref && ref.current) {
        // @ts-ignore
        document.removeEventListener('keydown', enterPressListener)
      }
    }
  }, [ref, handleOnSubmit, enterPressListener])

  useEffect(() => {
    const message = error ? errorMessageLabelProps : undefined
    changeErrorMessage(message)
  }, [error])

  return (
    <Column {...props} className={`${className} ${classes.signIn}`}>
      {isLoaded ? (
        <Column fullHeight fullWidth justifyContent="space-between">
          <Column fullWidth>
            <Row
              fullWidth
              className={classes.title}
              justifyContent="flex-start"
            >
              <Text text="Login" tx="login.title" preset="h1" color="text" />
            </Row>
            <Column fullWidth className={classes.inputsContainer}>
              <Row fullWidth className={classes.inputContainer}>
                <Input
                  id="email"
                  className={classes.input}
                  alignItems="flex-start"
                  isRegular
                  labelProps={emailLabelProps}
                  defaultValue={login.email}
                  isFocused={Boolean(login.email)}
                  onChange={onChange}
                />
              </Row>
              <Row fullWidth className={classes.inputContainer}>
                <Input
                  alignItems="flex-start"
                  className={classes.input}
                  id="password"
                  isRegular
                  labelProps={passwordLabelProps}
                  type={types.password}
                  iconName={getIconName('password', types)}
                  defaultValue={login.password}
                  isFocused={Boolean(login.password)}
                  errorProps={errorMessage}
                  onChange={onChange}
                  onIconClick={onPassIconClick}
                />
              </Row>
              <Row
                className={classes.forgot}
                fullWidth
                justifyContent="flex-end"
              >
                <Text
                  text="Forgot Password?"
                  tx="forgotPassword"
                  preset="subTitleUnderline"
                  color="blue"
                  onClick={goToForgotPassword}
                />
              </Row>
            </Column>
          </Column>
          <Row ref={ref}>
            <Button className={classes.button} onClick={handleOnSubmit}>
              <Text text="Login" tx="login.title" preset="body" />
            </Button>
          </Row>
        </Column>
      ) : (
        <Spinner />
      )}
    </Column>
  )
}
