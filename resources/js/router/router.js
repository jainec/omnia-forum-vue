import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: MainHome },
    { path: '/login', component: Login },
    { path: '/home', component: MainHome, name: 'home' },
    { path: '/question', component: MainQuestion },
    { path: '/profile', component: MainProfile },
    { path: '/signup', component: Signup },
    { path: '/logout', component: Logout },
]

import Login from '../components/login/Login'
import MainHome from '../components/home/MainHome'
import MainQuestion from '../components/question/MainQuestion'
import MainProfile from '../components/profile/MainProfile'
import Signup from '../components/login/Signup'
import Logout from '../components/login/Logout'

const router = new VueRouter({
    routes, // short for `routes: routes`
    mode: 'history'
})

export default router