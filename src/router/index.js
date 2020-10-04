import { createRouter, createWebHistory } from 'vue-router'
<<<<<<< HEAD
import Editorial from '../views/Editorial.vue'
=======
import Home from '../views/Home.vue'
>>>>>>> da2aa8c56bf17ae64280078ce8fbee0f9a1a9573

const routes = [
  {
    path: '/',
<<<<<<< HEAD
    name: 'Editorial',
    component: Editorial
=======
    name: 'Home',
    component: Home
  },
  {
    path: '/editorial',
    name: 'Editorial',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Editorial.vue')
>>>>>>> da2aa8c56bf17ae64280078ce8fbee0f9a1a9573
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
