import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { Row } from '..'
import { LightTheme } from '../../theme'
import { Button } from '../button'
import { Column } from '../column'
import { Modal } from '../modal'
import { Text, ComponentTextProps } from '../text'

import { useStyle } from './question-modal.styles'
import { QuestionModalProps } from './question-modal.types'

export const QuestionModal: FC<QuestionModalProps> = ({
  children,
  actionProps,
  onSubmit,
  onClose
}) => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })

  const deleteLabelProps: ComponentTextProps = {
    text: 'Delete',
    tx: 'delete.list.delete',
    ...actionProps
  }

  const handleOnSubmit = () => {
    if (onSubmit) {
      onSubmit()
    }
    onClose()
  }

  return (
    <Modal onClose={onClose}>
      <Column fullWidth fullHeight justifyContent="space-between">
        <Column className={classes.title} fullWidth>
          <Text text="Are you sure?" tx="delete.list.question" preset="h1" />
        </Column>
        <Column
          className={classes.description}
          justifyContent="flex-start"
          fullHeight
          fullWidth
        >
          {children}
        </Column>
        <Row justifyContent="space-around" fullWidth>
          <Button preset="accent" onClick={handleOnSubmit}>
            <Text {...deleteLabelProps} preset="body" />
          </Button>
          <Button preset="secondary" onClick={onClose}>
            <Text text="Cancel" tx="btn.cancel" preset="body" />
          </Button>
        </Row>
      </Column>
    </Modal>
  )
}
