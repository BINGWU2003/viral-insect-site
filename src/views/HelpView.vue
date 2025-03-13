<template>
  <Layout>
    <div class="help">
      <div v-for="item in article" :key="item.title">
        <h1 class="title">{{ item.title }}
        </h1>
        <p style="font-size: 22px;">
          {{ item.content }}
        </p>
      </div>
    </div>
  </Layout>
</template>

<script setup>
import Layout from '@/layout/index.vue'
import { ref } from 'vue'
const article = ref([
  {
    title: '1. Introduction',
    content: 'We have developed a virus-plant-insect database that provides a convenient query platform for researchers studying plant viruses. This database can not only help users obtain detailed information about plant viruses, but also provide a deep understanding of their transmission methods. In addition, it also supports the prediction of the transmission methods of unknown viruses, thus laying the foundation for the development of more scientific and effective control strategies.'
  },{
    title: '2. Browse',
    content: 'In the browse page, all entries in the plant virus database are listed. You can search the data by the column names given, such as virus name, virus ID, etc.'
  },{
    title: '3. Predict Mode',
    content: 'In the predict page, you can input the virus cp protein sequence or gene sequence you want to predict, and then return the prediction result. The file format you need to input is fasta format'
  }
])
</script>

<style lang="scss" scoped>
.help {
  .title {
    font-family: "Microsoft YaHei";
  }
  p {
    text-indent: 2em;
  }
}
</style>
