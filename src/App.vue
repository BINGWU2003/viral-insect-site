<script setup>
import { RouterView } from 'vue-router'
// import { NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-modal-provider>
    <n-message-provider placement="bottom">
      <RouterView />
    </n-message-provider>
  </n-modal-provider>
</template>
