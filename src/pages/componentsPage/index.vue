<template>
  <div>
    <div v-if="pathName === 'components'" flex flex-wrap>
      <glass-link-card
        v-for="(item, index) in componentsList.children"
        :key="index"
        mr-6px
        mb-6px
        :icon="(item.meta?.icon as string)"
        :path="item.path"
        :name="(item?.name as string)" />
    </div>
    <div v-else py-8px>
      <i text-24px cursor-pointer class="ri-arrow-left-line" @click="router.back()"></i>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GlassLinkCard from '@/components/glassLinkCard/index.vue';
import { routes } from '@/router';
const componentsList = routes.filter((item) => item.name === 'components' && item.children)[0];
const route = useRoute();
const router = useRouter();
const pathName = computed(() => route.name);
</script>
