import { ReactNode } from 'react'

export type ErrorNotificationProps = {
  className?: string
  children?: ReactNode
  onClose?: () => void
}
