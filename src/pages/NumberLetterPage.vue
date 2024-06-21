<script setup lang="ts">
import { useLog } from 'src/composables/useLog'

const {
  myNumber,
  myRefInputNumber,
  myText,
  myNumberWithSeparator,
  onSubmit,
} = useLog()

</script>

<template>
  <q-page class="q-card fit q-mt-md my-page">
    <q-form
      @submit.prevent="onSubmit"
    >
      <div class="q-pl-xl row bg-secondary">
        <h4>Número a letra</h4>
      </div>
      <div class="row q-pa-xl">
        <div class="col-12">
          <q-input
            v-model="myNumber"
            :hint="myNumberWithSeparator"
            label="Número"
            :rules="[val => !!val || 'El número es obligatorio.']"
            type="number"
          />
        </div>
      </div>
      <div class="row q-px-xl">
        <div class="col-12">
          <q-input
            ref="myRefInputNumber"
            v-model="myText"
            class="my-text-area"
            label="Letra"
            readonly
            type="textarea"
          />
        </div>
      </div>
      <div class="row q-px-xl q-pt-md float-right">
        <div class="col-12">
          <q-btn color="primary" push type="submit">
            <div class="row items-center no-wrap">
              <q-icon left name="save" />
              <div>
                Guardar
              </div>
            </div>
          </q-btn>
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<style src="src/css/number.scss"></style>
