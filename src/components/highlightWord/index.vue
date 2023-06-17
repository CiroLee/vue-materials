<script setup lang="ts">
import highlightWord from './components/highlightWord.vue';
</script>
<template>
  <div>
    <p font-bold mb-3>highlightWord</p>
    <div mb-2>
      <p text-sm mb-1>默认</p>
      <highlight-word content="hello world" :words="['world']" />
    </div>
    <div mb-2>
      <p text-sm mb-1>自定义高亮样式1</p>
      <highlight-word content="hello world" highlight-class="bg-red" :words="['world']" />
    </div>
    <div mb-2>
      <p text-sm mb-1>自定义高亮样式2</p>
      <highlight-word
        content="vue实现自定义文字高亮,vue, javascript, react"
        highlight-class="bg-black text-white"
        :words="[{ word: 'vue', class: 'bg-blue' }, { word: 'react' }]" />
    </div>
  </div>
</template>
