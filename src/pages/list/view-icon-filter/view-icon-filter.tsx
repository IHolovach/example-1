import React, { FC, useState } from 'react'

import { IconButton, IconName, Row } from '../../../components'
import { ViewFilterProps, ViewFilterValue } from './view-icon-filter.types'
import { useStyle } from './view-icon-filter.styles'

export const ViewIconFilter: FC<ViewFilterProps> = ({ type, onClick }) => {
  const classes = useStyle()
  const [filter, changeFilter] = useState<ViewFilterValue>(
    type || ViewFilterValue.CARD
  )

  const handleOnClick = () => {
    const value =
      filter === ViewFilterValue.CARD
        ? ViewFilterValue.GRID
        : ViewFilterValue.CARD
    changeFilter(value)
    onClick(value)
  }

  const text =
    filter === ViewFilterValue.CARD
      ? 'Switch to List View'
      : 'Switch to Card View'

  const preset = filter === ViewFilterValue.CARD ? 'whiteBlack' : 'blackWhite'

  return (
    <Row className={classes.container} justifyContent="flex-start">
      <Row className={classes.filterContainer}>
        <IconButton
          yellowHint
          text={text}
          preset={preset}
          iconName={IconName.WIDGETS}
          onClick={handleOnClick}
        />
      </Row>
    </Row>
  )
}
