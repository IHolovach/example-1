import React from 'react'

import { Column } from '../column'
import { Content } from '../content'
import { Spinner } from '../spinner'

export const ContentSpinner = () => (
  <Column fullFilledHeight>
    <Content>
      <Spinner />
    </Content>
  </Column>
)
