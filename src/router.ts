import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const ComponentsPage = () => import('@/pages/componentsPage/index.vue');
const Calendar = () => import('@/components/calendar/index.vue');
const Tabs = () => import('@/components/tabs/index.vue');
const TypeIn = () => import('@/components/typeIn/index.vue');
const Tree = () => import('@/components/tree/index.vue');
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'components',
  },
  {
    path: '/components',
    name: 'components',
    component: ComponentsPage,
    meta: {
      icon: 'ri-apps-line',
      cname: '组件',
      visible: true,
    },
    children: [
      {
        path: '/components/calendar',
        name: 'calendar',
        component: Calendar,
        meta: {
          icon: 'ri-calendar-2-line',
          name: 'calendar',
        },
      },
      {
        path: '/components/tabs',
        name: 'tabs',
        component: Tabs,
        meta: {
          icon: 'ri-stack-fill',
          name: 'tab',
        },
      },
      {
        path: '/components/type-in',
        name: 'type-in',
        component: TypeIn,
        meta: {
          icon: 'ri-input-method-line',
          name: 'type-in',
        },
      },
      {
        path: '/components/tree',
        name: 'tree',
        component: Tree,
        meta: {
          icon: 'ri-node-tree',
          name: 'tree',
        },
      },
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
