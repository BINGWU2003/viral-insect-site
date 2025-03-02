<template>
  <div class="predict-mode">
    <h1 class="title">Predict plant virus transmission patterns</h1>
    <div class="input-text">
      <n-input v-model:value="value" type="textarea" placeholder="" />
    </div>
    <div class="buttons">
      <div class="button-group">
        <div class="top">
          <div style="width: 200px;color: black;" class="button-style" @click="handleSubmit">Submit</div>
        </div>
        <div class="bottom">
          <div style="flex: 1;" class="button-style" @click="selectFile">File</div>
          <div style="flex: 1;" class="button-style" @click="clearText">Clear</div>
        </div>
      </div>
      <div class="mode-button">
        <div class="bottom">
          <div style="flex: 1;" class="button-style" @click="selectPredictMode('Gene')"
            :style="{ backgroundColor: currentSelectPredictMode === 'Gene' ? '#548235' : '#c5e0b4' }">Gene</div>
          <div style="flex: 1;"
            :style="{ backgroundColor: currentSelectPredictMode === 'Protein' ? '#548235' : '#c5e0b4' }"
            class="button-style" @click="selectPredictMode('Protein')">Protein</div>
        </div>
      </div>
    </div>
    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" accept=".txt" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentSelectPredictMode = ref('Gene')
const value = ref('')
const fileInput = ref(null)

const selectFile = () => {
  fileInput.value.click()
}
const selectPredictMode = (mode) => {
  currentSelectPredictMode.value = mode
}
const handleFileChange = (event) => {
  const file = event.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (e) => {
      value.value = e.target.result
    }
    reader.readAsText(file)
  }
}

const handleSubmit = () => {
  const data = value.value.trim()
  if (!data) {
    return
  }
  console.log('Submitted text:', value.value)
  // 你可以在这里处理提交的文本，例如发送到服务器
}

const clearText = () => {
  value.value = ''
}
</script>

<style lang="scss" scoped>
.predict-mode {
  width: 80%;
  margin: 0 auto;

  .title {
    text-align: center;
    color: #3b5a27;
  }

  .input-text {
    display: flex;
    height: 200px;
    margin: 20px 0;
  }

  .buttons {
    display: flex;
    gap: 10px;

    .button-group {
      display: flex;
      width: 200px;
      flex-wrap: wrap;
      gap: 10px;

      .bottom {
        width: 100%;
        display: flex;
        gap: 10px;
      }

      .button-style {
        height: 36px;
        background-color: #a9d18e;
        border: 2px solid black;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }

    .mode-button {
      display: flex;
      gap: 10px;
      width: 100px;

      .bottom {
        width: 100%;
        display: flex;
        gap: 10px;
        flex-direction: column;
      }

      .button-style {
        height: 36px;
        background-color: #a9d18e;
        border: 2px solid black;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
      }
    }
  }
}
</style>
