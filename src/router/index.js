import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Reg from '@/components/Reg'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: 'login',
      name: 'Login',
      component: Login
    },
    {
      path: 'reg',
      name: 'Reg',
      component: Reg
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
