import React from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import { Column, Footer, Header } from '../components'
import {
  List,
  LoginPage,
  ForgotPasswordPage,
  ResetPasswordPage,
  ChangePasswordPage,
  ComparePage,
  ChartsPage,
  CreatePasswordPage,
  Summary,
  Tool
} from '../pages'
import { State } from '../store'
import { useStyle } from './main.styles'

export const MainRouter = () => {
  const { isLoggedIn, isAppReady } = useSelector((state: State) => ({
    ...state.auth,
    ...state.app
  }))
  const classes = useStyle({ isLoggedIn })

  if (!isAppReady) {
    return <></>
  }

  return (
    <Column justifyContent="space-between" className={classes.container}>
      <Header isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route exact path="/create-password/password/:token/:uid">
            <CreatePasswordPage />
          </Route>
          <Route exact path="/forgot-password">
            <ForgotPasswordPage />
          </Route>
          <Route exact path="/forgot-password/password/:token/:uid">
            <ResetPasswordPage />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/change-password">
            <ChangePasswordPage />
          </Route>
          <Route exact path="/list">
            <List />
          </Route>
          <Route exact path="/list/compare/:ids">
            <ComparePage />
          </Route>
          <Route exact path="/list/charts/:ids">
            <ChartsPage />
          </Route>
          <Route exact path="/list/:id/summary">
            <Summary />
          </Route>
          <Route exact path="/list/:id/tool">
            <Tool />
          </Route>
          <Route>
            <Redirect from="/" to="/list" />
          </Route>
        </Switch>
      )}
      <Footer isLoggedIn={isLoggedIn} />
    </Column>
  )
}
