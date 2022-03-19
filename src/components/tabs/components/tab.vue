<template>
  <div ref="tabRef" class="tab">
    <span v-show="showActiveBar" ref="activeBarRef" class="active-bar" :class="{ animated: animated }"></span>
    <div
      v-for="item in options"
      :key="item.key"
      class="tab__item"
      :class="{ current: item.key === tabActiveKey, disabled: item?.disabled }"
      @click="tabChange(item)"
    >
      <i v-if="item?.prefixIcon" class="prefix-icon" :class="item.prefixIcon"></i>
      <span>{{ item.title }}</span>
      <i v-if="item?.suffixIcon" class="suffix-icon" :class="item.suffixIcon"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, ref, watch, nextTick } from 'vue';
interface TabItem {
  key: number | string;
  title: string;
  prefixIcon?: string;
  suffixIcon?: string;
  disabled?: boolean;
}
interface TabProps {
  defaultKey: number | string;
  animated?: boolean;
  options: TabItem[];
}

const props = withDefaults(defineProps<TabProps>(), {
  animated: true,
  disabled: false,
});
const tabActiveKey = ref<string | number>('');
const tabRef = ref<HTMLElement | null>(null);
const activeBarRef = ref<HTMLElement | null>(null);
const showActiveBar = ref<boolean>(false);

// 计算active-abr的位置
const calcActiveBarPos = () => {
  const elements = tabRef.value?.children || [];
  const activeOne = Array.from(elements).filter(item => item.classList.value.includes('current'))[0] as HTMLElement;
  if (!activeOne) return;
  // 重点： offsetWidth, offsetLeft, 引申: dom节点的属性，方法有哪些？
  if (activeBarRef.value) {
    activeBarRef.value.style.width = `${activeOne.offsetWidth}px`;
    activeBarRef.value.style.transform = `translateX(${activeOne.offsetLeft}px)`;
    if (!showActiveBar.value) {
      showActiveBar.value = true;
    }
  }
};

const tabChange = (item: TabItem) => {
  if (item?.disabled) return;
  tabActiveKey.value = item.key;
};

watch(
  () => tabActiveKey.value,
  () => nextTick(() => calcActiveBarPos())
);

onBeforeMount(() => {
  tabActiveKey.value = props.defaultKey;
});
</script>
<style lang="scss" scoped>
$active-color: #007bfe;
$gray: #979797;

.tab {
  display: flex;
  position: relative;
  &__item {
    margin: 0 4px;
    min-width: 56px;
    padding: 2px 12px;
    height: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    position: relative;
    transition: color 0.3s ease;
    cursor: pointer;
    &.current {
      color: $active-color;
    }
    &.disabled {
      color: $gray;
      cursor: not-allowed;
    }
  }
}

.active-bar {
  height: 2px;
  width: 0;
  position: absolute;
  bottom: -2px;
  background: $active-color;
  transform: translateX(0);
  transform-origin: center;
  &.animated {
    transition: all 0.2s ease-in-out;
  }
}

.prefix-icon {
  margin-right: 4px;
}

.suffix-icon {
  margin-left: 4px;
}
</style>
