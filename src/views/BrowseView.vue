<template>
  <Layout>
    <div class="browse">
      <h1 class="title">All virus-insect-plant interactions in Database</h1>
      <div class="search">
        <div class="search-input">
          <n-input v-model:value="keyWords" type="text" placeholder="Search virus, host, vector and Transmisson mode"
            @keyup.enter="handleSearch" />
          <div class="search-button" @click="handleSearch">search</div>
        </div>

      </div>
      <div class="filter-content">
        <div v-for="(item, index) in filterContent" :key="index"
          :style="{ backgroundColor: currentSelectMode === item.name ? '#548235' : '#c5e0b4' }"
          @click="handleClickMode(item.name)">
          {{ item.name }}
        </div>
      </div>
      <div class="table">
        <n-data-table :columns="currentColums" :data="data" :pagination="pagination" :bordered="false"
          @update:page="onChange" @update:page-size="onUpdatePageSize" striped remote>
          <!-- <template #virusFamily="row">
            <span>{{ row.virusFamily }}</span>
          </template> -->
        </n-data-table>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '@/layout/index.vue'
import { getViralInsectData, getViralPlantData, getViralPlantInsectData } from '@/api/browse'
import { ref, onMounted, computed, onBeforeUnmount, h } from 'vue'
import { useRoute } from 'vue-router'
import { useTableStore } from '@/stores/table'
import eventBus from '@/utils/event-bus'
const keyWords = ref('')
const route = useRoute()
const mode = ref('')
const tableStore = useTableStore()
let queryMode = route.query.mode

const filterContent = [
  {
    name: 'Non-Persistent Transmission',
  },
  {
    name: 'Non-Circulative, Semi-Persistent Transmission',
  },
  {
    name: 'Persistent, circulative',
  },
  {
    name: 'Circulative, Persistent Non-Propagative Transmission',
  },
  {
    name: 'Circulative, Persistent-Propagative Transmission',
  },

  {
    name: 'Unknow',
  },
]
const currentColums = computed(() => {
  const tableType = tableStore.tableType
  if (tableType === 1) {
    return columns
  } else if (tableType === 2) {
    return columns1
  } else if (tableType === 3) {
    return columns2
  } else {
    return columns
  }
})
const currentSelectMode = computed(() => {
  return mode.value || queryMode || ''
})
const currentKeyWords = computed(() => {
  return keyWords.value || ''
})
const columns = [
  {
    title: 'Virus Family',
    key: 'virusFamily'
  },
  {
    title: 'Virus Genus',
    key: 'vectorGenus'
  },
  {
    title: 'Virus',
    key: 'virusName'
  },
  {
    title: 'Virus TaxID',
    key: 'virusTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.virusTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.virusTaxId)
    }
  },
  {
    title: 'Vector Order',
    key: 'vectorOrder'
  },
  {
    title: 'Vector Family',
    key: 'vectorFamily'
  },
  {
    title: 'Vector Genus',
    key: 'vectorGenus'
  },
  {
    title: 'Vector',
    key: 'vector'
  },
  {
    title: 'Vector TaxID',
    key: 'vectorTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.vectorTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.vectorTaxId)
    }
  },
  {
    title: 'Virus Transmission Mode',
    key: 'virusExistencePattern'
  }
]
const columns1 = [
  {
    title: 'Virus Family',
    key: 'virusFamily'
  },
  {
    title: 'Virus Genus',
    key: 'virusGenus'
  },
  {
    title: 'Virus',
    key: 'virusName'
  },
  {
    title: 'Virus TaxID',
    key: 'virusTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.virusTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.virusTaxId)
    }
  },
  {
    title: 'Host',
    key: 'hostName'
  },
  {
    title: 'Host TaxID',
    key: 'hostTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.hostTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.hostTaxId)
    }
  },
  {
    title: 'Virus Transmission Mode',
    key: 'virusExistencePattern'
  }
]
const columns2 = [
  {
    title: 'Virus Family',
    key: 'virusFamily'
  },
  {
    title: 'Virus Genus',
    key: 'virusGenus'
  },
  {
    title: 'Virus',
    key: 'virusName'
  },
  {
    title: 'Virus TaxID',
    key: 'virusTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.virusTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.virusTaxId)
    }
  },
  {
    title: 'Host',
    key: 'hostName'
  },
  {
    title: 'Host TaxID',
    key: 'hostTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.hostTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.hostTaxId)
    }
  },
  {
    title: 'Vector Order',
    key: 'vectorOrder'
  },
  {
    title: 'Vector Family',
    key: 'vectorFamily'
  },
  {
    title: 'Vector Genus',
    key: 'vectorGenus'
  },
  {
    title: 'Vector',
    key: 'vector'
  },
  {
    title: 'Vector TaxID',
    key: 'vectorTaxId',
    render: (row) => {
      return h('a', {
        href: `https://www.ncbi.nlm.nih.gov/Taxonomy/Browser/wwwtax.cgi?mode=Info&id=${row.vectorTaxId}&lvl=3&lin=f&keep=1&srchmode=1&unlock`,
        target: '_blank',
        style: 'color: #1565bd;text-decoration: none;'
      }, row.vectorTaxId)
    }
  },
  {
    title: 'Virus Transmission Mode',
    key: 'virusExistencePattern'
  }
]
const data = ref([])

const pagination = ref({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [5, 10, 15],
  itemCount: 0,
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
  queryMode = ''
  name === mode.value && (name = '')
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
    keyWords: currentKeyWords.value,
    virusFamily: route.query.virusFamily || '',
    vectorFamily: route.query.vectorFamily || '',
  }
  const getDataFun = {
    1: getViralInsectData,
    2: getViralPlantData,
    3: getViralPlantInsectData
  }
  const res = await getDataFun[tableStore.tableType](params)
  data.value = res.data.data.records
  pagination.value.itemCount = res.data.data.total
}
onMounted(async () => {
  eventBus.on('tableTypeChanged', async () => {
    pagination.value.page = 1
    await getTableData()
  })
  await getTableData()
})
onBeforeUnmount(() => {
  eventBus.off('tableTypeChanged')
})
</script>

<style lang="scss" scoped>
.browse {
  .title {
    padding: 20px 0;
    text-align: center;
    color: #385723;
    border-bottom: 3px solid #70ad47;
    font-family: 'Microsoft YaHei';
  }

  .search {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px auto;
    margin-bottom: 0;

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
        color: white;
        border: 2px solid #2b4719;
        font-weight: 900;
        border-radius: 6px;
        cursor: pointer;
        background-color: #548235
      }
    }


  }

  .filter-content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    justify-content: space-between;
    margin-bottom: 20px;

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

  .table {
    margin: 0 auto;
  }
}
</style>
