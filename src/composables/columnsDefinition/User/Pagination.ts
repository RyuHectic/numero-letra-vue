import { ref } from 'vue'
import { IPagination } from 'src/composables/common'

export const pagination = ref<IPagination>({
  sortBy: 'bitActive',
  descending: false,
  page: 1,
  rowsPerPage: 5,
  rowsNumber: 0
})
