import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { Button } from '../button'
import { Column } from '../column'
import { Modal } from '../modal'
import { Row } from '../row'
import { Text, ComponentTextProps } from '../text'

import { ErrorModalProps } from './error-modal.types'
import { useStyle } from './error-modal.styles'

export const ErrorModal: FC<ErrorModalProps> = ({
  className = '',
  children,
  titleProps,
  onClose
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })

  const confirmLabelProps: ComponentTextProps = {
    text: 'Ok',
    tx: 'btn.ok'
  }

  const handleOnSubmit = () => {
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Column fullWidth fullHeight justifyContent="space-between">
        {titleProps && (
          <Column className={classes.title} fullWidth>
            <Text {...titleProps} preset="h1" />
          </Column>
        )}
        <Column
          className={`${className} ${classes.container}`}
          alignItems="flex-start"
          fullHeight
          fullWidth
        >
          {children}
        </Column>
        <Row justifyContent="space-around" fullWidth>
          <Button onClick={handleOnSubmit}>
            <Text {...confirmLabelProps} preset="body" />
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
