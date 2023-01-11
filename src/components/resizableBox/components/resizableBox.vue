<template>
  <div class="resizable-box" :class="resize" :style="parentStyle">
    <div class="resize" :class="resize" :style="resizeStyle"></div>
    <div class="resize-line"></div>
    <div class="resize-content"><slot /></div>
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
interface ResizableBoxProps {
  width?: string;
  height?: string;
  resize: 'horizontal-left' | 'horizontal-right' | 'vertical-top' | 'vertical-bottom';
}
const props = defineProps<ResizableBoxProps>();
const parentStyle = computed(() => {
  return props.resize.includes('horizontal') ? { height: props.height || '12px' } : { width: props.width || '12px' };
});
const resizeStyle = computed(() => {
  return props.resize.includes('horizontal') ? { width: props.width || '12px' } : { height: props.height || '12px' };
});
</script>
<style lang="scss">
.resizable-box {
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  .resize-line {
    position: absolute;
    background-color: #2685d3;
    transition: opacity 0.2s ease;
    pointer-events: none;
    z-index: 1;
    opacity: 0;
  }
  .resize {
    width: 16px;
    height: 16px;
    position: relative;
    overflow: scroll;
    z-index: 1;
    opacity: 0;
    &:hover + .resize-line {
      opacity: 1;
    }
  }
  &.horizontal-right {
    .resize {
      resize: horizontal;
      transform: scaleY(100);
      & + .resize-line {
        height: 100%;
        top: 0;
        right: 0;
        width: 4px;
      }
    }
  }
  &.horizontal-left {
    .resize {
      resize: horizontal;
      transform: rotateY(180deg) scaleY(100);
      & + .resize-line {
        height: 100%;
        top: 0;
        left: 0;
        width: 4px;
      }
    }
  }
  &.vertical-top {
    .resize {
      resize: vertical;
      transform: rotateX(180deg) scaleX(100);
      transform-origin: left;
      & + .resize-line {
        width: 100%;
        height: 4px;
        top: 0;
        right: 0;
      }
    }
  }
  &.vertical-bottom {
    .resize {
      resize: vertical;
      transform: scaleX(100);
      & + .resize-line {
        width: 100%;
        height: 4px;
        bottom: 0;
        right: 0;
      }
    }
  }
}

.resize-content {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
}
</style>
