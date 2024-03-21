import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from "../layout/MainLayout.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainLayout,
      children: [
        {
            path: "dashboard",
            name: "admin.dashboard",
            component: () => import("../components/components.vue"),
        },
      ]
    }
  ]
})

export default router
