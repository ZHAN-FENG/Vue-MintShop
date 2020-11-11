import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/msite',
  },
  {
    path: '/msite',
    component: () => import('@/views/Msite/Msite.vue'),
  },
  {
    path: '/search',
    component: () => import('@/views/Search/Search.vue'),
  },
  {
    path: '/order',
    component: () => import('@/views/Order/Order.vue'),
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/Profile.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
