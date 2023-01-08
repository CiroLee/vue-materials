<template>
  <div v-if="options" class="avatar-group">
    <avatar v-for="(item, index) in options" :key="index" v-bind="item" />
  </div>
  <div v-else class="avatar-group">
    <slot />
  </div>
</template>
<script lang="ts" setup>
import Avatar from './avatar.vue';
import type { AvatarProps } from './avatar.vue';
import { Fragment } from 'vue';
interface AvatarGroupProps {
  options?: AvatarProps[];
}
defineProps<AvatarGroupProps>();
</script>
<style lang="scss">
.avatar-group {
  display: flex;
  align-items: center;
  .avatar {
    border: 2px solid #fff;
    margin-left: calc(-0.3em);
  }
}
</style>
