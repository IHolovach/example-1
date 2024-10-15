import React, { FC } from 'react'
import { useHistory } from 'react-router-dom'

import {
  Row,
  Content,
  IconName,
  Column,
  Text,
  Icon,
  ComponentTextProps
} from '..'
import { BreadcrumbsProps } from './breadcrumbs.types'
import { useStyle } from './breadcrumbs.styles'

export const Breadcrumbs: FC<BreadcrumbsProps> = ({
  className,
  textProps,
  to
}) => {
  const classes = useStyle()
  const history = useHistory()

  const textLabelProps: ComponentTextProps = {
    tx: 'back.title',
    text: 'Back',
    ...textProps
  }

  const goBack = () => {
    if (to) {
      history.push(to)
    }
    history.goBack()
  }

  if (history.length < 2) {
    return null
  }

  return (
    <Column justifyContent="flex-start" className={className}>
      <Content className={classes.container}>
        <Row
          className={classes.navText}
          justifyContent="flex-start"
          fullWidth
          onClick={goBack}
        >
          <Icon name={IconName.BREAD_CRUMBS} fill="text" />
          <Text {...textLabelProps} className={classes.text} preset="body" />
        </Row>
      </Content>
    </Column>
  )
}
