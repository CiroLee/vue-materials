<template>
  <div class="hooks-wrapper">
    <h1 class="g-title">hooks</h1>
    <content>
      <div class="panel">
        <div class="title">useToggle</div>
        <div class="panel-item">
          <p>init: false</p>
          <p>{{ bool }}</p>
          <button @click="toogleBool">toggle</button>
        </div>
        <div class="panel-item">
          <p>init: false</p>
          <p>{{ str }}</p>
          <button @click="toogleStr">toggle</button>
        </div>
      </div>
    </content>
  </div>
</template>
<script lang="ts" setup>
import useToggle from '@/hooks/useToggle';
const [bool, toogleBool] = useToggle(false);
const [str, toogleStr] = useToggle('a', 'b');
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}

.panel-item {
  margin-bottom: 12px;
}
</style>
