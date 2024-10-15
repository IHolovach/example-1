export enum FilterValue {
  NAME = 'name',
  UPDATED_AT = '-updated_at'
}

export type FilterProps = {
  onClick: (value: FilterValue) => void
}
