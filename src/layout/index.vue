<template>
  <div class="layout">
    <!-- <TopContent /> -->
    <div class="layout__content">
      <div class="layout__content-title">Virus-Plant-Insect DB</div>
     <div style="background-color: white;border-radius: 10px;padding: 20px;">
      <NavTab />
      <BottomContent>
        <template #content>
          <slot />
        </template>
      </BottomContent>
     </div>
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
    .layout__content-title {
      font-size: 48px;
      font-weight: 600;
      color: white;
      background-color: #3d9f3c;
      height: 120px;
      line-height: 120px;
      border-radius: 10px;
      padding: 0 20px;
    }
  }
}
</style>
