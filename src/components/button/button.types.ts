import { MouseEvent } from 'react'

import { Color } from '../../theme'

export enum ButtonTypeName {
  accent = 'accent',
  secondary = 'secondary',
  disabled = 'disabled',
  defaultSmall = 'defaultSmall'
}

export interface PresetName {
  button: string
  accent: string
  secondary: string
  disabled: string
  defaultSmall: string
}

export type ButtonProps = {
  preset?: keyof PresetName
  type?: 'submit' | 'button' | 'reset'
  disabled?: boolean
  backgroundColor?: Color
  color?: Color
  className?: string
  isSmall?: boolean
  isLoaded?: boolean
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
