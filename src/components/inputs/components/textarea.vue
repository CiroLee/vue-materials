<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import ReIcon from '@/components/icon/index.vue';
interface TextareaProps {
  value: string;
  placeholder?: string;
  maxLength?: number;
  clearable?: boolean;
  showCount?: boolean;
  rows?: number;
  disabled?: boolean;
  readonly?: boolean;
}
const props = defineProps<TextareaProps>();
const emits = defineEmits<{
  update: [value: string];
}>();
const countStr = ref('');
const inputHandler = (e: Event) => {
  const value = (e.target as HTMLInputElement).value;
  if (props.maxLength && value.length > props.maxLength) {
    (e.target as HTMLInputElement).value = value.slice(0, props.maxLength);
  }
  props.showCount && calcCountStr();
  emits('update', (e.target as HTMLInputElement).value);
};

const calcCountStr = (length?: string) => {
  if (props.maxLength) {
    countStr.value = `${length || String(props.value).length}/${props.maxLength}`;
  } else {
    countStr.value = `${length || String(props.value).length}`;
  }
};

const clearInput = () => {
  emits('update', '');
  props.showCount && calcCountStr('0');
};

onMounted(() => {
  if (props.showCount) {
    calcCountStr(props.value.length.toString());
  }
});
</script>
<template>
  <div class="r-textarea" :class="{ disabled: props.disabled }">
    <textarea
      :value="props.value"
      :rows="props.rows ? props.rows : 5"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :readonly="props.readonly"
      @input="inputHandler" />
    <re-icon
      v-if="props.clearable && props.value.length"
      name="close-circle-fill"
      color="#a8a8a8"
      class="r-textarea__clear"
      @click="clearInput" />
    <div v-if="props.showCount" class="r-textarea__count">{{ countStr }}</div>
  </div>
</template>
<style lang="scss">
.r-textarea {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  box-sizing: border-box;
  textarea {
    height: 100%;
    border-radius: 2px;
    outline: 0;
    padding: 8px;
    padding-right: 18px;
    transition: border-color 0.1s linear;
    border: 1px solid #ebebeb;
    background-color: transparent;
    &:focus,
    &:focus-within {
      border-color: #9e41f1;
    }
    &:disabled {
      cursor: not-allowed;
      background-color: #f1f1f1;
    }
  }
  &__clear[class] {
    position: absolute;
    right: 6px;
    top: 6px;
  }
  &__count {
    text-align: right;
    font-size: 14px;
    margin-top: 6px;
    color: #a8a8a8;
  }
}
</style>
