import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Footer from '../views/Footer.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/signin',
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/signin/index.vue'),
  },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/views/index/index.vue'),
  },
  {
    path: '/card',
    name: 'card',
    component: () => import('@/views/home/Cards/index.vue'),
  },
  {
    path: '/modal',
    name: 'modal',
    component: () => import('@/views/home/modal/index.vue'),
  },
  {
    path: '/reorder',
    name: 'reorder',
    component: () => import('@/views/home/reorder/index.vue'),
  },
  {
    path: '/float',
    name: 'float',
    component: () => import('@/views/home/floatingactionbutton/index.vue'),
  },

  {
    path: '/tabs/',
    component: Footer,
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index.vue'),
      },
      
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;