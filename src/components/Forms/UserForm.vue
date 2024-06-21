<!-- eslint-disable func-call-spacing -->
<script setup lang="ts">
import { IUserDTO } from 'src/app/core/users'
import { toRefs } from 'vue'
import QToggleComponent from 'src/components/shared/QToggleComponent.vue'
import QInputComponent from '../shared/QInputComponent.vue'

export interface IFormProps {
  titleForm: string,
  modelValue: boolean,
  formUser: IUserDTO
}
const props = defineProps<IFormProps>()

const emits = defineEmits<{
  (event: 'onSubmit', formUser: IUserDTO): void
  (event: 'update:modelValue', value: boolean): void
}>()

const { titleForm, modelValue, formUser } = toRefs(props)

const handleOnSubmit = () => {
  handleClose()
  emits('onSubmit', formUser.value)
}

function updateValue(value: boolean) {
  emits('update:modelValue', value)
}

function handleClose() {
  updateValue(false)
}
</script>

<template>
  <q-dialog :model-value="modelValue" @update:model-value="updateValue">
    <q-card class="card my-card with-close">
      <q-card-section>
        <q-btn
          v-close-popup
          class="float-right my-close-icon"
          color="grey-8"
          dense
          flat
          icon="close"
          round
          @click="handleClose"
        />
      </q-card-section>

      <q-form
        class="q-gutter-md"
        @reset="handleClose"
        @submit.prevent="handleOnSubmit"
      >
        <q-card-section class="q-pt-none">
          <q-list class="scroll-area-form scroll">
            <q-item>
              <q-item-section>
                <q-input-component
                  v-model="formUser.strName"
                  label="Nombre"
                  max-length="50"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input-component
                  v-model="formUser.strLastName"
                  label="Apellido"
                  max-length="50"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input-component
                  v-model="formUser.strUser"
                  label="Usuario"
                  max-length="50"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-input-component
                  v-model="formUser.strPassword"
                  label="Contraseña"
                  max-length="50"
                  type="password"
                />
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-toggle-component v-model="formUser.bitActive" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>

        <div class="my-card-action">
          <q-card-actions class="btns-align-right">
            <q-btn
              v-close-popup
              class="btn-dialog btn-secondary"
              flat
              label="Cancelar"
              type="reset"
            />
            <q-btn
              class="btn-dialog btn-primary"
              flat
              :label="titleForm"
              type="submit"
            />
          </q-card-actions>
        </div>
      </q-form>
    </q-card>
  </q-dialog>
</template>

<style src="src/css/form.scss"></style>
