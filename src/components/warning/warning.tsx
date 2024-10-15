import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { IconName, Row, Text, Icon } from '../components'

import { WarningProps } from './warning.types'
import { useStyle } from './warning.styles'

export const Warning: FC<WarningProps> = ({ className = '', textProps }) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })

  return (
    <Row className={`${classes.warning} ${className}`}>
      <Icon name={IconName.ALERT_CIRCLE} />
      {textProps && (
        <Text
          className={classes.text}
          color="inactive"
          preset="subTitleSetting"
          {...textProps}
        />
      )}
    </Row>
  )
}
