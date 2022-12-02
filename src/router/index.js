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
      path: '/allnews',
      name: 'allnews',
      component: AllNews
    },
    {
      path: '/createnews',
      name: 'createnews',
      component: CreateNews
    },
    {
      path: '/updatenews',
      name: 'updatenews',
      component: UpdateNews
    },
    {
      path: '/allevent',
      name: 'allevent',
      component: AllEvent
    },
    {
      path: '/createevent',
      name: 'createevent',
      component: CreateEvent
    },
    {
      path: '/updateevent',
      name: 'updateevent',
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
