<template>
  <div class="switch-wrap">
    <div class="div-box">
      <div class="title">switch</div>
      <p class="flex--v-center">
        <span>large: </span>
        <Switch class="switch-gap" size="large" checked @change="switchChange" />
      </p>
      <p class="flex--v-center">
        <span>default: </span>
        <Switch class="switch-gap" size="medium" />
      </p>
      <p class="flex--v-center">
        <span>small: </span>
        <Switch class="switch-gap" size="small" />
      </p>
      <p class="flex--v-center">
        <span>禁用: </span>
        <Switch class="switch-gap" size="small" disabled />
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Switch from './components/switch/index.vue';
const switchChange = (checked: boolean) => {
  console.log(checked);
};
</script>
<style lang="scss" scoped>
.flex--v-center {
  display: flex;
  align-items: center;
}

.div-box {
  margin-top: 10px;
  p {
    span {
      display: inline-block;
      width: 60px;
      margin-right: 16px;
      text-align: right;
    }

    margin-bottom: 12px;
  }
  .title {
    font-weight: bold;
    margin-bottom: 6px;
  }
}
</style>
