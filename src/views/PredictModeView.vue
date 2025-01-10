<template>
  <div class="predict-mode">
    <h1 class="title">Predict plant virus transmission patterns
    </h1>
    <div class="input-text">
      <n-input v-model:value="value" type="textarea" placeholder="" />
    </div>
    <div class="button-group">
      <div class="top">
        <div style="width: 200px;color: black;" class="button-style">Submit</div>
      </div>
      <div class="bottom">
        <div style="flex: 1;" class="button-style">File</div>
        <div style="flex: 1;" class="button-style">Clear</div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.predict-mode {
  width: 80%;
  margin: 0 auto;
  .title {
    text-align: center;
    color: #3b5a27;
  }
  .input-text {
    display: flex;
    height: 200px;
    margin: 20px 0;
  }
  .button-group {
    display: flex;
    width: 200px;
    flex-wrap: wrap;
    gap: 10px;
    .bottom {
      width: 100%;
      display: flex;
      gap: 10px;
    }
    .button-style {
      height: 36px;
      background-color: #a9d18e;
      border: 2px solid black;
      border-radius: 4px;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }
  }
}
</style>
