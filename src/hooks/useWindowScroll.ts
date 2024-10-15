import { useEffect } from 'react'

export const useWindowScroll = (
  cb: () => void
) => {
  useEffect(() => {
    if (!window) {
      return undefined
    }

    window.addEventListener('scroll', cb, true)

    return () => {
      window.removeEventListener('scroll', cb, true)
    }
  }, [cb])

  return window
}

export default useWindowScroll
