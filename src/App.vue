<script setup>
import { RouterView } from 'vue-router'
import Layout from '@/layout/index.vue'
</script>

<template>
  <n-message-provider placement="bottom">
    <Layout>
      <RouterView />
    </Layout>
  </n-message-provider>
</template>
