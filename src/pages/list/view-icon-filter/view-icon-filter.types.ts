export enum ViewFilterValue {
  CARD = 'card',
  GRID = 'grid'
}

export type ViewFilterProps = {
  type?: ViewFilterValue
  onClick: (value: ViewFilterValue) => void
}
