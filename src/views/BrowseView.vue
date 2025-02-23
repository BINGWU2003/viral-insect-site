<template>
  <div class="browse">
    <h1 class="title">All virus-plant-insect interactions in Database</h1>
    <div class="search">
      <div class="search-input">
        <n-input v-model:value="keyWords" type="text" placeholder="Search virus" @keyup.enter="handleSearch" />
        <div class="search-button" @click="handleSearch">search</div>
      </div>
      <div class="filter-content">
        <div v-for="(item, index) in filterContent" :key="index"
          :style="{ backgroundColor: currentSelectMode === item.name ? '#548235' : '#c5e0b4' }"
          @click="handleClickMode(item.name)">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="table">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" @update:page="onChange"
        @update:page-size="onUpdatePageSize" striped remote />
    </div>
  </div>
</template>

<script setup>
import { getViralInsectData } from '@/api/browse'
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
const keyWords = ref('')
const route = useRoute()
const mode = ref('')
const filterContent = [
  {
    name: 'Non-Persistent Transmission',
  },
  {
    name: 'Non-Circulative, Semi-Persistent Transmission',
  },
  {
    name: 'Unknow',
  },
  {
    name: 'Persistent, circulative',
  },
  {
    name: 'Circulative, Persistent-Propagative Transmission',
  },
  {
    name: 'Circulative, Persistent Non-Propagative Transmission',
  }
]
const currentSelectMode = computed(() => {
  return mode.value || route.query.mode || ''
})
const columns = [
  {
    title: 'VirusFamily',
    key: 'virusFamily'
  },
  {
    title: 'VirusGenus',
    key: 'vectorGenus'
  },
  {
    title: 'Virus',
    key: 'virusName'
  },
  {
    title: 'VirusTaxID',
    key: 'vectorTaxId'
  },
  {
    title: 'VectorOrder',
    key: 'vectorOrder'
  },
  {
    title: 'VectorFamily',
    key: 'vectorFamily'
  },
  {
    title: 'VectorGenus',
    key: 'vectorGenus'
  },
  {
    title: 'Vector',
    key: 'vector'
  },
  {
    title: 'VirusMode',
    key: 'virusExistencePattern'
  }
]
const data = ref([])

const pagination = ref({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  itemCount: 1,
  prefix: () => { //分页前缀
    return `Total is ${pagination.value.itemCount}.`
  },
  showQuickJumper: true,
})
const onChange = async (page) => {
  pagination.value.page = page
  await getTableData()
}
const onUpdatePageSize = async (pageSize) => {
  pagination.value.pageSize = pageSize
  pagination.value.page = 1
  await getTableData()
}

const handleClickMode = async (name) => {
  mode.value = name
  await getTableData()
}

const handleSearch = async () => {
  pagination.value.page = 1
  await getTableData()
}
const getTableData = async () => {
  const params = {
    current: pagination.value.page,
    size: pagination.value.pageSize,
    virusExistencePattern: currentSelectMode.value,
    keyWords: keyWords.value
  }
  const res = await getViralInsectData(params)
  data.value = res.data.data.records
  pagination.value.itemCount = res.data.data.total
}
onMounted(async () => {
  await getTableData()

})

</script>

<style lang="scss" scoped>

.browse {
  .title {
    padding: 20px 0;
    text-align: center;
    color: #385723;
    border-bottom: 3px solid #70ad47;
  }

  .search {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;

    .search-input {
      display: flex;
      width: 100%;
      margin-bottom: 20px;
      gap: 20px;

      .search-button {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 60px;
        color: #548235;
        border: 2px solid #548235;
        border-radius: 6px;
        cursor: pointer;
        background-color: #c5e0b4
      }
    }

    .filter-content {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 150px);
      gap: 20px;
      justify-content: space-between;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: black;
        padding: 10px;
        border: 2px solid #2b4719;
        border-radius: 6px;
        cursor: pointer;
        background-color: #c5e0b4;

      }
    }
  }

        .table {
    margin: 0 auto;
  }
}
</style>
