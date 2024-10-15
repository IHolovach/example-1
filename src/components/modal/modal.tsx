import React, { FC, MouseEvent } from 'react'
import ReactDOM from 'react-dom'
import { useTheme } from 'react-jss'

import { usePortal } from '../../hooks'
import { LightTheme } from '../../theme'
import { Column } from '../column'
import { Icon, IconName } from '../icon'

import { ModalProps } from './modal.types'
import { useStyle } from './modal.styles'

export const Modal: FC<ModalProps> = ({ className, children, onClose }) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const target = usePortal('modal')

  const handleOnPropagationBackground = (
    event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>
  ) => {
    event.preventDefault()
    event.stopPropagation()
  }

  return ReactDOM.createPortal(
    <Column className={classes.container}>
      <Column className={`${classes.modal} ${className}`} onClick={handleOnPropagationBackground}>
        <Icon
          className={classes.close}
          name={IconName.CLEAR}
          onClick={onClose}
        />
        {children}
      </Column>
    </Column>,
    target
  )
}
