<template>
  <div class="tabs-wrap">
    <div my-20px>
      <p myb-8px font-bold>基本</p>
      <Tabs :options="tabOptions1" :default-key="1" />
    </div>
    <div my-20px>
      <p myb-8px font-bold>icon前缀</p>
      <Tabs :options="tabOptions2" default-key="voice" />
    </div>
    <div my-20px>
      <p myb-8px font-bold>icon后缀 - 无动画</p>
      <Tabs :options="tabOptions3" default-key="voice" :animated="false" />
    </div>
  </div>
</template>
<script lang="ts" setup>
import Tabs from './components/tabs.vue';
import { tabOptions1, tabOptions2, tabOptions3 } from './mock';
</script>
