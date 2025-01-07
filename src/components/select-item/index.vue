<template>
  <div class="select-item">
    <img src="../../assets/viral1.png" alt="">
    {{ 'name' }}
  </div>
</template>

<script>
import { ref, computed } from 'vue'
</script>

<style lang="scss" scoped>
.select-item {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  color: #305493;

  img {
    width: 20px;
    height: 20px;
    object-fit: contain;
    margin-right: 10px;
  }

}
</style>
