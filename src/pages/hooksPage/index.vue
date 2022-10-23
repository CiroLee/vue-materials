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
        <div class="panel-item">
          <p>darkMode: auto</p>
          <p class="texts" :class="{ 'dark-mode': isDarkAuto }">{{ mockTexts }}</p>
        </div>
      </div>
      <div class="panel">
        <p>darkMode: manual</p>
        <div class="panel-item">
          <p class="texts" :class="{ 'dark-mode': isDark }">{{ mockTexts }}</p>
          <button @click="toggleDark">{{ isDark ? 'Light' : 'Dark' }}</button>
        </div>
      </div>
      <div class="pabel">
        <p class="title">useClipboard</p>
        <div class="panel-item">
          <input v-model="text" type="text" />
          <button @click="handleCopy(text)">copy</button>
          <button @click="handleCut(text)">cut</button>
        </div>
      </div>
    </content>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import tinyLorem from 'tiny-lorem';
import useToggle from '@/hooks/useToggle';
import useWindowSize from '@/hooks/useWindowSize';
import useDark from '@/hooks/useDark';
import useClipboard from '@/hooks/useClipboard';

const lorem = new tinyLorem();
const mockTexts = lorem.texts.sentence({ range: 40, language: 'en' });
const isDarkAuto = useDark(true);
const [isDark, toggleDark] = useDark();
const [bool, toogleBool] = useToggle(false);
const [str, toogleStr] = useToggle('a', 'b');
const [width, height] = useWindowSize(false);

const [text, { copy, cut }] = useClipboard('');

const handleCopy = async (val: string) => {
  try {
    const [res, err] = await copy();
    console.log(res, err);
  } catch (error) {
    console.error(error);
  }
};
const handleCut = async (val: string) => {
  try {
    const [res, err] = await cut();
    console.log(res, err);
  } catch (error) {
    console.error(error);
  }
};
</script>
<style lang="scss" scoped>
.title {
  font-weight: bold;
}

.panel-item {
  margin: 12px 0;
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
