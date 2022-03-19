<template>
  <div>
    <div v-if="pathName === 'components'" class="card-list">
      <GlassLinkCard
        v-for="(item, index) in componentsList.children"
        :key="index"
        class="card-list__glass"
        :icon="(item.meta?.icon as string)"
        :path="item.path"
        :name="(item?.name as string)"
      />
    </div>
    <div v-else class="back">
      <i class="ri-arrow-left-line" @click="router.back()"></i>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import GlassLinkCard from '@/components/glassLinkCard/index.vue';
import { routes } from '@/router';
const componentsList = routes.filter(item => item.name === 'components' && item.children)[0];
const route = useRoute();
const router = useRouter();
const pathName = computed(() => route.name);
</script>
<style lang="scss" scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  &__glass {
    margin: 0 6px 6px 0;
  }
}

.back {
  padding: 8px 0;
  i {
    font-size: 24px;
    cursor: pointer;
  }
}
</style>
