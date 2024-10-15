import { TextProps } from '../../text'

export interface FilterItemProps extends TextProps {
  active: boolean
}

export type StyleProps = Partial<FilterItemProps>
