<template>
  <div class="avatar" :class="[{ 'box-shadow': boxShadow }, size, shape, status]" :data-dot="dots">
    <img v-if="url" :src="url" alt="" />
    <span v-if="!url && text">{{ text }}</span>
    <div v-if="dot" class="avatar__dot">
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
  dot?: boolean | number;
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
const fontsize = computed(() => props.fontSize);
const dots = computed(() => (typeof props.dot === 'number' ? `${props.dot}` : ''));
</script>
<style lang="scss">
$xlarge: 56px;
$large: 48px;
$medium: 40px;
$small: 32px;
$default-svg: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M20 22h-2v-2a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v2H4v-2a5 5 0 0 1 5-5h6a5 5 0 0 1 5 5v2zm-8-9a6 6 0 1 1 0-12 6 6 0 0 1 0 12zm0-2a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" fill="rgba(137,137,137,1)"/></svg>');

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
  &:empty {
    background: #d6d6d6 $default-svg center no-repeat;
    background-size: 52% auto;
  }
  &::after {
    content: '';
    width: 0.3em;
    height: 0.3em;
    border-radius: 0.3em;
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
  &.square::after {
    content: '';
    width: 0.3em;
    height: 0.3em;
    border-radius: 0.3em;
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
    padding: 0 0.085em;
    height: 0.32em;
    line-height: 0.32em;
    border-radius: 2em;
    position: absolute;
    left: 1em;
    top: 0;
    background-color: red;
    display: flex;
    align-items: center;
    box-sizing: border-box;
    span {
      font-size: 0.2em;
    }
  }
}
</style>
