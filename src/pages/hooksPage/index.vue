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
      <div class="pabel">
        <div class="title">useWindowSize</div>
        <div class="panel-item">
          <p>{{ width }}x{{ height }}</p>
        </div>
      </div>
      <div class="panel">
        <div class="title">useDark</div>
        <p>darkMode: auto</p>
        <p class="texts" :class="{ 'dark-mode': isDarkAuto }">{{ mockTexts }}</p>
      </div>
      <div class="panel">
        <p>darkMode: manual</p>
        <p class="texts" :class="{ 'dark-mode': isDark }">{{ mockTexts }}</p>
        <button @click="toggleDark">{{ isDark ? 'Light' : 'Dark' }}</button>
      </div>
    </content>
  </div>
</template>
<script lang="ts" setup>
import tinyLorem from 'tiny-lorem';
import useToggle from '@/hooks/useToggle';
import useWindowSize from '@/hooks/useWindowSize';
import useDark from '@/hooks/useDark';

const lorem = new tinyLorem();
const mockTexts = lorem.texts.sentence({ range: 40, language: 'en' });
const isDarkAuto = useDark(true);
const [isDark, toggleDark] = useDark();
const [bool, toogleBool] = useToggle(false);
const [str, toogleStr] = useToggle('a', 'b');
const [width, height] = useWindowSize(false);
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}

.panel-item {
  margin-bottom: 12px;
}

.texts {
  padding: 12px 20px;
  background-color: #eee;
  border-radius: 4px;
  margin: 12px 0;
  transition: color, background-color 0.3s ease;
  &.dark-mode {
    color: #eee;
    background-color: #2a2b2e;
  }
}
</style>
