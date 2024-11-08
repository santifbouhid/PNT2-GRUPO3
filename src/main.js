import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './style.css'
// BOOTSTRAP //
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
// FONT AWESOME //
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// ROUTER //
import { createRouter, createWebHistory } from 'vue-router';
// COMPONENTES //
import App from './App.vue'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
import Perfil from './components/Perfil.vue'
import RecipeDetail from './components/RecipeDetail.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/recipe/detail/:id',
        component: RecipeDetail
    },
    {
        path: '/perfil',
        component: Perfil
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
