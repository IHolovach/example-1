import { ComponentTextProps } from '../../../../components'

export interface ForgotPasswordProps {
  className?: string
}

export interface FieldTypes {
  input: string
  password: string
}

export type FieldValues = keyof FieldTypes

export interface TypesValue {
  oldPassword?: FieldValues
  password: FieldValues
  repeatPassword?: FieldValues
}

export type FieldIds = keyof TypesValue

export interface RecoveryPasswordData {
  password: string
  repeatPassword: string
}

export type RecoveryPasswordIds = keyof RecoveryPasswordData

export interface RecoveryPasswordErrorsProps {
  password: ComponentTextProps | undefined
  repeatPassword: ComponentTextProps | undefined
}

export interface ResetPasswordProps {
  className?: string
}

export interface ParamsProps {
  token: string
  uid: string
}
