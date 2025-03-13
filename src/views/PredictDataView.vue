<template>
  <div class="predict-data">
    <div class="table">
      <div style="display:flex;justify-content: flex-end;margin-bottom: 10px;">
        <div class="button-style" @click="exportToExcel">output</div>
      </div>
      <n-data-table :columns="columns" :data="result" :row-props="rowProps" :single-line="false" />
    </div>
  </div>
</template>

<script setup>
import { computed, onUnmounted } from 'vue'
import * as XLSX from 'xlsx'
const result = computed(() => {
  return JSON.parse(localStorage.getItem('result'))
})

const columns = [
  {
    title: 'ID',
    key: 'id',
  },
  {
    title: 'Real',
    key: 'real',
  },
  {
    title: 'Pred',
    key: 'y_pred',
  }
]
const exportToExcel = async () => {
  try {
    const wb = XLSX.utils.book_new()
    const ws = XLSX.utils.json_to_sheet(result.value)
    XLSX.utils.book_append_sheet(wb, ws, 'Prediction Results')
    const excelBuffer = XLSX.write('Prediction-Results', { bookType: 'xlsx', type: 'array' })
    const blob = new Blob([excelBuffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    })
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName: 'prediction_results.xlsx',
        types: [{
          description: 'Excel文件',
          accept: {
            'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['.xlsx']
          }
        }]
      })

      const writable = await handle.createWritable()
      await writable.write(blob)
      await writable.close()
    } catch (err) {
      XLSX.writeFile(wb, 'Prediction-Results.xlsx')
      console.error('用户取消保存或浏览器不支持 showSaveFilePicker', err)

    }
  } catch (error) {
    console.error('导出失败:', error)
  }
}
onUnmounted(() => {
  localStorage.removeItem('result')
})
</script>

<style lang="scss" scoped>
.predict-data {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;

  .table {
    width: 500px;

    .button-style {
      height: 36px;
      width: 100px;
      padding: 6px;
      background-color: #548235;
      color: white;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
