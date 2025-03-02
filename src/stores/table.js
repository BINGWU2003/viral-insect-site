import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useTableStore = defineStore('table', () => {
  const tableType = ref(1)
  const setTableType = (type) => {
    tableType.value = type
  }
  return { tableType, setTableType }
})
