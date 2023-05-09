<template>
  <i class="re-icon" :class="`ri-${name}`" :style="style"></i>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'ReIcon',
});
</script>
<script setup lang="ts">
import { computed } from 'vue';
interface IconProps {
  name: string;
  color?: string;
  size?: string;
  rotate?: number;
  style?: string;
}
const props = withDefaults(defineProps<IconProps>(), {
  name: '',
  color: 'inherit',
  size: 'inherit',
  rotate: 0,
  style: '',
});

const fontsize = computed(() => `${props.size}`);
</script>
<style lang="scss" scoped>
.re-icon {
  color: v-bind(color);
  font-size: v-bind(fontsize);
  line-height: 1em;
  position: relative;
  cursor: pointer;
}
</style>
