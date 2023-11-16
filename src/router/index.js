import { createRouter, createWebHistory } from 'vue-router'
import Test1 from '../views/Test1.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'test1',
      component: Test1
    },
    {
      path: '/test2',
      name: 'test2',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/Test2.vue')
    }
  ]
})

export default router
