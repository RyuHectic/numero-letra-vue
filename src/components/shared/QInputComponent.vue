<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<!-- eslint-disable func-call-spacing -->
<script setup lang="ts">
import { ref, toRefs } from 'vue'

export interface IProps {
    modelValue: string | number | any[] | any | null | undefined
    type?: 'number' | 'text' | 'textarea' | 'time' | 'password' | 'email' | 'search' | 'tel' | 'file' | 'url' | 'date' | 'datetime-local' | undefined
    label: string
    requiredField?: boolean
    showValidation?: boolean
  }
const props = withDefaults(defineProps<IProps>(), {
  modelValue: null,
  type: 'text',
  label: '',
  requiredField: true,
  showValidation: true,
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: string | number | null | undefined): void
}>()

const { modelValue, type, label, requiredField, showValidation } = toRefs(props)

function updateValue(value: string | number | null | undefined) {
  emits('update:modelValue', value)
}

const message = ref('Este campo es obligatorio.')

const requiredRule = (val: string | number | null | undefined) => {
  if (type.value === 'number' && Number(val) !== 0) {
    return true
  }

  return (val && val.toString().trim().length > 0) || (showValidation.value ? message.value : '')
}

const clearInput = () => {
  updateValue('')
}
</script>

<template>
  <q-input
    class="my-qinput"
    dense
    hide-bottom-space
    label-slot
    lazy-rules
    :model-value=" modelValue"
    outlined
    rows="2"
    :rules="requiredField ? [ requiredRule ] : []"
    :type="props.type"
    @clear="clearInput"
    @update:model-value="updateValue"
  >
    <template #label>
      <span>
        {{ label }}
      </span>
    </template>
  </q-input>
</template>

<style src="src/css/input.scss"></style>
