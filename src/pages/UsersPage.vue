<script setup lang="ts">
import { useUsers } from 'src/composables/useUsers'
import { onMounted } from 'vue'
import QTableComponent from 'src/components/shared/QTableComponent.vue'
import UserForm from 'src/components/Forms/UserForm.vue'

const {
  users,
  loading,
  columns,
  visibleColumns,
  pagination,
  filter,
  titleForm,
  showDialog,
  formUser,
  fetchUsers,
  updateFilter,
  addItem,
  editItem,
  deleteNotify,
  onSubmit,
} = useUsers()

onMounted(() => {
  fetchUsers()
})
</script>

<template>
  <q-page class="my-container q-mt-md">
    <q-table-component
      :columns="columns"
      :filter="filter"
      :loading="loading"
      :pagination="pagination"
      row-key="idUser"
      :rows-table="users"
      title="Usuarios"
      :visible-columns="visibleColumns"
      @add-item="addItem"
      @delete-notification="deleteNotify"
      @edit-item="editItem"
      @update:filter="updateFilter"
    />

    <user-form
      v-model="showDialog"
      :form-user="formUser"
      :title-form="titleForm"
      @on-submit="onSubmit"
    />
  </q-page>
</template>
