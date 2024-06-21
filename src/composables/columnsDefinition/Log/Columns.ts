/* eslint-disable @typescript-eslint/no-explicit-any */
import { IColumns, actionColumn } from 'src/composables/common'

export const columnsUser: IColumns[] = [
  { name: 'intNumber', label: 'Numero', field: 'intNumber', align: 'left', sortable: true, format: (val: number) => `${val.toString()}` }
]

export const columns: IColumns[] =
  [
    {
      name: 'idLog',
      required: false,
      label: 'ID',
      align: 'center',
      field: (row: { name: any; }) => row.name,
      format: (val: any) => `${val}`,
      sortable: true
    },
    ...columnsUser,
    { name: 'strNumberLetter', label: 'Letra', field: 'strNumberLetter', align: 'left', sortable: true },
    ...actionColumn
  ]
