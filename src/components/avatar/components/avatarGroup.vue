<template>
  <div class="avatar-group">
    <avatar v-for="(item, index) in options" :key="index" v-bind="item" :size="size" />
  </div>
</template>
<script lang="ts" setup>
import Avatar from './avatar.vue';
import type { AvatarProps } from './avatar.vue';
interface AvatarGroupProps {
  options: Omit<AvatarProps, 'size'>[];
  size?: 'small' | 'medium' | 'large' | 'xlarge';
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
    box-shadow: unset;
  }
}
</style>
