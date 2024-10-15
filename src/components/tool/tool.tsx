import React, { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useTheme } from 'react-jss'

import { Content, Column, FrameHTMLComponent } from '..'
import { LightTheme } from '../../theme'
import { PlcCreators, State } from '../../store'
import { Spinner } from '../spinner'
import { Settings } from './settings'

import { useStyle } from './tool.styles'

export const Tool: FC = () => {
  const theme: LightTheme = useTheme()
  const dispatch = useDispatch()
  const { id } = useParams<PlcProps>()
  const { isLoaded, plot, plc } = useSelector((state: State) => ({
    ...state._
    plc: state._.data.find((item) => item.id === id)
  }))
  const classes = useStyle({ theme, isLoaded })

  useEffect(() => {
    if (!plc && id) {
      dispatch(PlcCreators.getPlcRequest({ id }))
    }
  }, [id])

  return (
    <Column fullHeight fullWidth className={classes.container}>
      <Content className={classes.noPadding}>
        <Column
          fullHeight
          fullWidth
          className={classes.frame}
        >
          <Settings id={id} plc={plc} isCalculator />
          {isLoaded ? (
            <FrameHTMLComponent srcDoc={plot} />
          ) : (
            <Column fullHeight>
              <Spinner />
            </Column>
          )}
        </Column>
      </Content>
    </Column>
  )
}
