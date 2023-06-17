<script setup lang="ts">
import { computed } from 'vue';
import xss from 'xss';
interface wordsObj {
  word: string;
  class?: string;
}
interface HighlightWordProps {
  content: string;
  words: string[] | wordsObj[];
  highlightClass?: string;
}
const xssOption = {
  whiteList: {
    span: ['class'],
  },
};
const props = withDefaults(defineProps<HighlightWordProps>(), {
  highlightClass: 'highlight-word',
});

const text = computed(() => {
  let content = '';
  const formatWords = props.words.map((word) => {
    if (typeof word === 'string') {
      return {
        origin: word,
        format: `<span class="${props.highlightClass}">${word}</span>`,
      };
    } else if (typeof word === 'object' && word.word) {
      return {
        origin: word.word,
        format: `<span class="${word.class ?? props.highlightClass}">${word.word}</span>`,
      };
    }
  });

  formatWords.forEach((word) => {
    word && (content = (content || props.content).replaceAll(word.origin, word.format));
  });

  return content;
});
</script>
<template>
  <span v-html="xss(text, xssOption)"></span>
</template>
<style lang="scss">
.highlight-word {
  display: inline-block;
  background-color: #fef616;
}
</style>
