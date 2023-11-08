//path src/common/components/table/tableData.ts

export type TableColumn = {
  id: number
  label: string
  key: string
  isHidden: boolean
  sortable: boolean
  filterable: boolean
  type: string
  display_order: number
}

export type TableProps<T extends TableDataItem> = {
  data: T[]
  headers: TableColumn[]
  handleEditClick: (item: T) => void
  handleDeleteClick: (item: T) => void
  handleCreateClick: () => void
}

export interface TableDataItem {
  id: number
  name: string
}
