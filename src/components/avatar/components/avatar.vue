<template>
  <div class="avatar" :class="[{ 'box-shadow': boxShadow }, size, shape, status]" :data-dot="dots">
    <img v-if="url" :src="url" alt="" />
    <span v-if="!url && text" class="avatar__text">{{ text }}</span>
    <div v-if="dot" class="avatar__dot" :class="{ 'num-dot': typeof dot === 'string' }">
      <span>{{ dots }}</span>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
export interface AvatarProps {
  url?: string;
  text?: string;
  fontSize?: string;
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  shape?: 'circle' | 'square';
  bgColor?: string;
  color?: string;
  boxShadow?: boolean;
  fit?: 'contain' | 'cover' | 'fill' | 'scale-down' | 'none';
  status?: 'online' | 'offline';
  dot?: boolean | string;
}
const props = withDefaults(defineProps<AvatarProps>(), {
  url: '',
  size: 'medium',
  bgColor: '#d6d6d6',
  fit: 'cover',
  boxShadow: true,
  text: '',
  color: '#fff',
  shape: 'circle',
  fontSize: '0.45em',
  status: undefined,
  dot: false,
});
const bgcolor = computed(() => props.bgColor);
const fit = computed(() => props.fit);
const color = computed(() => props.color);
const scale = computed(() => {
  if (props.text.length > 1) {
    return 2 / props.text.length;
  }
  return 1;
});
const fontsize = computed(() => props.fontSize);
const dots = computed(() => (typeof props.dot === 'string' ? props.dot : ''));
</script>
<style lang="scss">
$xlarge: 56px;
$large: 48px;
$medium: 40px;
$small: 32px;

.avatar {
  width: $medium;
  height: $medium;
  border-radius: 50%;
  position: relative;
  background-color: v-bind(bgcolor);
  font-size: $medium;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  --shadow: v-bind(bgcolor);
  &.square {
    border-radius: 0.06em;
  }
  img {
    width: 100%;
    height: 100%;
    border-radius: $medium;
    object-fit: v-bind(fit);
  }
  &.square img {
    width: 100%;
    height: 100%;
    border-radius: 0.06em;
    object-fit: v-bind(fit);
  }
  &.xlarge {
    width: $xlarge;
    height: $xlarge;
    font-size: $xlarge;
  }
  &.large {
    width: $large;
    height: $large;
    font-size: $large;
  }
  &.small {
    width: $small;
    height: $small;
    font-size: $small;
  }
  &.box-shadow {
    box-shadow: 1px 3px 12px -4px var(--shadow, rgba(0, 0, 0, 40%));
  }
  span {
    color: v-bind(color);
    font-size: v-bind(fontsize);
  }
  &__text {
    transform: scale(v-bind(scale));
  }
  &::after {
    content: '';
    width: 0.32em;
    height: 0.32em;
    border-radius: 0.32em;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  &.square::after {
    content: '';
    width: 0.32em;
    height: 0.32em;
    border-radius: 0.32em;
    position: absolute;
    right: -0.1em;
    bottom: -0.1em;
  }
  &.online::after {
    background-color: #0cdd40;
  }
  &.offline {
    img {
      filter: saturate(0.2);
      opacity: 0.8;
    }
    &::after {
      background-color: #bfbfbf;
    }
  }
  &__dot {
    width: 0.32em;
    height: 0.32em;
    line-height: 0.32em;
    border-radius: 2em;
    position: absolute;
    left: 0.7em;
    top: 0;
    background-color: red;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    z-index: 2;
    &.num-dot {
      width: unset;
      padding: 0 0.085em;
    }
    span {
      font-size: 0.2em;
    }
  }
  &.square .avatar__dot {
    left: 0.7em;
    top: -0.1em;
  }
}
</style>
