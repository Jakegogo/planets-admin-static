import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import Login from './Login'
import Dashboard from './modules/Dashboard'


Vue.use(VueRouter)

// 字体图标
require('font-awesome-webpack');

const routes = [
    { path: '/login', component: Login, name: 'Login' },
    { path: '/app', component: App, name: 'App', children: [
        {name: 'dashboard', path: '/dashboard', component: Dashboard},
        {path: '*', redirect: '/dashboard' }
    ]},
    { path: '*', redirect: { name: 'Login' } }
]

const router = new VueRouter({
    routes // （缩写）相当于 routes: routes
})

new Vue({
    router
}).$mount('#app')
