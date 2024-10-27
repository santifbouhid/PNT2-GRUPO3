import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


import { createRouter, createWebHistory } from 'vue-router';
const routes = [
    {
        path: '/',
        component: Login
    },
    {
        path: '/home',
        component: Home
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(),
})

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(createPinia())
.use(router)
.mount('#app')
