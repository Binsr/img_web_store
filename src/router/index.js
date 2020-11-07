import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/SearchBar/Home.vue'
import SearchBarView from '../views/SearchBarView.vue'
import LoginView from '../views/LoginView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
ShoppingCartView
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
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchBar/Home.vue') //OVO POTENCIJALNO POPAKOVATI U STORE I OVDE INPORT URADITI ZBOG PREGLEDNOSTI
      },
      {
        // A will be rendered in the second <router-view>
        // when /your-sidebar-url/a is matched
        path: 'editorial',
        component: () => import(/* webpackChunkName: "about" */ '../views/SearchBar/Editorial.vue'),
        children: [
          {
            path: 'all',
            component: () => {
              return import(/* webpackChunkName: "about" */ '../views/SearchBar/EditorialSubViews/All.vue')
            },
          },
          {
            path: 'entertainment',
            component: () => {
              return import(/* webpackChunkName: "about" */ '../views/SearchBar/EditorialSubViews/Entertainment.vue')
            },
          },
          {
            path: 'news',
            component: () => {
              return import(/* webpackChunkName: "about" */ '../views/SearchBar/EditorialSubViews/News.vue')
            },
          },
          {
            path: 'sports',
            component: () => {
              return import(/* webpackChunkName: "about" */ '../views/SearchBar/EditorialSubViews/Sports.vue')
            },
          }
        ]
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
  },
  {
    path: '/shopping-cart-view',
      name: 'ShoppingCartView',
      component: ShoppingCartView ,
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
