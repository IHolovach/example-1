import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { AppCreators } from '../../store'
import { HistoryContextProps } from './history-context.types'

export const HistoryContext: FC<HistoryContextProps> = ({ children }) => {
  const history = useHistory()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(AppCreators.getHistoryContext(history))
  }, [history])

  return <>{children}</>
}
