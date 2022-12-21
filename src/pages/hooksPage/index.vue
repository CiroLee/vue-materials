<template>
  <div class="hooks-wrapper">
    <h1 class="g-title">hooks</h1>
    <content>
      <div>
        <div font-bold>useToggle</div>
        <div my-12px>
          <p>init: false</p>
          <p>{{ bool }}</p>
          <button @click="toggleBool">toggle</button>
        </div>
        <div my-12px>
          <p>init: false</p>
          <p>{{ str }}</p>
          <button @click="toggleStr">toggle</button>
        </div>
      </div>
      <div>
        <div font-bold>useWindowSize</div>
        <div my-12px>
          <p>{{ width }}x{{ height }}</p>
        </div>
      </div>
      <div>
        <div font-bold>useDark</div>
        <div my-12px>
          <p>darkMode: auto</p>
          <p class="texts" :class="{ 'dark-mode': isDarkAuto }">{{ mockTexts }}</p>
        </div>
      </div>
      <div>
        <p>darkMode: manual</p>
        <div my-12px>
          <p class="texts" :class="{ 'dark-mode': isDark }">{{ mockTexts }}</p>
          <button @click="toggleDark">{{ isDark ? 'Light' : 'Dark' }}</button>
        </div>
      </div>
      <div>
        <p font-bold>useClipboard</p>
        <div my-12px>
          <input v-model="text" type="text" />
          <button @click="handleCopy(text)">copy</button>
          <button @click="handleCut(text)">cut</button>
        </div>
      </div>
      <div>
        <div font-bold>useNetwork</div>
        <div my-12px>
          <p>isSupported: {{ networkStatus.isSupported }}</p>
          <p>online: {{ networkStatus.isOnLine }}</p>
          <p>networkType: {{ networkStatus.type }}</p>
          <p>effectiveType: {{ networkStatus.effectiveType }}</p>
          <p>downlink: {{ networkStatus.downlink }}</p>
          <p>downlinkMax: {{ networkStatus.downlinkMax }}</p>
          <p>rtt: {{ networkStatus.rtt }}</p>
          <p>saveData: {{ networkStatus.saveData }}</p>
        </div>
      </div>
    </content>
  </div>
</template>
<script lang="ts" setup>
import tinyLorem from 'tiny-lorem';
import useToggle from '@/hooks/useToggle';
import useWindowSize from '@/hooks/useWindowSize';
import useDark from '@/hooks/useDark';
import useClipboard from '@/hooks/useClipboard';
import useNetwork from '@/hooks/useNetwork';

const lorem = new tinyLorem();
const mockTexts = lorem.texts.sentence({ range: 40, language: 'en' });
const isDarkAuto = useDark(true);
const [isDark, toggleDark] = useDark();
const [bool, toggleBool] = useToggle(false);
const [str, toggleStr] = useToggle('a', 'b');
const [width, height] = useWindowSize(false);
const [text, { copy, cut }] = useClipboard('');
const networkStatus = useNetwork();

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
