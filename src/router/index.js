import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/SearchBar/Home.vue'
import SearchBarView from '../views/SearchBarView.vue'
import LoginView from '../views/LoginView.vue'

const routes = [
  {
    path: '/',
    name: 'SearchBarView',
    component: SearchBarView,
    children: [
      {
        // A will be rendered in the second <router-view>
        // when /your-sidebar-url/a is matched
        path: '/',
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchBar/Home.vue')
      },
      {
        // A will be rendered in the second <router-view>
        // when /your-sidebar-url/a is matched
        path: 'editorial',
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchBar/Editorial.vue')
      },
      {
        path: '/creative',
        name: 'Creative',
        component: () => import('../views/SearchBar/Creative.vue')
      },
      {
        path: '/vectors',
        name: 'Vectors',
        component: () => import('../views/SearchBar/Vectors.vue')
      },
      {
        path: '/free',
        name: 'Free',
        component: () => import('../views/SearchBar/Free.vue')
      }
    ]
  },
  {
  path: '/login',
    name: 'LoginView',
    component: LoginView,
    children: [
      {
        // A will be rendered in the second <router-view>
        // when /your-sidebar-url/a is matched
        path: '',
        name: 'Home',
        component: Home
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
