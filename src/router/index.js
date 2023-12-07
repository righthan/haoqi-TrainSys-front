import Vue from 'vue'
import VueRouter from 'vue-router'
import manageRouter from './module/manage';

Vue.use(VueRouter)
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


const routes = [
  {
    path: '/',
    name: 'managementHome',
    component: () => import('@/layout/management/ManagementHomeView.vue'),
    children: manageRouter
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/Login.vue')
  },
  {
    path: '/studentLogin',
    name: 'studentLogin',
    component: () => import('../views/login/StudentLogin.vue')
  },
  {
    path: '/courseApplication',
    name: 'courseApplication',
    component: () => import('../views/application/CourseApplication.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
