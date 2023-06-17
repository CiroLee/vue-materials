import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const ComponentsPage = () => import('@/pages/componentsPage/index.vue');
const hooksPage = () => import('@/pages/hooksPage/index.vue');
const Calendar = () => import('@/components/calendar/index.vue');
const Tabs = () => import('@/components/tabs/index.vue');
const TypeIn = () => import('@/components/typeIn/index.vue');
const Tree = () => import('@/components/tree/index.vue');
const NumberAnimate = () => import('@/components/numberAnimate/index.vue');
const Avatar = () => import('@/components/avatar/index.vue');
const ResizableBox = () => import('@/components/resizableBox/index.vue');
const InputsPage = () => import('@/components/inputs/index.vue');
const HightLightWordPage = () => import('@/components/highlightWord/index.vue');

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
      icon: 'apps-line',
      cname: '组件',
      visible: true,
    },
    children: [
      {
        path: '/components/calendar',
        name: 'calendar',
        component: Calendar,
        meta: {
          icon: 'calendar-2-line',
          name: 'calendar',
        },
      },
      {
        path: '/components/tabs',
        name: 'tabs',
        component: Tabs,
        meta: {
          icon: 'stack-fill',
          name: 'tab',
        },
      },
      {
        path: '/components/type-in',
        name: 'type-in',
        component: TypeIn,
        meta: {
          icon: 'input-method-line',
          name: 'type-in',
        },
      },
      {
        path: '/components/tree',
        name: 'tree',
        component: Tree,
        meta: {
          icon: 'node-tree',
          name: 'tree',
        },
      },
      {
        path: '/components/number-animate',
        name: 'number-animate',
        component: NumberAnimate,
        meta: {
          icon: 'number-1',
          name: 'number-animate',
        },
      },
      {
        path: '/components/avatar',
        name: 'avatar',
        component: Avatar,
        meta: {
          icon: 'user-smile-line',
          name: 'avatar',
        },
      },
      {
        path: '/components/resizable-box',
        name: 'resizable-box',
        component: ResizableBox,
        meta: {
          icon: 'swap-box-line',
          name: 'resizable-box',
        },
      },
      {
        path: '/components/inputs',
        name: 'inputs',
        component: InputsPage,
        meta: {
          icon: 'input-method-line',
          name: 'inputs',
        },
      },
      {
        path: '/components/hightlight-word',
        name: 'hightlight-word',
        component: HightLightWordPage,
        meta: {
          icon: 'article-line',
          name: 'hightlight-word',
        },
      },
    ],
  },
  {
    path: '/hooks',
    name: 'hooks',
    component: hooksPage,
    meta: {
      icon: 'donut-chart-line',
      cname: 'hooks',
      visible: true,
    },
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
