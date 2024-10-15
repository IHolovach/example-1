import React, { FC, useCallback, useState } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { Text } from '../text'
import { RadioButtonGroup } from '../radio-button-group'
import { InfoModal } from '../info-modal'

import { CustomRadioButtonGroupProps } from './custom-radio-button-group.types'
import { useStyle } from './custom-radio-button-group.styles'

export const CustomRadioButtonGroup: FC<CustomRadioButtonGroupProps> = ({
  className = '',
  value,
  isUndo = false,
  labelProps,
  firstLabelProps,
  secondLabelProps,
  errorProps,
  description = '',
  statusIcon,
  attentionTx,
  attentionText,
  onChange,
  onUndoClick
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme, description })
  const [openModal, changeOpenModal] = useState(false)

  const handleOnOpenModal = useCallback(
    (state?: boolean) => () => {
      if (typeof state === 'boolean') {
        changeOpenModal(state)
      } else {
        changeOpenModal(!openModal)
      }
    },
    [openModal]
  )

  const handleOnClick = () =>
    description ? handleOnOpenModal(true)() : undefined

  return (
    <>
      <Text
        className={classes.title}
        {...labelProps}
        preset="caption"
        onClick={handleOnClick}
      />
      <RadioButtonGroup
        className={className}
        firstLabelProps={firstLabelProps}
        secondLabelProps={secondLabelProps}
        isAutoHeight
        value={value}
        description={description}
        isUndo={isUndo}
        errorProps={errorProps}
        statusIcon={statusIcon}
        attentionTx={attentionTx}
        attentionText={attentionText}
        onChange={onChange}
        onUndoClick={onUndoClick}
      />

      {openModal && (
        <InfoModal titleProps={labelProps} onClose={handleOnOpenModal(false)}>
          {description && <Text text={description} preset="body" />}
        </InfoModal>
      )}
    </>
  )
}
