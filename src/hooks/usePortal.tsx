import { useRef, useEffect } from 'react'

export function usePortal(id: string) {
  const rootElemRef = useRef(document.createElement('div'))

  useEffect(() => {
    // Look for existing target dom element to append to
    const parentElem = document.querySelector(`#${id}`)
    // Add the detached element to the parent
    if (parentElem) {
      rootElemRef.current.className = 'portalInnerContainer'
      parentElem.appendChild(rootElemRef.current)
      // This function is run on unmount
      return function removeElement() {
        rootElemRef.current.remove()
      }
    }

    throw new Error('Element with id not found')
  }, [])

  return rootElemRef.current
}
