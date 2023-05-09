<script lang="ts" setup>
import { defineProps, withDefaults, ref, computed, watch } from 'vue';
import Icon from '@/components/icon/index.vue';
export type RadioSize = 'small' | 'medium' | 'large';
interface RadioProps {
  type?: 'checked' | 'circle';
  checked?: boolean;
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
}
const props = withDefaults(defineProps<RadioProps>(), {
  type: 'checked',
  size: 'medium',
});
// 私有状态 + computed getter setter模式
const checked = ref(props.checked);
const checkedVal = computed({
  get() {
    return checked.value;
  },
  set(newVal) {
    checked.value = newVal;
  },
});
const getSize = (size: RadioSize) => {
  switch (size) {
    case 'small':
      return '16px';
    case 'medium':
      return '20px';
    case 'large':
      return '24px';
    default:
      return '18px';
  }
};
watch(
  () => props.checked,
  (newVal) => {
    checkedVal.value = newVal;
  },
);
const emits = defineEmits<{
  (event: 'update:checked', checked: boolean): void;
}>();
const toggleChecked = () => {
  if (props.disabled) return;
  checkedVal.value = !checkedVal.value;
  emits('update:checked', checkedVal.value);
};
</script>
<template>
  <div class="r-radio" :class="{ checked: checkedVal, disabled: props.disabled }" @click="toggleChecked">
    <icon
      v-if="props.type === 'circle'"
      :name="checkedVal ? 'radio-button-fill' : 'checkbox-blank-circle-line'"
      :size="getSize(props.size)" />
    <icon
      v-else
      :name="checkedVal ? 'checkbox-circle-fill' : 'checkbox-blank-circle-line'"
      :size="getSize(props.size)" />
    <div class="r-radio__content">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.r-radio {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  .re-icon {
    color: #ebebeb;
    pointer-events: none;
    transition: color 0.2s ease;
  }
  &.checked .re-icon {
    color: #9e41f1;
  }
  &.disabled {
    color: #dfdfdf;
    cursor: not-allowed;
    .re-icon {
      color: currentcolor;
    }
  }
  &:hover:not(.disabled) {
    .re-icon {
      color: #9e41f1;
    }
  }
  &__content {
    margin-left: 4px;
  }
}
</style>
