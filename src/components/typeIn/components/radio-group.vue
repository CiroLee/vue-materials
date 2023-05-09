<script lang="ts" setup>
import { withDefaults, defineProps, ref, computed, defineEmits, watch } from 'vue';
import Radio, { type RadioSize } from './radio.vue';
export interface Option {
  label: string;
  value: string | number;
  disabled?: boolean;
}
interface RadioGroup {
  type: 'checked' | 'circle';
  size?: RadioSize;
  direction?: 'horizontal' | 'vertical';
  defaultKey?: string | number;
  options: Option[];
}

const props = withDefaults(defineProps<RadioGroup>(), {
  type: 'checked',
  size: 'medium',
  direction: 'horizontal',
  defaultKey: '',
});

const defaultKey = ref(props.defaultKey);
const activeVal = computed({
  get() {
    return defaultKey.value;
  },
  set(newVal) {
    defaultKey.value = newVal;
  },
});

const emits = defineEmits<{
  (event: 'update:value', value: Option & { checked: boolean }): void;
}>();

const toggleChecked = (option: Option, checked: boolean) => {
  if (option.disabled) return;
  activeVal.value = option.value;
  emits('update:value', { ...option, checked });
};

watch(
  () => props.defaultKey,
  (newVal) => {
    defaultKey.value = newVal;
  },
);
</script>
<template>
  <div class="r-radio-group" :class="props.direction">
    <radio
      v-for="option in props.options"
      :key="option.value"
      :type="props.type"
      :size="props.size"
      :disable="option.disabled"
      :checked="option.value === activeVal"
      @update:checked="(checked) => toggleChecked(option, checked)"
      >{{ option.label }}</radio
    >
  </div>
</template>
<style lang="scss">
.r-radio-group {
  .r-radio:not(:last-child) {
    margin-right: 12px;
  }
  &.vertical {
    .r-radio {
      display: flex;
      &:not(:first-child) {
        margin-right: 0;
        margin-top: 8px;
      }
    }
  }
}
</style>
