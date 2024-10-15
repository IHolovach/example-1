import { GetCurrentPartProps } from './list.types'

export const getCurrentPart = ({
  count,
  current,
  limit = 6
}: GetCurrentPartProps) => {
  if (!count) {
    return 0
  }

  const left = count - current
  const isBetterLimit = left < limit
  
  return isBetterLimit ? left : limit
}
