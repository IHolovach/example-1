import React, { FC, useState } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { Icon, IconName } from '../icon'
import { Row } from '../row'
import { Column } from '../column'
import { Text } from '../text'

import { IconButtonProps } from './icon-button.types'
import { useStyle } from './icon-button.styles'

export const IconButton: FC<IconButtonProps> = ({
  className = '',
  preset = 'default',
  iconName,
  fill = '',
  disabled = false,
  text = '',
  hint,
  yellowHint,
  onClick
}) => {
  const theme: LightTheme = useTheme()
  const [hover, changeHover] = useState(false)
  const classes = useStyle({ theme, hover })
  const { [preset]: modifier } = classes
  const containerClass = disabled ? classes.disabled : classes.hover

  const handleOnHoverState = (state: boolean) => () => {
    changeHover(state)
  }

  return (
    <Row fullWidth>
      <Row
        className={`${modifier} ${containerClass} ${classes.container} ${className}`}
        onMouseOver={handleOnHoverState(true)}
        onMouseOut={handleOnHoverState(false)}
        onClick={onClick}
      >
        <Icon name={iconName} width={24} height={24} fill={fill} />
      </Row>
      {hint && (
        <Row className={classes.hint} fullWidth>
          <Column className={classes.hintContainer}>
            <Text text={text} preset="subTitle" color="inactive" />
          </Column>
        </Row>
      )}
      {yellowHint && (
        <Row className={classes.hint} fullWidth>
          <Column className={classes.yellowHintContainer}>
            <Text text={text} preset="subTitle" color="inactive" />
            <Icon
              className={classes.arrow}
              name={IconName.ARROW_DROP_DOWN}
              fill={theme.colors.yellow}
              height={36}
              width={36}
            />
          </Column>
        </Row>
      )}
    </Row>
  )
}
