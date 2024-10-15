import { ReactNode } from 'react'

import { ComponentTextProps } from '../text'

export type ErrorModalProps = {
  className?: string
  children?: ReactNode
  titleProps?: ComponentTextProps
  titleLabelProps?: ComponentTextProps
  onSubmit?: () => void
  onClose: () => void
}
