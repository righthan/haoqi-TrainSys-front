import Vue from 'vue'
import VueRouter from 'vue-router'
import manageRouter from './module/manage';
import { decryptData } from '@/utils/crypto';

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
    path: '/home',
    name: 'home',
    component: () => import('../views/home/Home.vue')
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

const whiteList = ['/home', '/login', '/studentLogin']
// 路由守卫
router.beforeEach((to, from, next) => {
  // 放行 student/login 和 executor/login 路由
  if (whiteList.includes(to.path)) {
    next();
  } else {
    const data = decryptData()
    if (![0, 1, 2, 3].includes(data?.role)) {
      next('/home')
    }
  }
  next()
});

export default router
