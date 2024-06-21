import { RouteRecordRaw } from 'vue-router'

export const routesNumberLetter: RouteRecordRaw[] = [
  { path: 'numberLetter', component: () => import('pages/NumberLetterPage.vue'), name: 'numberLetter' }
]
