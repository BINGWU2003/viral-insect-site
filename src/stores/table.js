import { ref } from 'vue'
import { defineStore } from 'pinia'
import eventBus from '@/utils/event-bus'
export const useTableStore = defineStore('table', () => {
  const tableType = ref(1)
  const setTableType = (type) => {
    tableType.value = type
    eventBus.emit('tableTypeChanged', type)
  }
  return { tableType, setTableType }
})
