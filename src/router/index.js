import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('@/views/PageProducts.vue'),
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('@/views/PageCart.vue'),
  },
  {   
    path: '/:pathMatch(.*)*', 
    name: 'notFound',
    component: () => import('@/views/PageNotFound.vue'), 
  },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
