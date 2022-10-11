<template>
  <div class="tree-wrapper">
    <h2 class="g-title">Tree</h2>
    <tree :list="treeList" />
  </div>
</template>
<script lang="ts" setup>
import Tree from './components/tree.vue';
import type { TreeNode } from './components/tree.vue';
const treeList: TreeNode[] = [
  {
    id: '1',
    text: 'text-1',
  },
  {
    id: '2',
    text: 'text-2',
    children: [
      {
        id: '2-1',
        text: 'text-2-1',
      },
      {
        id: '2-2',
        text: 'text-2-2',
        children: [
          {
            id: '2-2-1',
            text: 'text-2-2-1',
          },
          {
            id: '2-2-2',
            text: 'text-2-2-2',
          },
          {
            id: '2-2-3',
            text: 'text-2-2-3',
          },
        ],
      },
    ],
  },
  {
    id: '3',
    text: 'text-3',
    children: [
      {
        id: '3-1',
        text: 'text-3-1',
        disabled: true,
        children: [],
      },
    ],
  },
];
</script>
