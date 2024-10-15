import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'react-jss'
import { Provider } from 'react-redux'

import {
  LocaleProvider,
  ResponsiveProvider,
  HistoryContext,
  ViewportContext
} from './providers'
import { MainRouter } from './routes'
import { lightTheme } from './theme'
import createStore from './store'

// create our store
const store = createStore()

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <HistoryContext>
          <LocaleProvider>
            <ResponsiveProvider>
              <ViewportContext>
                <ThemeProvider theme={lightTheme}>
                  <div id="modal" />
                  <div id="notification" />
                  <MainRouter />
                </ThemeProvider>
              </ViewportContext>
            </ResponsiveProvider>
          </LocaleProvider>
        </HistoryContext>
      </Provider>
    </BrowserRouter>
  )
}

export default App
