<template>
  <div flex h-screen overflow-hidden>
    <SideBar :collapsible="false" :menus="routes" />
    <div flex-1 p-16px overflow-auto bg="#fafafa">
      <router-view />
    </div>
  </div>
</template>
<script lang="ts" setup>
import SideBar from './sideBar/index.vue';
import { routes } from '@/router';
</script>
