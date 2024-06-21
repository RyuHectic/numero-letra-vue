import { RouteRecordRaw } from 'vue-router'

export const routesUser: RouteRecordRaw[] = [
  { path: 'users', component: () => import('pages/UsersPage.vue'), name: 'Users' }
]
