import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import './styles/style.scss'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'


const app = createApp(App)
app.use(store).use(router).mount('#app');
app.config.unwrapInjectedRef = true
