import { createRouter, createWebHistory } from 'vue-router'
import Home  from '../views/SearchBar/Home.vue'
import SearchBarView from '../views/SearchBarView.vue'
import LoginView from '../views/LoginView.vue'
import ShoppingCartView from '../views/ShoppingCartView.vue'
import messages from '../store/constants/messages.js' 
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
        path: messages.pages.mainMenu.page0.link,
        component: () => import('../views/SearchBar/' + messages.pages.mainMenu.page0.view + '.vue') //Prepravi
      },
      {
        path: messages.pages.mainMenu.page1.link,
        component: () => import( '../views/SearchBar/' + messages.pages.mainMenu.page1.view + '.vue'),
      },
      {
        path: messages.pages.mainMenu.page2.link,
        component: () => import('../views/SearchBar/' + messages.pages.mainMenu.page2.view + '.vue')
      },
      {
        path: messages.pages.mainMenu.page3.link,
        component: () => import('../views/SearchBar/' + messages.pages.mainMenu.page3.view + '.vue')
      },
      {
        path: messages.pages.mainMenu.page4.link,
        component: () => import('../views/SearchBar/' + messages.pages.mainMenu.page4.view + '.vue')
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
