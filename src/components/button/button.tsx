import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'

import { ButtonProps } from './button.types'
import { useStyle } from './button.styles'

export const Button: FC<ButtonProps> = ({
  preset = 'accent',
  children,
  disabled,
  isSmall = false,
  className = '',
  ...props
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const { [preset]: modifier } = classes

  const smallBtnClass = isSmall ? classes.small : ''

  return (
    <button
      className={`${className} ${classes.button} ${modifier} ${smallBtnClass}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
