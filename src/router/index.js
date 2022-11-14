import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AllView from '../views/AllView.vue'
import CreateView from '../views/CreateView.vue'
import UpdateView from '../views/UpdateView.vue'
import AllNews from '../views/news/AllNews.vue'
import CreateNews from '../views/news/CreateNews.vue'
import UpdateNews from '../views/news/UpdateNews.vue'
import AllEvent from '../views/events/AllEvent.vue'
import CreateEvent from '../views/events/CreateEvent.vue'
import UpdateEvent from '../views/events/UpdateEvent.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
    },
    {
      path: '/',
      name: 'allNews',
      component: AllNews
    },
    {
      path: '/createNews',
      name: 'createNews',
      component: CreateNews
    },
    {
      path: '/updateNews',
      name: 'updateNews',
      component: UpdateNews
    },
    {
      path: '/allEvent',
      name: 'allEvent',
      component: AllEvent
    },
    {
      path: '/createEvent',
      name: 'createEvent',
      component: CreateEvent
    },
    {
      path: '/updateEvent',
      name: 'updateEvent',
      component: UpdateEvent
    },
  ]
})

export default router
