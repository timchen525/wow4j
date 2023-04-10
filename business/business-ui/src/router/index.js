import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Manager from "../views/Manager";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Manager,
    redirect: '/home',
    children: [
      {
        path: '/home', name: '首页', component: () => import('../views/HomeView.vue')
      },
      {
        path: '/user', name: '用户管理', component: () => import('../views/UserView.vue')
      },
      {
        path: '/person', name: '个人信息', component: () => import('../views/PersonView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
