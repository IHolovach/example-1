import { useState, useEffect } from 'react'

export const useLongPress = (callback: any) => {
  const [startLongPress, setStartLongPress] = useState(false)

  useEffect(() => {
    callback(startLongPress)
  }, [startLongPress])

  return {
    onMouseDown: () => setStartLongPress(true),
    onMouseUp: () => setStartLongPress(false),
    onMouseLeave: () => setStartLongPress(false),
    onTouchStart: () => setStartLongPress(true),
    onTouchEnd: () => setStartLongPress(false)
  }
}
