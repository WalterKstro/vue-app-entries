import { createRouter, createWebHistory } from 'vue-router'
import dayBookRoute from '../modules/daybook/router/index.js'
import authRoute from '../modules/auth/router/index.js'
import guard from '../modules/auth/guard/index.js'

const routes = [
    {
        path: '/auth',
        ...authRoute,
    },
    {
        path: '/daybook',
        beforeEnter: [ guard ],
        ...dayBookRoute,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router