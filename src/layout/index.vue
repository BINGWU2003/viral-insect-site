<template>
  <div class="layout">
    <TopContent />
    <NavTab />
    <BottomContent>
      <template #content>
        <slot />
      </template>
    </BottomContent>
  </div>
</template>

<script setup>
import BottomContent from '@/layout/bottom-content/index.vue'
import TopContent from '@/layout/top-content/index.vue'
import NavTab from '@/components/nav-tab/index.vue'
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  background-color: #fff;
}
</style>
