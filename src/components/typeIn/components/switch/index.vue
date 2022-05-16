<template>
  <div class="switch">
    <input
      :checked="checked"
      :disabled="disabled"
      type="checkbox"
      name="switch"
      @mousedown="handleMouseDown"
      @mouseup="handleMouseUp"
      @change="handleChange"
    />
    <div class="switch-label" :class="{ 'circle-ani': circleAni }"></div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import { getSize } from './utils';
interface SwitchProps {
  size?: 'small' | 'medium' | 'large';
  checked?: boolean;
  disabled?: boolean;
}
const props = withDefaults(defineProps<SwitchProps>(), {
  size: 'medium',
});
const { width, height, circle2Radius: diameter, circleAniLen: len, marginLeftAni: ml } = getSize(props.size);
const emits = defineEmits(['change']);
const circleAni = ref(false);

let timer: NodeJS.Timer | undefined;

const handleMouseDown = () => {
  let time = 0;
  timer = setInterval(() => {
    time += 200;
    if (time >= 200) {
      circleAni.value = true;
      clearInterval(timer);
    }
  }, 200);
};

const handleMouseUp = () => {
  clearInterval(timer);
  circleAni.value = false;
};

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement;
  emits('change', target.checked);
};
</script>
<style lang="scss" scoped>
$active-color: #34c759;
$default-color: rgba(120, 120, 128, 26%);
$disabled-color: rgb(120, 120, 128, 16%);

.switch {
  display: inline-block;
  position: relative;
}

.switch-label {
  min-width: v-bind(width);
  height: v-bind(height);
  border-radius: calc(v-bind(height) / 2);
  background: $default-color;
  display: inline-flex;
  align-items: center;
  padding: 2px;
  position: relative;
  box-sizing: border-box;
  transition: background-color 0.3s ease;
  &::before {
    content: '';
    width: v-bind(diameter);
    height: v-bind(diameter);
    border-radius: calc(v-bind(diameter) / 2);
    background: #fff;
    transition: all 0.3s ease;
    position: relative;
    margin-left: 0;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 15%), 0 3px 1px rgba(0, 0, 0, 6%);
  }
  &.circle-ani::before {
    width: calc(v-bind(diameter) + v-bind(len));
  }
}

[type='checkbox'] {
  min-width: v-bind(width);
  height: v-bind(height);
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
  margin: 0;
  z-index: 1;
  cursor: pointer;
  &:checked + .switch-label {
    background-color: $active-color;
  }
  &:checked + .switch-label::before {
    margin-left: v-bind(ml);
  }
  &:checked + .switch-label.circle-ani::before {
    margin-left: calc(v-bind(ml) - v-bind(len));
  }
  &:disabled {
    cursor: not-allowed;
  }
  &:disabled + .switch-label {
    background-color: $disabled-color;
  }
  &:disabled + .switch-label::before {
    background-color: rgba(#fff, 0.9);
  }
  &:checked:disabled + .switch-label {
    background-color: rgba(52, 199, 89, 70%);
  }
}
</style>
