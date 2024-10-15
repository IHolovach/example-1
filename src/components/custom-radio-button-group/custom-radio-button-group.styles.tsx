import { createUseStyles } from 'react-jss'

import { LightTheme } from '../../theme'
import { RadioStyleProps } from './custom-radio-button-group.types'

export const useStyle = createUseStyles((theme: LightTheme) => ({
  title: {
    '&:hover': {
      color: ({ description }: RadioStyleProps) =>
        !description ? theme.colors.darkBlue : theme.colors.orange,
      cursor: ({ description }: RadioStyleProps) =>
        !description ? 'default' : 'help'
    }
  }
}))
