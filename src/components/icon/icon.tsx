import React, { FC } from 'react'

import { IconName, IconProps } from './types'

import { Dashboard } from './dashboard'
import { Logo } from './logo'
import { Settings } from './settings'
import { Extension } from './extension'
import { ArrowDropDown } from './arrow-drop-down'
import { ArrowDropUp } from './arrow-drop-up'
import { BreadCrumbs } from './bread-crumbs'
import { FilterDrama } from './filter-drama'
import { CheckCircleOutline } from './check-circle-outline'
import { Dot } from './dot'
import { RadioButtonUnchecked } from './radio-button-unchecked'
import { RadioButtonActive } from './radio-button-active'
import { RadioButtonDone } from './radio-button-done'
import { Add } from './add'
import { Clear } from './clear'
import { Delete } from './delete'

export const Icon: FC<IconProps> = (props) => {
  switch (props.name) {
    case IconName.LOGO:
      return <Logo {...props} />
    case IconName.SETTINGS:
      return <Settings {...props} />
    case IconName.DASHBOARD:
      return <Dashboard {...props} />
    case IconName.EXTENSION:
      return <Extension {...props} />
    case IconName.ARROW_DROP_DOWN:
      return <ArrowDropDown {...props} />
    case IconName.BREAD_CRUMBS:
      return <BreadCrumbs {...props} />
    case IconName.ARROW_DROP_UP:
      return <ArrowDropUp {...props} />
    case IconName.FILTER_DRAMA:
      return <FilterDrama {...props} />
    case IconName.CHECK_CIRCLE_OUTLINE:
      return <CheckCircleOutline {...props} />
    case IconName.DOT:
      return <Dot {...props} />
    case IconName.RADIO_BUTTON_UNCHECKED:
      return <RadioButtonUnchecked {...props} />
    case IconName.RADIO_BUTTON_ACTIVE:
      return <RadioButtonActive {...props} />
    case IconName.RADIO_BUTTON_DONE:
      return <RadioButtonDone {...props} />
    case IconName.ADD:
      return <Add {...props} />
    case IconName.CLEAR:
      return <Clear {...props} />
    case IconName.DELETE:
      return <Delete {...props} />
    default:
      return <div />
  }
}
