import { useEffect } from 'react'

type WindowResizeProps = ClientRect | DOMRect

const screenSize = () => window.document.body.getBoundingClientRect()

export const useWindowResize = (
  cb: (screenInfo?: WindowResizeProps) => void,
  isInitScreenInfo = false
) => {
  const debounceCb = () => cb(screenSize())
  useEffect(() => {
    if (!window) {
      return undefined
    }

    if (isInitScreenInfo) {
      setTimeout(() => cb(screenSize()))
    }

    window.addEventListener('resize', debounceCb)

    return () => {
      window.removeEventListener('resize', debounceCb)
    }
  }, [])

  return window
}

export default useWindowResize
