<template>
  <div class="tree">
    <div
      v-for="item in list"
      :key="item.id"
      class="tree-node"
      :class="{ expanded: expandedIds.includes(item.id), disabled: item.disabled }"
      @click.stop="nodeClick(item)">
      <div class="tree-item">
        <icon name="arrow-right-s-fill" />
        <div>{{ item.text }}</div>
      </div>
      <div v-if="item.children && item.children.length" class="tree-child">
        <tree :list="item.children"></tree>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import Icon from '@/components/icon/index.vue';
export interface TreeNode {
  id: string;
  text: string;
  disabled?: boolean;
  children?: TreeNode[];
}
import { ref } from 'vue';
defineOptions({
  name: 'Tree',
});

interface Tree {
  list: TreeNode[];
}

defineProps<Tree>();

const expandedIds = ref<string[]>([]);

const nodeClick = (item: TreeNode) => {
  if (item.disabled) return;
  if (expandedIds.value.includes(item.id)) {
    expandedIds.value = expandedIds.value.filter((id) => id !== item.id);
  } else {
    expandedIds.value.push(item.id);
  }
};
</script>
<style lang="scss" scoped>
.tree-item {
  height: 32px;
  display: flex;
  align-items: center;
  padding: 0 8px;
  transition: background-color 0.1s ease;
  i {
    transition: transform 0.1s;
  }
  &:hover {
    background-color: #eee;
  }
}

.tree-node {
  max-height: 32px;
  overflow: hidden;
  cursor: pointer;
  user-select: none;
  &.disabled {
    cursor: not-allowed;
    color: gray;
  }
  &.expanded {
    max-height: 9999px;
  }
  &.expanded > .tree-item i {
    transform: rotate(90deg);
  }
}

.tree-child {
  padding-left: 20px;
}
</style>
