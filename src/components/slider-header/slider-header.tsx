import React, { FC, useEffect, useState } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { Row, Text, Button, Icon, IconButton } from '..'
import { IconName } from '../icon'
import { SliderHeaderProps } from './slider-header.types'
import { useStyle } from './slider-header.styles'

export const SliderHeader: FC<SliderHeaderProps> = ({
  text,
  tx,
  iconName,
  iconFill,
  btnTx,
  btnText = '',
  disabled = false,
  isButtonClicked = false,
  isRevert = false,
  handleRevert,
  onClick,
  handleBtn
}) => {
  const theme: LightTheme = useTheme()
  const [collapseIcon, changeCollapseIcon] = useState(IconName.EXPAND_ALL)
  const [isDisabled, changeIsDisabled] = useState(disabled)
  const customIconFill = isDisabled ? 'inactive' : iconFill
  const classes = useStyle({ disabled: isDisabled, theme })

  const handleOnClick = !isDisabled ? onClick : undefined

  const changeIcon = (condition: boolean) => {
    const icon = condition ? IconName.COLLAPSE : IconName.EXPAND_ALL
    changeCollapseIcon(icon)
  }

  const handleOnRevertToF = () => {
    if (handleRevert) {
      handleRevert()
    }
  }

  useEffect(() => {
    changeIsDisabled(disabled)
    changeIcon(!disabled)
  }, [disabled])

  useEffect(() => {
    changeIcon(isButtonClicked)
  }, [isButtonClicked])

  return (
    <Row
      className={`${classes.row} ${classes.filled}`}
      justifyContent="space-between"
    >
      <Row justifyContent="flex-start">
        <Icon name={iconName} fill={customIconFill} />
        <Text className={classes.title} text={text} tx={tx} preset="h2" />
      </Row>
      <Row>
        {isRevert && (
          <Row className={classes.reply} onClick={handleOnRevertToF}>
            <Icon name={IconName.REPLY_ALL} fill="purple" />
            <Text
              className={classes.replyAll}
              text="Revert to F"
              tx="list.revertToR"
              preset="h5"
              color="purple"
            />
          </Row>
        )}
        {handleBtn && (
          <Row className={classes.btn} justifyContent="flex-end">
            <Button preset="secondary" onClick={handleBtn}>
              <Text text={btnText} tx={btnTx} preset="body" />
            </Button>
          </Row>
        )}
        {onClick && (
          <IconButton
            className={`${classes.collapse} ${iconBtnStyle}`}
            iconName={collapseIcon}
            onClick={handleOnClick}
          />
        )}
      </Row>
    </Row>
  )
}
