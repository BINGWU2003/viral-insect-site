<template>
  <div class="nav-tab">
    <n-tabs type="line" animated size="large" @update:value="handleChange">
      <n-tab-pane v-for="({ name, path }) in routes" :name="name" :tab="name" :key="path">
        <template #tab v-if="name === 'Browse'">
          <div style="display: flex;align-items: center;">
            {{ name }}
            <n-dropdown trigger="click" :options="options" @select="handleSelect">
              <div style="display: flex;align-items: center;">
                <n-icon size="20">
                  <MdArrowDropdown />
                </n-icon>
              </div>
            </n-dropdown>
          </div>
        </template>

      </n-tab-pane>
    </n-tabs>
  </div>
</template>

<script setup>
import { MdArrowDropdown } from '@vicons/ionicons4'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const routes = ref([
  { name: 'Home', path: '/' },
  { name: 'Browse', path: '/browse' },
  { name: 'Predict Mode', path: '/predict-mode' },
  { name: 'Help', path: '/help' }
])
const options = [
  { label: 'By Virus-Insect', key: 'By Virus-Insect' },
  { label: 'By Virus-Plant', key: 'By Virus-Plant' },
  { label: 'By Virus-Plant And Virus-Insect', key: 'By Virus-Plant And Virus-Insect' }
]
const handleChange = (name) => {
  const route = routes.value.find((route) => route.name === name)
  router.push(route.path)
}
const handleSelect = (key) => {
  console.log(key)
}
</script>

<style lang="scss" scoped>
.nav-tab {
  padding: 0 10px;
}

.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}

:deep(.n-tabs-tab__label) {
  width: 100px;
  justify-content: center;

}
</style>
