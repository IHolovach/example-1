import React, { FC, useState, ChangeEvent, FocusEvent } from 'react'

import { useTheme } from 'react-jss'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import {
  Button,
  Column,
  Input,
  Row,
  Text,
  ComponentTextProps
} from '../../../../components'
import { ForgotPasswordCreators } from '../../../../store'
import { LightTheme } from '../../../../theme'
import { emailErrorProps, emailLabelProps } from '../../labels'
import { ForgotPasswordProps } from './forgot-password.types'
import { useStyle } from './forgot-password.styles'

export const ForgotPassword: FC<ForgotPasswordProps> = ({
  className = '',
  ...props
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const history = useHistory()
  const dispatch = useDispatch()
  const [isSent, changeIsSent] = useState<boolean>(false)
  const [email, changeEmail] = useState<string>('')
  const [error, changeError] = useState<ComponentTextProps | undefined>()

  const isSentDisabled = Boolean(error) || !email
  const resetValues = {
    email: <Text text={email} preset="body" className={classes.email} />
  }

  const goToLogin = () => {
    history.push('/')
  }

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target

    changeEmail(value)
  }

  const handleOnBlur = (e: FocusEvent<HTMLInputElement>): void => {
    const { value } = e.target

    const regexp = new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)
    const isEmailCorrect = regexp.test(value)

    if (!isEmailCorrect) {
      changeError(emailErrorProps)
    } else {
      changeError(undefined)
    }
  }

  const handleOnSubmit = () => {
    if (email) {
      const lowerCaseEmail = email.toLowerCase()

      dispatch(
        ForgotPasswordCreators.postResetPasswordRequest({
          email: lowerCaseEmail
        })
      )
      changeIsSent(true)
    } else {
      changeError(!email ? emailErrorProps : undefined)
    }
  }

  return (
    <Column {...props} className={`${className} ${classes.signIn}`}>
      <Column fullHeight fullWidth justifyContent="space-between">
        <Column fullWidth fullHeight>
        {/* TODO: rewrite, create new separate components */}
          {isSent ? (
            <>
              <Row fullWidth justifyContent="flex-start">
                <Text
                  text="Email Sent"
                  tx="emailSent.title"
                  preset="h1"
                  color="text"
                  className={classes.title}
                />
              </Row>
              <Column fullWidth fullHeight justifyContent="space-between">
                <Row
                  fullWidth
                  justifyContent="flex-start"
                  className={classes.container}
                >
                  <Text
                    tx="forgot.success"
                    text="An email with instructions to reset your password has been sent to {email}"
                    values={resetValues}
                    color="text"
                    preset="body"
                  />
                </Row>
                <Row>
                  <Button className={classes.button} onClick={goToLogin}>
                    <Text text="Login" tx="login.title" preset="body" />
                  </Button>
                </Row>
              </Column>
            </>
          ) : (
            <>
            {/* TODO: rewrite, create new separate components */}
              <Row fullWidth justifyContent="flex-start">
                <Text
                  text="Forgot password?"
                  tx="forgot.title"
                  preset="h1"
                  color="text"
                  className={classes.forgot}
                />
              </Row>
              <Row fullWidth justifyContent="flex-start">
                <Text
                  text="Enter the email associated with your account and we’ll send an email with instructions to reset your password."
                  tx="forgot.desc"
                  preset="body"
                  color="text"
                  className={classes.desc}
                />
              </Row>
              <Column fullWidth fullHeight justifyContent="space-between">
                <Row fullWidth className={classes.inputContainer}>
                  <Input
                    id="email"
                    className={classes.input}
                    alignItems="flex-start"
                    isRegular
                    labelProps={emailLabelProps}
                    errorProps={error}
                    defaultValue={email}
                    isFocused={Boolean(email)}
                    onChange={handleOnChange}
                    onBlur={handleOnBlur}
                  />
                </Row>
                <Row>
                  <Button
                    className={classes.button}
                    disabled={isSentDisabled}
                    onClick={handleOnSubmit}
                  >
                    <Text text="Send" tx="send" preset="body" />
                  </Button>
                </Row>
              </Column>
            </>
          )}
        </Column>
      </Column>
    </Column>
  )
}
