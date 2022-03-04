import {createRouter, createWebHistory} from 'vue-router'
import dayBookRoute from '../modules/daybook/router/index.js'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: () => import('../modules/auth/pages/Home.vue'), 
  },
  { 
    path: '/daybook',
    ...dayBookRoute,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router