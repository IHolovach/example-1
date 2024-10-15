import React, { FC, MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import { useTheme } from 'react-jss'

import { usePortal } from '../../hooks'
import { LightTheme } from '../../theme'
import { Column } from '../column'
import { Row } from '../row'
import { Icon, IconName } from '../icon'

import { ErrorNotificationProps } from './error-notification.types'
import { useStyle } from './error-notification.styles'

export const ErrorNotification: FC<ErrorNotificationProps> = ({
  className,
  children,
  onClose
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const target = usePortal('notification')

  const handleOnPropagationBackground = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return ReactDOM.createPortal(
    <Column
      alignItems="flex-start"
      className={`${classes.container} ${className}`}
      onClick={onClose}
    >
      <Column
        alignItems="flex-start"
        fullWidth
        onClick={handleOnPropagationBackground}
      >
        <Icon
          className={classes.close}
          name={IconName.CLEAR}
          fill="red"
          onClick={onClose}
        />
        <Row fullWidth>
          {children}
        </Row>
      </Column>
    </Column>,
    target
  )
}
