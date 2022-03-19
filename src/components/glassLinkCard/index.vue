<template>
  <router-link :to="path" class="glass-card">
    <i class="bg-icon" :class="icon"></i>
    <div class="glass-card__content">
      <span class="text">{{ name }}</span>
    </div>
  </router-link>
</template>
<script lang="ts" setup>
interface IGlassCardProps {
  icon: string;
  name: string;
  path: string;
}
defineProps<IGlassCardProps>();
</script>
<style lang="scss" scoped>
.bg-icon {
  position: absolute;
  font-size: 100px;
  color: rgba(#fff, 40%);
  right: -18px;
  bottom: -24px;
  transition: all 0.2s ease-in-out;
}

.glass-card {
  text-decoration: unset;
  flex: 1;
  min-width: 200px;
  max-width: 320px;
  height: 100px;
  border-radius: 4px;
  display: block;
  position: relative;
  overflow: hidden;
  color: #fff;
  border: 1px solid #d2d2d2;
  box-sizing: border-box;
  font-family: Fredoka, sans-serif;
  background-image: linear-gradient(145deg, rgb(0, 123, 254, 60%) 16%, rgb(200, 18, 246, 80%));
  box-shadow: 0 8px 18px -6px rgba(164, 134, 251, 60%);
  &__content {
    width: 100%;
    height: 100%;
    padding: 8px;
    backdrop-filter: blur(4px);
    font-size: 24px;
    font-weight: bold;
    box-sizing: border-box;
    .text {
      transition: all 0.2s ease-in-out;
      display: inline-block;
    }
  }
  &:hover {
    .glass-card__content .text {
      transform: translateX(2px);
    }
    .bg-icon {
      color: rgba(#fff, 80%);
    }
  }
}
</style>
