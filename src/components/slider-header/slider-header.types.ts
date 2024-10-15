import { Color } from '../../theme'
import { IconName, TextTranslate } from '..'
import { TextProps } from '../text'

export interface BtnProps {
  btnText: string
  btnTx?: TextTranslate
}

export interface SliderHeaderProps extends TextProps {
  iconName: IconName
  iconFill: Color
  btnText?: string
  btnTx?: TextTranslate
  disabled?: boolean
  isButtonClicked?: boolean
  isRevert?: boolean
  handleRevert?: () => void
  onClick?: () => void
  handleBtn?: () => void
}

export interface SliderheaderStyleProps {
  disabled: boolean
}
