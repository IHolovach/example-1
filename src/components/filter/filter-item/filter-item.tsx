import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { Color, LightTheme } from '../../../theme'
import { Row } from '../../row'
import { Text } from '../../text'

import { FilterItemProps } from './filter-item.types'
import { useStyle } from './filter-item.styles'

export const FilterItem: FC<FilterItemProps> = ({
  active,
  className = '',
  onClick,
  ...props
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ active, theme })
  const textColor: Color = active ? 'text' : 'inactive'

  return (
    <Row className={`${className} ${classes.container}`} onClick={onClick}>
      <Text className={classes.text} {...props} color={textColor} />
    </Row>
  )
}
