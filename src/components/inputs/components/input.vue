<script lang="ts" setup>
import { ref, computed, onMounted } from 'vue';
import ReIcon from '@/components/icon/index.vue';
interface InputProps {
  type?: 'text' | 'password';
  size?: 'small' | 'medium' | 'large';
  value: string;
  placeholder?: string;
  maxLength?: number;
  clearable?: boolean;
  showCount?: boolean;
  disabled?: boolean;
  readonly?: boolean;
}
const emits = defineEmits<{
  update: [value: string];
  blur: [value: string];
}>();
const props = withDefaults(defineProps<InputProps>(), {
  type: 'text',
  size: 'medium',
  placeholder: '',
  maxLength: undefined,
});
const focus = ref(false);
const showPassword = ref(false);
const countStr = ref('');
const inputType = computed(() => {
  if (props.type === 'password') {
    return showPassword.value ? 'text' : 'password';
  }
  return props.type;
});
const inputHandler = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  if (props.maxLength && value.length > props.maxLength) {
    (e.target as HTMLInputElement).value = value.slice(0, props.maxLength);
  }
  props.showCount && calcCountStr();
  emits('update', (e.target as HTMLInputElement).value);
};
const blurHandler = (e: Event) => {
  focus.value = false;
  emits('blur', (e.target as HTMLInputElement).value);
};
const clearInput = () => {
  emits('update', '');
  props.showCount && calcCountStr('0');
};
const calcCountStr = (length?: string) => {
  if (props.maxLength) {
    countStr.value = `${length || String(props.value).length}/${props.maxLength}`;
  } else {
    countStr.value = `${length || String(props.value).length}`;
  }
};

onMounted(() => {
  if (props.showCount) {
    calcCountStr(props.value.length.toString());
  }
});
</script>
<template>
  <div class="r-input" :class="[{ disabled: props.disabled, focus }, props.size]">
    <input
      :type="inputType"
      :value="props.value"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      @focus="focus = true"
      @blur="blurHandler"
      @input="inputHandler" />
    <div class="r-input__trail" :class="{ 'r-input__count': props.showCount }" :data-count="countStr">
      <re-icon
        v-if="props.clearable && props.value?.length"
        name="close-circle-fill"
        class="r-input__btn"
        @click="clearInput" />
      <re-icon
        v-if="props.type === 'password'"
        :name="showPassword ? 'eye-line' : 'eye-close-line'"
        @click="showPassword = !showPassword" />
    </div>
  </div>
</template>
<style lang="scss">
.r-input {
  height: 36px;
  position: relative;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background-color: #fff;
  border: 1px solid #ebebeb;
  transition: border-color 0.1s linear;
  box-sizing: border-box;
  font-size: 14px;
  &.small {
    height: 26px;
  }
  &.large {
    height: 42px;
  }
  &.disabled {
    background-color: #f1f1f1;
  }
  &.focus {
    border-color: #9e41f1;
  }
  input {
    flex: 1;
    outline: 0;
    width: 100%;
    height: 100%;
    padding: 0 8px;
    border: 0;
    background-color: transparent;
    &[type='password'] {
      &::-ms-clear {
        display: none;
      }
      &::-ms-reveal {
        display: none;
      }
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f1f1f1;
    }
  }
  &__trail {
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 8px;
    color: #a8a8a8;
  }
  &__btn {
    margin-right: 4px;
  }
  &__count::after {
    content: attr(data-count);
    display: inline-block;
    color: #a8a8a8;
  }
}
</style>
