import { RouteRecordRaw } from 'vue-router'
import { routesUser } from './routesUser'
import { routesLog } from './routesLog'
import { routesNumberLetter } from './routesNumerLetter'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/main',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      ...routesUser,
      ...routesLog,
      ...routesNumberLetter
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
