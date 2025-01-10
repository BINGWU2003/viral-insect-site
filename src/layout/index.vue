<template>
  <div class="layout">
    <TopContent />
    <div class="layout__content">
      <NavTab />
      <BottomContent>
        <template #content>
          <slot />
        </template>
      </BottomContent>
    </div>
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
  background-color: #e5e7ed;

  .layout__content {
    width: 1200px;
    margin: 0 auto;
    background-color: #fff;
  }
}
</style>
