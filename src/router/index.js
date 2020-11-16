import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/SearchBar/Home.vue'
import SearchBarView from '../views/SearchBarView.vue'
import LoginView from '../views/LoginView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
//TODO PROBAJ DA IMPORTUJES OVDE MESSAGES I DA DINAMICKI SETUJES LINKOVE
ShoppingCartView
const routes = [
  {
    path: '/',
    name: 'SearchBarView',
    component: SearchBarView,
    children: [
      {
        path: '/',
        component: () => import( '../views/SearchBar/Home.vue')
      },
      {
        path: 'editorial',
        component: () => import( '../views/SearchBar/Editorial.vue'),
        children: [
          {
            path: '',
            component: () => {
              return import( '../views/SearchBar/EditorialSubViews/All.vue')
            },
          },
          {
            path: 'entertainment',
            component: () => {
              return import( '../views/SearchBar/EditorialSubViews/Entertainment.vue')
            },
          },
          {
            path: 'news',
            component: () => {
              return import( '../views/SearchBar/EditorialSubViews/News.vue')
            },
          },
          {
            path: 'sports',
            component: () => {
              return import( '../views/SearchBar/EditorialSubViews/Sports.vue')
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
  path: '/login-singup',
    name: 'LoginView',
    component: LoginView,
    children: [
      {
        path: '',
        component: () => {
          return import( '../views/Login/LoginForm.vue')
        },
      },
      {
        path: 'signup',
        component: () => {
          return import( '../views/Login/SignUpForm.vue')
        },
      }
    ]
  },
  {
    path: '/shopping-cart-view',
      name: 'ShoppingCartView',
      component: ShoppingCartView ,
      children: [
        {
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
