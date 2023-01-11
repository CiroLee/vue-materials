<template>
  <div>
    <h2 class="g-title">number-animate</h2>
    <div my-20px>
      <p>前缀 + 分位符</p>
      <number-animate ref="na0" :start="67890" :end="9999" separator prefix="$" />
      <button @click="na0?.play">play</button>
    </div>
    <div my-20px>
      <p>自定义速率</p>
      <number-animate ref="na1" :start="1" :end="99" :precision="2" :rate="500" separator />
      <button @click="na1?.play">play</button>
    </div>
    <div my-20px>
      <number-animate ref="na2" :start="10" :end="0" :precision="3" />
      <button @click="na2?.play">play</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import numberAnimate from './components/numberAnimate.vue';
import type { NumberAnimateInstance } from './components/numberAnimate.vue';
const na0 = ref<NumberAnimateInstance>();
const na1 = ref<NumberAnimateInstance>();
const na2 = ref<NumberAnimateInstance>();
</script>
