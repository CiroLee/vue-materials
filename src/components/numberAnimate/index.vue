<template>
  <div>
    <h2 class="g-title">number-animate</h2>
    <div>
      <number-animate ref="incrementNaRef" :start="0" :end="24" :precision="0" :speed="20" />
      <button @click="incrementNaRef?.play">play(increment)</button>
    </div>
    <div>
      <number-animate ref="decrementNaRef" :start="10" :end="-33" :precision="2" />
      <button @click="decrementNaRef?.play">play(decrement)</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import numberAnimate from './components/number-animate.vue';
import type { NumberAnimateInstance } from './components/number-animate.vue';
const incrementNaRef = ref<NumberAnimateInstance>();
const decrementNaRef = ref<NumberAnimateInstance>();
</script>
