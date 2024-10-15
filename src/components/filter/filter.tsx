import React, { FC, useState } from 'react'

import { Row } from '../row'
import { Text } from '../text'
import { FilterItem } from './filter-item'

import { useStyle } from './filter.styles'
import { FilterProps, FilterValue } from './filter.types'

export const Filter: FC<FilterProps> = ({ onClick }) => {
  const classes = useStyle()
  const [filter, changeFilter] = useState<FilterValue>(FilterValue.UPDATED_AT)

  const handleOnClick = (value: FilterValue) => () => {
    changeFilter(value)
    onClick(value)
  }

  return (
    <Row className={classes.container} fullWidth justifyContent="flex-start">
      <Text text="Sort by:" tx="list.filter.title" color="inactive" />
      <Row className={classes.filterContainer}>
      <FilterItem
          active={filter === FilterValue.UPDATED_AT}
          className={classes.filterMargin}
          text="Date Modified"
          tx="list.filter.byDate"
          preset="body"
          onClick={handleOnClick(FilterValue.UPDATED_AT)}
        />
        <FilterItem
          active={filter === FilterValue.NAME}
          className={classes.filterMargin}
          text="Name"
          tx="list.filter.byName"
          preset="body"
          onClick={handleOnClick(FilterValue.NAME)}
        />
      </Row>
    </Row>
  )
}
