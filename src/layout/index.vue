<template>
  <div class="layout">
    <SideBar :collapsible="false" :menus="routes" />
    <div class="layout-content">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBar from './sideBar/index.vue';
import { routes } from '@/router';
</script>
<style lang="scss" scoped>
.layout {
  display: flex;
  height: 100vh;
  overflow: hidden;
}

.layout-content {
  flex: 1;
  padding: 16px;
  background: #fafafa;
  overflow: auto;
}
</style>
