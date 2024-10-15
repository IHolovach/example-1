import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'

import { Icon, IconName } from '../icon'
import { Row } from '../row'
import { Text } from '../text'

import { useStyle } from './hint.styles'
import { HintProps } from './hint.types'

export const Hint: FC<HintProps> = ({ className = '', preset, text, tx }) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  return (
    <Row
      className={`${className} ${classes.container}`}
      justifyContent="flex-start"
    >
      <Text preset={preset || 'subTitleSetting'} text={text} tx={tx} />
      <Icon
        className={classes.arrow}
        name={IconName.ARROW_DROP_DOWN}
        height={36}
        fill={theme.colors.yellow}
        width={36}
      />
    </Row>
  )
}
