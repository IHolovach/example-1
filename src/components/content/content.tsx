import React, { forwardRef } from 'react'

import { Column } from '../column'

import { ContentProps } from './content.types'
import { useStyle } from './content.styles'

export const Content = forwardRef<HTMLDivElement, ContentProps>(
  ({ className, children }, ref) => {
    const classes = useStyle()
    return (
      <Column
        ref={ref}
        className={`${className} ${classes.container}`}
        justifyContent="flex-start"
      >
        {children}
      </Column>
    )
  }
)
