<!-- eslint-disable func-call-spacing -->
<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts">
import { IColumns } from 'src/composables/common'
import { IPagination } from 'src/composables/common/IPagination'
import { computed, toRefs } from 'vue'

export interface IProps {
    loading: boolean,
    rowKey: string,
    rowsTable: readonly any[] | undefined,
    title: string,
    columns: IColumns[] | undefined,
    visibleColumns: readonly any[] | undefined,
    pagination: IPagination,
    filter: string | number | null,
    addButton?: boolean,
  }
const propsTable = withDefaults(defineProps<IProps>(), {
  loading: false,
  rowKey: '',
  rowsTable: undefined,
  title: '',
  columns: undefined,
  visibleColumns: undefined,
  pagination: undefined,
  filter: '',
  addButton: true,
})

const emits = defineEmits<
{ (event: 'deleteNotification', selectedRow: any): void,
  (event: 'addItem'): void,
  (event: 'editItem', selectedRow: any, onlyView: boolean): void,
  (event: 'update:filter', oFilter: string | number | null): void
}>()

const { loading, rowKey, rowsTable, title, columns, visibleColumns, pagination, filter, addButton } = toRefs(propsTable)

const myPagination = computed({
  get() {
    return pagination.value
  },
  set() {
    // not in use
  },
})

function handleDeleteNotify(selectedRow: any) {
  emits('deleteNotification', selectedRow)
}

function handleAddItem() {
  emits('addItem')
}

function handleEditItem(selectedRow: any, onlyView: boolean) {
  emits('editItem', selectedRow, onlyView)
}

function setFullscreen(props: { toggleFullscreen: () => void; }) {
  props.toggleFullscreen()
}

</script>

<template>
  <div class="q-pa-md fit">
    <q-table
      v-model:pagination="myPagination"
      bordered
      class="my-sticky-virtscroll-table"
      :columns="columns"
      :filter="filter"
      flat
      :loading="loading"
      :row-key="rowKey"
      :rows="rowsTable"
      :rows-per-page-options="[0]"
      :title="title"
      virtual-scroll
      :virtual-scroll-sticky-size-start="48"
      :visible-columns="visibleColumns"
    >
      <template #loading>
        <q-inner-loading
          color="secondary"
          showing
        />
      </template>

      <template #top-right="props">
        <q-btn
          v-if="addButton"
          class="q-mx-md"
          color="secondary"
          icon-right="bi-plus"
          no-caps
          @click="handleAddItem"
        >
          <q-tooltip
            anchor="bottom middle"
            class="bg-gray"
            self="top middle"
          >
            Agregar
          </q-tooltip>
        </q-btn>

        <q-space />
        <q-btn
          dense
          flat
          :icon="props.inFullscreen ? 'bi-fullscreen-exit' : 'bi-fullscreen'"
          round
          @click="setFullscreen(props)"
        >
          <q-tooltip
            anchor="bottom middle"
            class="bg-gray"
            self="top middle"
          >
            {{ props.inFullscreen ? 'Salir de pantalla completa' : 'Pantalla completa' }}
          </q-tooltip>
        </q-btn>
      </template>

      <template #body-cell-bitActive="props">
        <q-td :props="props">
          <q-chip
            class="text-weight-bolder"
            :color="props.row.bitActive === true ? 'green': 'grey'"
            dense
            square
            :text-color="props.row.bitActive === true ? 'white': 'grey-4'"
          >
            {{ props.row.bitActive === true ? 'Activo' : 'Inactivo' }}
          </q-chip>
        </q-td>
      </template>

      <template #body-cell-action="props">
        <q-td :props="props">
          <q-btn
            class="btn-edit"
            dense
            field="edit"
            flat
            icon="bi-pencil"
            @click="handleEditItem(props.row, false)"
          >
            <q-tooltip
              anchor="bottom middle"
              class="bg-gray"
              self="top middle"
            >
              Editar registro
            </q-tooltip>
          </q-btn>
          <q-btn
            class="q-ml-md btn-delete"
            dense
            field="edit"
            flat
            icon="bi-trash"
            @click="handleDeleteNotify(props.row)"
          >
            <q-tooltip
              anchor="bottom right"
              class="bg-gray"
              self="top middle"
            >
              Eliminar registro
            </q-tooltip>
          </q-btn>
        </q-td>
      </template>
    </q-table>
  </div>
</template>

<style src="src/css/table.scss" scoped></style>

<style lang="sass">
.my-sticky-virtscroll-table
  /* height or max-height is important */
  height: calc(100vh - 120px)

  .q-table__top,
  .q-table__bottom,
  thead tr:first-child th /* bg color is important for th; just specify one */
    background-color: $primary
    color: white

  thead tr th
    position: sticky
    z-index: 1
  /* this will be the loading indicator */
  thead tr:last-child th
    /* height of all previous header rows */
    top: 48px
  thead tr:first-child th
    top: 0

  /* prevent scrolling behind sticky top row on focus */
  tbody
    /* height of all previous header rows */
    scroll-margin-top: 48px
</style>
