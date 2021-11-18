import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/Home/Home.vue'
import Login from '../views/Login/Login.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: {
        requiresAuth: true
      }
    }, 
    {
      path: '*',
      redirect: '/home'
    },
  ]
});

export default router
