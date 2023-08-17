import { createRouter, createWebHistory } from 'vue-router';
import type { App } from 'vue';

import { LAYOUT } from './constant';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LAYOUT,
    },
  ],
});

export default router;

export function setupRouter(app: App<Element>) {
  app.use(router);
}
