import React, { createContext, useContext, useState } from 'react'

import { useMobileDetect, useWindowResize } from '../../hooks'
import { breakpoints } from './constants'
import {
  DevicesProps,
  ResponsiveProviderProps
} from './responsive-context.types'

const defaultValues: DevicesProps = {
  isDesktop: true,
  isTablet: false,
  isMobile: false,
  isIPhone: false,
  isIPad: false,
  isSafari: false,
  isIOSTablet: false
}

const ResponsiveContext = createContext<DevicesProps>(defaultValues)

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const { isIPhone, isIPad, isSafari, isIOSTablet } = useMobileDetect()
  const [devices, setDevices] = useState<DevicesProps>({
    ...defaultValues,
    isIPhone,
    isIPad,
    isSafari,
    isIOSTablet
  })
  const checkDevices = () => {
    const width = window.innerWidth
    const height = window.innerHeight

    const isDesktop = width > breakpoints.desktop
    const isTablet = width <= breakpoints.desktop
    const isMobile =
      (width <= breakpoints.mobile && width < height) ||
      (height <= breakpoints.mobile && height < width)

    setDevices({
      isDesktop,
      isTablet,
      isMobile,
      isIPhone,
      isIPad,
      isSafari,
      isIOSTablet
    })
  }

  useWindowResize(checkDevices, true)

  return (
    <ResponsiveContext.Provider value={devices}>
      {children}
    </ResponsiveContext.Provider>
  )
}

export default ResponsiveProvider

export const useResponsive = () => useContext(ResponsiveContext)
