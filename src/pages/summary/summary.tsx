import React, { FC } from 'react'

import { SummaryList, Column } from '../../components'

export const Summary: FC = () => {
  return (
    <Column fullWidth justifyContent="flex-start">
      <SummaryList />
    </Column>
  )
}
