import { MutableRefObject, useEffect } from 'react'

/**
 * Hook that alerts clicks outside of the passed ref
 */
export const useOutsideAlerter = (
  ref: MutableRefObject<HTMLDivElement | null | undefined>,
  open: boolean,
  onClick: (state?: boolean) => void
) => {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    const handleClickOutside = (event: Document) => {
      // @ts-ignore
      if (ref.current && !ref.current.contains(event.target) && open) {
        onClick(false)
      }
    }

    // Bind the event listener
    if (open) {
      // @ts-ignore
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      // @ts-ignore
      document.removeEventListener('mousedown', handleClickOutside)
    }
    return () => {
      // @ts-ignore
      document.removeEventListener('mousedown', handleClickOutside)
      // Unbind the event listener on clean up
    }
  }, [open])
}
