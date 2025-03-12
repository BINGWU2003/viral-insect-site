import { createRouter, createWebHashHistory } from 'vue-router'
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/browse',
      name: 'browse',

      component: () => import('../views/BrowseView.vue'),
    },
    {
      path: '/predict-mode',
      name: 'predict-mode',
      component: () => import('../views/PredictModeView.vue'),
    },
    {
      path: '/help',
      name: 'help',
      component: () => import('../views/HelpView.vue'),
    },
    {
      path: '/predict-data',
      name: 'predict-data',
      component: () => import('../views/PredictDataView.vue'),
    }
  ],
})

export default router
