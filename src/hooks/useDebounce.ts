import { useRef } from 'react';
import { debounce } from 'debounce'

export default function useDebounce(
  callback: (val: any) => any,
  delay: number
) {
  const savedCallback = useRef<any>(debounce(callback, delay))

  return savedCallback.current
}
