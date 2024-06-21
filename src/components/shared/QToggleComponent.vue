<!-- eslint-disable func-call-spacing -->
<script setup lang="ts">
import { toRefs } from 'vue'

export interface IProps {
    modelValue: string|number|boolean|null|undefined
    trueLabel?: string
    falseLabel?: string
  }
const props = withDefaults(defineProps<IProps>(), {
  modelValue: false,
  trueLabel: 'Activo',
  falseLabel: 'Inactivo'
})

const emits = defineEmits<{
  (event: 'update:modelValue', value: string|number|boolean|null|undefined): void
}>()

const { modelValue } = toRefs(props)

function updateValue(value: string|number|boolean|null|undefined) {
  emits('update:modelValue', value)
}
</script>

<template>
  <q-toggle
    checked-icon="check"
    :color="modelValue ? 'green' : 'red'"
    :false-value="false"
    keep-color
    :label="modelValue === true ? trueLabel : falseLabel"
    :model-value="modelValue"
    :true-value="true"
    unchecked-icon="clear"
    @update:model-value="updateValue"
  />
</template>
