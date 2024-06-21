<script setup lang="ts">
import { onMounted, ref } from 'vue'
import EssentialLink, { EssentialLinkProps } from 'components/EssentialLink.vue'
import { ILoginResponse } from 'src/app/core/users'
import { useUsers } from 'src/composables/useUsers'

const {
  logOut
} = useUsers()

defineOptions({
  name: 'MainLayout'
})

const leftDrawerOpen = ref(false)

const linksList: EssentialLinkProps[] = [
  {
    title: 'Número a letra',
    icon: '1x_mobiledata',
    link: 'numberLetter'
  },
  {
    title: 'Log',
    icon: 'edit_square',
    link: 'Log'
  },
  {
    title: 'Usuarios',
    icon: 'group',
    link: 'Users'
  }
]

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

const loggedUser = ref<ILoginResponse>()

onMounted(() => {
  loggedUser.value = JSON.parse(localStorage.getItem('UserSession') || '')
})
</script>

<template>
  <div class="q-pa-none q-mx-lg tw-max-h-screen">
    <q-layout view="lHh Lpr lFf">
      <q-header elevated>
        <q-toolbar>
          <q-btn
            aria-label="Menu"
            dense
            flat
            icon="menu"
            round
            @click="toggleLeftDrawer"
          />

          <q-toolbar-title>
            Sistema de convesión de número a letra
          </q-toolbar-title>

          <div class="q-pr-lg">
            <q-btn
              color="teal"
              icon="exit_to_app"
              round
              size="12px"
              @click="logOut"
            >
              <q-tooltip
                anchor="center right"
                :offset="[
                  0, 0
                ]"
                self="center left"
                transition-hide="flip-left"
                transition-show="flip-right"
              >
                Cerrar sessión
              </q-tooltip>
            </q-btn>
          </div>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="leftDrawerOpen"
        bordered
        show-if-above
      >
        <q-img class="absolute-top my-avatar" src="https://cdn.quasar.dev/img/material.png">
          <div class="absolute-bottom bg-transparent">
            <q-avatar class="q-mb-sm" size="56px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">
              {{ loggedUser?.completeName }}
            </div>
            <div>@{{ loggedUser?.user }}</div>
          </div>
        </q-img>

        <q-scroll-area class="my-qscroll-area">
          <q-list>
            <q-item-label
              header
            >
              Menú
            </q-item-label>

            <essential-link
              v-for="link in linksList"
              :key="link.title"
              v-bind="link"
            />
          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container class="my-page-container">
        <router-view class="router-view" />
      </q-page-container>
    </q-layout>
  </div>
</template>

<style src="src/css/mainLayout.scss" scoped></style>
