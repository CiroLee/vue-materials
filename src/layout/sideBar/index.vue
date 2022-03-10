<template>
  <div class="sidebar" :class="{ collapsible: myCollapsible }">
    <div class="sidebar-menus">
      <div
        v-for="(item, index) in visibleMenus"
        :key="index"
        class="menu"
        :class="{ active: pathName.includes(item.path) }"
        @click="menuClick(item.path)"
      >
        <i class="icon" :class="item?.meta?.icon"></i>
        <span class="menu__text">{{ item?.meta?.cname }}</span>
      </div>
    </div>
    <div class="sidebar-footer" @click="myCollapsible = !myCollapsible">
      <i class="icon ri-arrow-left-s-line"></i>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { RouteRecordRaw } from 'vue-router';
interface ISidebar {
  menus: RouteRecordRaw[];
  collapsible?: boolean;
}

const props = withDefaults(defineProps<ISidebar>(), {
  collapsible: false,
  visible: true,
});

const myCollapsible = ref(props.collapsible);
const router = useRouter();
const route = useRoute();

const pathName = computed(() => route.path);
// v-if 和 v-for不能作用在同一个元素上 的解决方案
//  https://vuejs.org/style-guide/rules-essential.html#avoid-v-if-with-v-for
const visibleMenus = computed(() => props.menus.filter(item => item?.meta?.visible));

const menuClick = (path: string) => {
  router.push(path);
};
</script>
<style lang="scss" scoped>
$menu-height: 42px;
$gap: 8px;
$footer-height: 52px;
$active-color: #007bff;
$hover-color: #f4f4f4;
$big-font-size: 28px;

.sidebar-menus {
  height: calc(100vh - $footer-height);
}

.menu {
  height: $menu-height;
  padding: 0 12px;
  display: flex;
  align-items: center;
  transition: all 0.3s ease;
  color: #3f3f3f;
  border-radius: 2px;
  font-size: 14px;
  cursor: pointer;
  .icon {
    font-size: 18px;
  }
  &:hover {
    background: $hover-color;
  }
  &.active {
    background: $active-color;
    color: #fff;
    font-weight: 500;
  }
  &__text {
    margin-left: $gap;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}

.sidebar-footer {
  width: 100%;
  height: $footer-height;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
  left: 0;
  color: #b8b8b8;
  cursor: pointer;
  border-top: 1px solid #eee;
  .icon {
    transition: all 0.3s ease-in-out;
    font-size: $big-font-size;
  }
}

.sidebar {
  width: 200px;
  height: 100vh;
  padding: 6px;
  border-right: 1px solid #eee;
  overflow: hidden;
  position: relative;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  &.collapsible {
    width: 55px;
    .sidebar-footer .icon {
      transform: rotate(180deg);
    }
  }
}
</style>
