import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
const ComponentsPage = () => import('@/pages/componentsPage/index.vue');
const Calendar = () => import('@/components/calendar/index.vue');

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
    ],
  },
];

export default createRouter({
  history: createWebHashHistory(),
  routes,
});
