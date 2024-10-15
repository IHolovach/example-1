import React, { FC, useCallback, useLayoutEffect } from 'react'

import { useResponsive } from '..'
import { ViewportContextProps } from './viewport-context.types'

export const ViewportContext: FC<ViewportContextProps> = ({ children }) => {
  const { isMobile } = useResponsive()

  const changeViewport = useCallback(() => {
    if (isMobile) {
      const siteWidth = 1280
      const deviceWidth = window.innerWidth
      const scale = deviceWidth / siteWidth
      const viewport = document.querySelector('meta[name="viewport"]')

      if (viewport) {
        viewport.setAttribute(
          'content',
          `target-densitydpi=device-dpi, width=${deviceWidth}, initial-scale=${scale}, maximum-scale=10`
        )
      }
    }
  }, [isMobile])

  useLayoutEffect(() => {
    changeViewport()
  }, [isMobile, changeViewport])

  return <>{children}</>
}
