import { IconName } from '../../../../components'
import { FieldIds, TypesValue } from '../forgot-password'

export const getIconName = (id: FieldIds, types: TypesValue): IconName =>
  types[id] === 'input' ? IconName.VISIBILITY : IconName.VISIBILITY_OFF

export const getReversedBoolean = (element: string) => !element
