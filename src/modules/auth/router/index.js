export default {
    name: 'auth',
    component: () => import('../../../modules/auth/views/Authentication.vue'),
    children: [
        {
            name: 'login',
            path: '',
            component: () => import('../../../modules/auth/views/Login.vue'),
        },
        {
            name: 'register',
            path: 'register',
            component: () => import('../../../modules/auth/views/Register.vue'),
        }
    ]
}