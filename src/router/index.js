import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllView from '../views/AllView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/all',
      name: 'all',
      component: AllView
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
      props: (route) => route.params
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
