import { createRouter, createWebHistory } from 'vue-router'
import Editorial from '../views/Editorial.vue'

const routes = [
  {
    path: '/',
    name: 'Editorial',
    component: Editorial
  },
  {
    path: '/creative',
    name: 'Creative',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Creative.vue')
  },
  {
    path: '/vectors',
    name: 'Vectors',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vectors.vue')
  },
  {
    path: '/free',
    name: 'Free',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Free.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
