import { ReactNode } from 'react'

export enum Locale {
  EN = 'en'
}

export type StructuredMessages = Record<string, string>

export type LocaleProviderProps = {
  children: ReactNode
  locale?: Locale
}

export type LocaleContextValue = {
  currentLocale: Locale
  localeData: Record<Locale, Record<string, string>>
}
