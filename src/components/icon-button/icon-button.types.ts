import { MouseEvent } from 'react'

import { Color } from '../../theme'
import { IconName } from '../icon'

export enum IconButtonTypeName {
  default = 'default',
  primary = 'primary',
  warning = 'warning',
  danger = 'danger',
  success = 'success',
  blackWhite = 'blackWhite',
  whiteBlack = 'whiteBlack',
  up = 'up'
}

export interface IconPresetName {
  container: string
  default: string
  primary: string
  warning: string
  danger: string
  success: string
  blackWhite: string
  whiteBlack: string
  up: string
}

export type IconButtonProps = {
  className?: string
  preset?: keyof IconPresetName
  iconName: IconName
  fill?: Color
  disabled?: boolean
  text?: string
  maxLength?: number
  hint?: boolean
  yellowHint?: boolean
  onClick?: (event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>) => void
}

export type IconButtonStyleProps = Partial<IconButtonProps>
