/* eslint-disable @typescript-eslint/no-explicit-any */
import { IColumns, actionColumn } from 'src/composables/common'

export const columnsUser: IColumns[] = [
  { name: 'strName', label: 'Nombre', field: 'strName', align: 'left', sortable: true },
  { name: 'strLastName', label: 'Apellido', field: 'strLastName', align: 'left', sortable: true },
  { name: 'fxCompleteName', label: 'Nombre', field: 'fxCompleteName', align: 'left', sortable: true }
]

export const columns: IColumns[] =
  [
    {
      name: 'IdUser',
      required: false,
      label: 'ID',
      align: 'center',
      field: (row: { name: any; }) => row.name,
      format: (val: any) => `${val}`,
      sortable: true
    },
    ...columnsUser,
    { name: 'strUser', label: 'Usuario', field: 'strUser', align: 'left', sortable: true },
    { name: 'strPassword', label: 'Password', field: 'strPassword', align: 'left', sortable: true },
    { name: 'bitActive', label: 'Activo', field: 'bitActive', align: 'left', sortable: true },
    ...actionColumn
  ]
