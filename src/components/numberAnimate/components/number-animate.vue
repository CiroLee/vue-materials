<template>
  <div>
    {{ prefix }}{{ playEnd || playing ? formatValue(animatedValue, separator) : formatValue(startValue, separator) }}
  </div>
</template>
<script lang="ts" setup>
export interface NumberAnimateInstance {
  play(): void;
}
import { computed, ref, onBeforeUnmount } from 'vue';
interface NumberAnimateProps {
  start: number;
  end: number;
  precision?: number;
  rate?: number;
  separator?: boolean;
  prefix?: string;
}
let intervalTimer: ReturnType<typeof setInterval> = 0;
const playing = ref(false);
const playEnd = ref(false);
const props = withDefaults(defineProps<NumberAnimateProps>(), {
  precision: 0,
  rate: 1,
  prefix: '',
  separator: false,
});
const animatedValue = ref('');
const precision = computed(() => Math.round(Math.abs(props.precision)));
const startValue = computed(() => props.start.toFixed(precision.value));
const rateValue = computed(() => Math.abs(props.rate));

const formatValue = (value: string, separator?: boolean) => {
  const [integer, digit] = String(value).split('.');
  const separatedValue = separator ? `${Number(integer).toLocaleString()}${digit ? `.${digit}` : ''}` : value;
  return separatedValue;
};

const play = () => {
  if (playing.value) {
    return;
  }
  playing.value = true;
  playEnd.value = false;
  let step = 1 / 10 ** precision.value || 1;

  step = props.start < props.end ? step : -step;
  animatedValue.value = `${startValue.value}`;

  intervalTimer = setInterval(() => {
    if (Number(animatedValue.value) !== props.end) {
      animatedValue.value = (Number(animatedValue.value) + step).toFixed(precision.value);
    } else {
      clearInterval(intervalTimer);
      playEnd.value = true;
      playing.value = false;
    }
  }, rateValue.value);
};

defineExpose({ play });

onBeforeUnmount(() => {
  clearInterval(intervalTimer);
});
</script>
