import React, { createContext, FC, useContext, useState } from 'react'
import { IntlProvider } from 'react-intl'

import {
  Locale,
  LocaleContextValue,
  LocaleProviderProps,
  StructuredMessages
} from './locale.types'

const localeEN: StructuredMessages = require('../../i18n/en.json')

const localeData: Record<Locale, Record<string, string>> = {
  // Default language
  [Locale.EN]: localeEN
}

export const localeNames: Record<Locale, string> = {
  [Locale.EN]: 'English'
}

const defaultLocale = Locale.EN

export const LocaleContext = createContext<LocaleContextValue>({
  localeData,
  currentLocale: Locale.EN
})

export const LocaleProvider: FC<LocaleProviderProps> = ({
  locale: localeOverride,
  children
}) => {
  const locale = localeOverride || Locale.EN
  const [currentLocale] = useState(locale)
  const [locales] = useState(localeData)

  const contextState = { localeData: locales, currentLocale }
  return (
    <LocaleContext.Provider value={contextState}>
      <IntlProvider
        defaultLocale={defaultLocale}
        locale={currentLocale}
        messages={locales[currentLocale]}
        key={locale}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  )
}

export const useLocale = () => useContext(LocaleContext)
