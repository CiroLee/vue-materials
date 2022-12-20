<template>
  <div>
    <h2 class="g-title">number-animate</h2>
    <div class="panel">
      <p>前缀 + 分位符</p>
      <number-animate ref="na0" :start="67890" :end="9999" separator prefix="$" />
      <button @click="na0?.play">play</button>
    </div>
    <div class="panel">
      <p>自定义速率</p>
      <number-animate ref="na1" :start="1" :end="99" :precision="2" :rate="500" separator />
      <button @click="na1?.play">play</button>
    </div>
    <div class="panel">
      <number-animate ref="na2" :start="10" :end="0" :precision="3" />
      <button @click="na2?.play">play</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import numberAnimate from './components/number-animate.vue';
import type { NumberAnimateInstance } from './components/number-animate.vue';
const na0 = ref<NumberAnimateInstance>();
const na1 = ref<NumberAnimateInstance>();
const na2 = ref<NumberAnimateInstance>();
</script>
<style lang="scss" scoped>
.panel {
  margin: 20px 0;
}
</style>
