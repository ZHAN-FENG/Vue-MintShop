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
    meta: {
      showFooter: true,
    },
  },
  {
    path: '/search',
    component: () => import('@/views/Search/Search.vue'),
    meta: {
      showFooter: true,
    },
  },
  {
    path: '/order',
    component: () => import('@/views/Order/Order.vue'),
    meta: {
      showFooter: true,
    },
  },
  {
    path: '/profile',
    component: () => import('@/views/Profile/Profile.vue'),
    meta: {
      showFooter: true,
    },
  },
  {
    path: '/login',
    component: () => import('@/views/Login/Login.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
})

export default router
