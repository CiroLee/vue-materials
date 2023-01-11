<template>
  <div>
    <h2 font-bold>可调整大小盒子</h2>
    <div mt-16px w-full h-600px flex flex-col overflow-hidden>
      <resizable-box width="100%" height="64px" resize="vertical-bottom">
        <h1 flex h-full justify-center items-center bg="red">header</h1>
      </resizable-box>
      <div flex flex-1 overflow-hidden relative w-full>
        <resizable-box resize="horizontal-right" bg="purple" width="100px" height="100%%">
          <div flex h-full justify-center items-center>aside</div>
        </resizable-box>
        <main bg="orange" flex-1 flex justify-center items-center>main</main>
        <resizable-box resize="horizontal-left" bg="green" width="100px" height="100%%">
          <div flex h-full justify-center items-center>aside</div>
        </resizable-box>
      </div>
      <resizable-box resize="vertical-top" height="66px" width="100%" bg="gray">
        <div flex justify-center items-center h-full>footer</div>
      </resizable-box>
    </div>
  </div>
</template>
<script lang="ts" setup>
import ResizableBox from './components/resizableBox.vue';
</script>
