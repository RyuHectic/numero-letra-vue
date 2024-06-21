<script setup lang="ts">
import QTableComponent from 'src/components/shared/QTableComponent.vue'
import { useLog } from 'src/composables/useLog'
import { onMounted } from 'vue'

const {
  log,
  loading,
  columns,
  pagination,
  visibleColumns,
  fetchLog
} = useLog()

onMounted(() => {
  fetchLog()
})
</script>

<template>
  <q-page class="my-container q-mt-md">
    <q-table-component
      :add-button="false"
      :columns="columns"
      :loading="loading"
      :pagination="pagination"
      row-key="idLog"
      :rows-table="log"
      title="Log de movimientos"
      :visible-columns="visibleColumns"
    />
  </q-page>
</template>
