import React, { useEffect, useState, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useTheme } from 'react-jss'

import {
  Row,
  Content,
  IconName,
  Column,
  Text,
  Filter,
  FilterValue,
  IconButton,
  CreateNewModal
} from '../../components'
import { LightTheme } from '../../theme'
import { PlcCreators, State } from '../../store'
import { useResponsive } from '../../providers'

import { AddItemList } from './add-item-list'
import { ListView } from './list-view'
import { getCurrentPart } from './helpers'
import { ViewFilterValue } from './view-filter'
import { ViewIconFilter } from './view-icon-filter'
import { CardView } from './card-view'

import { useStyle } from './list.styles'

const LIMIT = 8

export const ComparisonList = () => {
  const theme: LightTheme = useTheme()
  const classes = useStyle({ theme })
  const dispatch = useDispatch()
  const { list, count, current, next } = useSelector((state: State) => ({
    isLoaded: state.app.isLoaded,
    list: state._.data,
    count: state._.count,
    next: state._.next,
    current: state._.data.length
  }))
  const selectedView = localStorage.getItem('view') as ViewFilterValue
  const [orderBy, changeOrderBy] = useState<string>(FilterValue.UPDATED_AT)
  const [view, changeView] = useState<ViewFilterValue>(
    selectedView || ViewFilterValue.CARD
  )
  const [openCompare, changeOpenCompare] = useState(false)
  const [openModal, changeOpenModal] = useState(false)
  const [part, changePart] = useState(0)
  const [itemToCompare, changeItemToCompare] = useState(undefined)
  const { isTablet } = useResponsive()
  const ColRow = isTablet ? Column : Row

  // first loading
  useEffect(() => {
    dispatch(
      PlcCreators.getPlcRequest({
        offset: 0,
        limit: LIMIT,
        ordering: orderBy
      })
    )
  }, [])

  // run only when we delete all policies but still have several on BE
  useEffect(() => {
    if (isLoadAllowed && isGridView) {
      dispatch(
        PlcCreators.getPlcRequest({
          offset: 0,
          limit: LIMIT,
          ordering: orderBy
        })
      )
      return
    }

    if (isLoadCardsOnCompare) {
      dispatch(
        PlcCreators.getPlcRequest({
          offset: 0,
          limit: 6,
          ordering: orderBy
        })
      )
      return
    }

    if (isLoadRegularCards) {
      dispatch(
        PlcCreators.getPlcRequest({
          offset: 0,
          limit: LIMIT,
          ordering: orderBy
        })
      )
      return
    }

    if (isLoadRegularCardsAfterCompare) {
      dispatch(
        PlcCreators.getPlcRequest({
          offset: 0,
          limit: LIMIT,
          ordering: orderBy
        })
      )
    }
  }, [count, list, openCompare])

  useEffect(() => {
    if (!openCompare) {
      changeItemToCompare(undefined)
    }
  }, [openCompare])

  const handleOnClick = useCallback(() => {
    changeOpenCompare(!openCompare)

    dispatch(PlcCreators.resetDraggablePlc())
  }, [openCompare])

  const handleOnPickFilter = useCallback((ordering: FilterValue) => {
    changeOrderBy(ordering)
    dispatch(
      PlcCreators.getPlcRequest({ ordering, offset: 0, limit: LIMIT })
    )
  }, [])

  const handleOnPickViewFilter = useCallback((viewId: ViewFilterValue) => {
    changeView(viewId)
    localStorage.setItem('view', String(viewId))
  }, [])

  const handleOnOpenModal = (state?: boolean) => () => {
    if (typeof state === 'boolean') {
      changeOpenModal(state)
    } else {
      changeOpenModal(!openModal)
    }
  }

  const handleOnAddToCompare = useCallback((item: any) => {
    changeItemToCompare(item)
  }, [])

  useEffect(() => {
    const currentPart = getCurrentPart({
      count,
      current,
      limit: LIMIT
    })
    changePart(currentPart)
  }, [current])

  return (
    <Column className={classes.container} justifyContent="flex-start" fullWidth>
      <Content className={classes.content}>
        <Row className={classes.innerContent} fullWidth alignItems="flex-start">
          <Column fullWidth>
            <Row fullWidth justifyContent="space-between">
              <Text text="" tx="_.title" preset="h1" />
              {/* TODO: move to another component */}
              <Row className={classes.iconButtons}>
                <IconButton
                  hint
                  text="New"
                  preset="primary"
                  iconName={IconName.ADD}
                  onClick={handleOnOpenModal(true)}
                />
                {!openCompare && (
                  <IconButton
                    hint
                    text="Compare"
                    disabled={!current}
                    preset="warning"
                    iconName={IconName.COMPARE}
                    onClick={handleOnClick}
                  />
                )}
              </Row>
            </Row>
            <ColRow fullWidth justifyContent="space-between">
              <Filter onClick={handleOnPickFilter} />
              <ViewIconFilter type={view} onClick={handleOnPickViewFilter} />
            </ColRow>
            {/* TODO: move to another component */}
            {view === 'card' ? (
              <CardView
                count={count}
                openCompare={openCompare}
                orderBy={orderBy}
                current={current}
                part={part}
                handleOnAddToCompare={handleOnAddToCompare}
              />
            ) : (
              <ListView
                count={count}
                openCompare={openCompare}
                orderBy={orderBy}
                current={current}
                part={part}
                handleOnAddToCompare={handleOnAddToCompare}
              />
            )}
          </Column>
          {openCompare && (
            <AddItemList item={itemToCompare} onBack={handleOnClick} />
          )}
          {openModal && <CreateNewModal onClose={handleOnOpenModal(false)} />}
        </Row>
      </Content>
    </Column>
  )
}
