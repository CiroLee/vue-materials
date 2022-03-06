import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '@/pages/index.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
