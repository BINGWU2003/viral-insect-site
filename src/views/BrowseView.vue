<template>
  <div class="browse">
    <h1 class="title">All virus-plant-insect interactions in Database</h1>
    <div class="search">
      <div class="search-input">
        <n-input v-model:value="value" type="text" placeholder="Search virus" />
        <div class="search-button">search</div>
      </div>
      <div class="filter-content">
        <div v-for="(item, index) in filterContent" :key="index">
          {{ item.name }}
        </div>
      </div>
    </div>
    <div class="table">
      <n-data-table :columns="columns" :data="data" :pagination="pagination" :bordered="false" @update:page="onChange"
        @update:page-size="onUpdatePageSize" striped />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
const columns = [
  {
    title: 'VirusFamily',
    key: 'no'
  },
  {
    title: 'VirusGenus',
    key: 'title'
  },
  {
    title: 'Virus',
    key: 'length'
  },
  {
    title: 'VirusTaxID',
    key: 'actions'
  },
  {
    title: 'HostName',
    key: 'actions'
  },
  {
    title: 'HostTaxID',
    key: 'actions'
  },
  {
    title: 'VectorOrder',
    key: 'actions'
  },
  {
    title: 'VectorFamily',
    key: 'actions'
  },
  {
    title: 'VectorGenus',
    key: 'actions'
  },
  {
    title: 'Insect',
    key: 'actions'
  },
  {
    title: 'InsectTaxID',
    key: 'actions'
  },
  {
    title: 'VirusMode',
    key: 'actions'
  }
]
const data = [
  { no: 3, title: 'Wonderwall', length: '4:18' },
  { no: 4, title: 'Don\'t Look Back in Anger', length: '4:48' },
  { no: 12, title: 'Champagne Supernova', length: '7:27' }
]

const pagination = ref({
  page: 1,
  pageSize: 5,
  showSizePicker: true,
  pageSizes: [3, 5, 7],
  itemCount: 1001,
  prefix: () => { //分页前缀
    return `Total is ${pagination.value.itemCount}.`
  },
  showQuickJumper: true,
})
const onChange = (page) => {
  pagination.value.page = page
}
const onUpdatePageSize = (pageSize) => {
  pagination.value.pageSize = pageSize
  pagination.value.page = 1
}
</script>

<style lang="scss" scoped>
// :deep(table thead tr th) {
//   background-color: #70ad47 !important;
// }

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
