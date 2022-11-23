import { createRouter, createWebHashHistory } from 'vue-router'
import AllNews from '../views/news/AllNews.vue'
import CreateNews from '../views/news/CreateNews.vue'
import UpdateNews from '../views/news/UpdateNews.vue'
import AllEvent from '../views/events/AllEvent.vue'
import CreateEvent from '../views/events/CreateEvent.vue'
import UpdateEvent from '../views/events/UpdateEvent.vue'
import Login from '../views/users/Login.vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/allNews',
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
    {
      path: '/',
      name: 'login',
      component: Login
    },
  ]
})

export default router
