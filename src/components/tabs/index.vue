<template>
  <div class="tabs-wrap">
    <div class="panel">
      <p class="panel-title">基本</p>
      <Tab :options="tabOptions1" :default-key="1" />
    </div>
    <div class="panel">
      <p class="panel-title">icon前缀</p>
      <Tab :options="tabOptions2" default-key="voice" />
    </div>
    <div class="panel">
      <p class="panel-title">icon后缀 - 无动画</p>
      <Tab :options="tabOptions3" default-key="voice" :animated="false" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tab from './components/tab.vue';
import { tabOptions1, tabOptions2, tabOptions3 } from './mock';
</script>
<style lang="scss" scoped>
.panel {
  margin-bottom: 32px;
}

.panel-title {
  margin-bottom: 8px;
  font-weight: bold;
}
</style>
