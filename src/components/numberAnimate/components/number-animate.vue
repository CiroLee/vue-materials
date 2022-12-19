<template>
  <div>{{ playEnd || playing ? animatedVal : startValue }}</div>
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
  speed?: number;
}
let intervalTimer: ReturnType<typeof setInterval> = 0;
const playing = ref(false);
const playEnd = ref(false);
const props = withDefaults(defineProps<NumberAnimateProps>(), {
  precision: 0,
  speed: 1,
});
const animatedVal = ref('');
const precision = computed(() => Math.round(props.precision));
const startValue = computed(() => formatStartValue(props.start, precision.value));
const speedValue = computed(() => Math.abs(props.speed));
const formatStartValue = (start: number, precision: number) => {
  const [integer, decimals = ''] = start.toString().split('.');
  if (precision) {
    const prec = Math.min(precision, decimals.length);
    let digit = decimals.slice(0, prec);
    const rounded = Number(decimals.at(prec)) >= 5;
    if (rounded) {
      const digitArr = digit.split('');
      digitArr.splice(-1, 1, String(Number(digit[digit.length - 1]) + 1));
      digit = digitArr.join('');
    }
    return `${integer}.${digit}${'0'.repeat(Math.abs(precision - decimals.length))}`;
  }
  return `${Math.round(start)}`;
};

const play = () => {
  if (playing.value) {
    return;
  }
  playing.value = true;
  playEnd.value = false;
  let step = 1 / 10 ** precision.value || 1;
  playing.value = true;

  step = props.start < props.end ? step : -step;
  animatedVal.value = `${props.start}`;

  intervalTimer = setInterval(() => {
    if (Math.abs(Number(animatedVal.value)) < Math.abs(props.end)) {
      animatedVal.value = (Number(animatedVal.value) + step).toFixed(precision.value);
    } else {
      clearInterval(intervalTimer);
      playEnd.value = true;
      playing.value = false;
      animatedVal.value = formatStartValue(props.end, precision.value);
    }
  }, speedValue.value);
};

defineExpose({ play });

onBeforeUnmount(() => {
  clearInterval(intervalTimer);
});
</script>
