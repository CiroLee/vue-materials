<template>
  <div class="tabs-wrap">
    <div class="panel">
      <p class="panel-title">基本</p>
      <Tabs :options="tabOptions1" :default-key="1" />
    </div>
    <div class="panel">
      <p class="panel-title">icon前缀</p>
      <Tabs :options="tabOptions2" default-key="voice" />
    </div>
    <div class="panel">
      <p class="panel-title">icon后缀 - 无动画</p>
      <Tabs :options="tabOptions3" default-key="voice" :animated="false" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tabs from './components/tabs.vue';
import { tabOptions1, tabOptions2, tabOptions3 } from './mock';
</script>
<style lang="scss" scoped>
.panel {
  margin: 18px 0;
}

.panel-title {
  margin-bottom: 8px;
  font-weight: bold;
}
</style>
