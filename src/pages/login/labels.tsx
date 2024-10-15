import { ComponentTextProps } from '../../components'

export const passwordLabelProps: ComponentTextProps = {
  text: 'Password',
  tx: 'password.title',
  color: 'darkBlue'
}

export const oldPasswordLabelProps: ComponentTextProps = {
  text: 'Old Password',
  tx: 'oldpassword.title',
  color: 'darkBlue'
}

export const reEnterPasswordLabelProps: ComponentTextProps = {
  text: 'Re-enter Password',
  tx: 'reEnterPassword.title',
  color: 'darkBlue'
}

export const createPassErrorProps: ComponentTextProps = {
  tx: 'forgotPassword.password.empty.error',
  text: 'Please enter password',
  color: 'red'
}

export const emailLabelProps: ComponentTextProps = {
  text: 'Email',
  tx: 'email.title',
  color: 'darkBlue'
}

export const emailErrorProps: ComponentTextProps = {
  text: 'Please enter email',
  tx: 'forgotPassword.email.error',
  color: 'red'
}

export const errorProps: ComponentTextProps = {
  tx: 'forgotPassword.password.empty.error',
  text: 'Please enter password',
  color: 'red'
}

export const parametersErrorProps: ComponentTextProps = {
  tx: 'forgotPassword.password.test.error',
  text: 'Minimum eight characters, at least one letter and one number',
  color: 'red'
}

export const passMatchProps: ComponentTextProps = {
  tx: 'forgotPassword.match.error',
  text: 'Passwords do not match',
  color: 'red'
}

export const passDifferProps: ComponentTextProps = {
  tx: 'forgotPassword.differ.error',
  text: 'New password must differ from old',
  color: 'red'
}
