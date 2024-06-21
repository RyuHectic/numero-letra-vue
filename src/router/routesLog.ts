import { RouteRecordRaw } from 'vue-router'

export const routesLog: RouteRecordRaw[] = [
  { path: 'log', component: () => import('pages/LogPage.vue'), name: 'Log' }
]
