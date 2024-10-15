import { ReactElement } from 'react'

export type DevicesProps = {
  isDesktop: boolean
  isTablet: boolean
  isMobile: boolean
  isIPhone: boolean
  isIPad: boolean
  isSafari: boolean
  isIOSTablet: boolean
}

export type ResponsiveProviderProps = {
  children: ReactElement | ReactElement[]
}
