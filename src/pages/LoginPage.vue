<script setup lang="ts">
import QInputComponent from 'src/components/shared/QInputComponent.vue'
import { useUsers } from 'src/composables/useUsers'

const {
  loginRequest,
  loading,
  doLogin
} = useUsers()
</script>

<template>
  <div class="row fit my-main">
    <div class="col-md-6 absolute-center">
      <q-card class="absolute-center my-card">
        <q-card-section class="my-card-header">
          <div class="text-h5 q-py-lg fit row wrap justify-center items-start content-star">
            Inicio de sesión
          </div>
        </q-card-section>
        <transition
          appear
          enter-active-class="animated fadeIn"
          leave-active-class="animated fadeOut"
        >
          <q-form @submit.prevent="doLogin">
            <div class="button-section row">
              <q-item class="my-width q-pt-lg q-mx-md">
                <q-item-section>
                  <q-input-component
                    v-model="loginRequest.user"
                    class="rcorners1 inputs"
                    icon="bi-key-fill"
                    label="Email"
                    lazy-rules
                    :show-validation="false"
                  />
                </q-item-section>
              </q-item>
              <q-item class="my-width q-py-lg q-mx-md">
                <q-item-section>
                  <q-input-component
                    v-model="loginRequest.password"
                    label="Password"
                    lazy-rules
                    :show-validation="false"
                    type="password"
                  />
                </q-item-section>
              </q-item>
            </div>
            <div>
              <q-item class="my-btn q-pb-lg">
                <q-item-section>
                  <q-btn
                    color="secondary"
                    dense
                    label="Iniciar sesión"
                    rounded
                    size="sm"
                    type="submit"
                    unelevated
                  />
                </q-item-section>
              </q-item>
            </div>
            <q-inner-loading
              class="card"
              label="Please wait..."
              label-class="text-teal"
              label-style="font-size: 1.1em"
              :showing="loading"
            />
          </q-form>
        </transition>
      </q-card>
    </div>
  </div>
</template>

<style src="src/css/login.scss" scoped></style>
