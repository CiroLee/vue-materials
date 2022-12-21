<template>
  <div class="switch-wrap">
    <div mt-10px>
      <div font-bold mb-8px>switch</div>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>large: </span>
        <Switch size="large" checked @change="switchChange" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>default: </span>
        <Switch size="medium" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>small: </span>
        <Switch size="small" />
      </p>
      <p flex content-center mb-12px>
        <span inline-block w-60px mr-16px text-right>禁用: </span>
        <Switch size="small" disabled />
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Switch from './components/switch/index.vue';
const switchChange = (checked: boolean) => {
  console.log(checked);
};
</script>
