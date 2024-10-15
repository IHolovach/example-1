import { ComponentTextProps, TextTranslate } from '../text'

export interface CustomRadioButtonGroupProps {
  className?: string
  value?: boolean
  isUndo?: boolean
  labelProps: ComponentTextProps
  firstLabelProps?: ComponentTextProps
  secondLabelProps?: ComponentTextProps
  description?: string
  errorProps?: ComponentTextProps | undefined
  statusIcon?: boolean
  attentionText?: string
  attentionTx?: TextTranslate
  onChange?: (status: boolean) => void
  onUndoClick?: () => void
}

export interface RadioStyleProps extends Partial<CustomRadioButtonGroupProps> {
  isAutoHeight?: boolean
}
