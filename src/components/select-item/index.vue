<template>
  <div class="select-item" @click="handleClick">
    <div class="dot">

    </div>
    {{ props.name }}
  </div>
</template>

<script setup>
import vrial from '@/assets/viral1.png'
import insect from '@/assets/昆虫.png'
import { computed } from 'vue'
const props = defineProps({
  name: {
    type: String,
    default: ''
  },
  imageType: {
    type: String,
    default: 'vector'
  }
})
const imageSrc = computed(() => {
  return props.imageType === 'vector' ? vrial : insect
})
const emtis = defineEmits(['select'])
const handleClick = () => {
  emtis('select', props.name, props.imageType)
}
</script>

<style lang="scss" scoped>
.select-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: #305493;
  line-height: 1;
  .dot {
    width: 7px;
    height: 7px;
    background-color: #305493;
    border-radius: 50%;
    margin-right: 4px;
  }

}
</style>
