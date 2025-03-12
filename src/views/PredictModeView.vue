<template>
  <n-message-provider placement="top-right">

  </n-message-provider>
  <div class="predict-mode">
    <h1 class="title">Predict plant virus transmission patterns</h1>
    <div class="input-text">
      <n-input v-model:value="textValue" type="textarea" placeholder=">YP_009175082.1|1|coat protein
MPKREAPWRAMAGSSKVSRALNYSPRGGIRPKFDKASAWVNRPMYRKPRIYRTMRGPDIP
KGCEGPCKVQSYEQRHDVSHVGKVMCISDITRGNGITHRVGKRFCVKSVYILGKVWMDDN
IKLKNHTNSVMFWLVRDRRPYGTPMDFGQVFNMFDNEPSTATVKNDLRDRFQVMHKFYAK
VTGGQYASNEQALVRRFWKVNNPCDLQPSGGREIREPYGERLVIVYGMYSCVYPVYATLK
IRIYFYDSISN" />
      <n-input v-model:value="result" type="textarea" placeholder="" style="margin-left: 20px;" />
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
            :style="{ backgroundColor: currentSelectPredictMode === 'Gene' ? '#548235' : '#a9d18e' }">Gene</div>
          <div style="flex: 1;"
            :style="{ backgroundColor: currentSelectPredictMode === 'Protein' ? '#548235' : '#a9d18e' }"
            class="button-style" @click="selectPredictMode('Protein')">Protein</div>
        </div>
      </div>
    </div>
    <input type="file" ref="fileInput" style="display: none;" @change="handleFileChange" accept=".txt" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { predictGene, predictProtein } from '@/api/browse'
import { useMessage } from 'naive-ui'
const message = useMessage()
const currentSelectPredictMode = ref('Gene')
const textValue = ref('')
const result = ref('')
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
      textValue.value = e.target.result
    }
    reader.readAsText(file)
    event.target.value = ''
  }
}

const handleSubmit = async () => {
  const data = textValue.value.trim()
  if (!data) {
    return
  }
  if (data.length > 10000) {
    message.error('The input text is too long, please input again.')
    return
  }
  const fun = {
    'Gene': predictGene,
    'Protein': predictProtein
  }
  try {
    const res = await fun[currentSelectPredictMode.value]({ data })
    result.value = res.data.data.map((item) => {
      let data = ''
      for (const key in item) {
        data += `${key}: ${item[key]} `
      }
      data += '\n'
      return data
    }).join('')
  } catch (error) {
    console.error(error)
  }
}

const clearText = () => {
  textValue.value = ''
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
