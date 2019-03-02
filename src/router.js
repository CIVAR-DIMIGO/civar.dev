import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '@/pages/Index'
import Info from '@/pages/Info'
import Members from '@/pages/Members'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/info',
      name: 'info',
      component: Info
    },
    {
      path: '/members',
      name: 'members',
      component: Members
    }
  ]
})
