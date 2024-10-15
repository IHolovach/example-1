import { ReactNode } from 'react'
import { ComponentTextProps } from '../text'

export type QuestionModalProps = {
  children?: ReactNode
  name?: string
  titleProps?: ComponentTextProps
  actionProps?: ComponentTextProps
  onSubmit: () => void
  onClose: () => void
}
