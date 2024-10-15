import React, { FC } from 'react'
import { useTheme } from 'react-jss'

import { LightTheme } from '../../theme'
import { IconProps } from './types'

export const ArrowBack: FC<IconProps> = (props) => {
  const theme: LightTheme = useTheme()
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <g id="arrow_back_24px">
        <path
          id="icon/navigation/arrow_back_24px"
          d="M4 13L16.17 13L10.58 18.59L12 20L20 12L12 4L10.59 5.41L16.17 11L4 11L4 13Z"
          fill={props.fill || theme.colors.button}
        />
      </g>
    </svg>
  )
}
