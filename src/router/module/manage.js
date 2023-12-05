// 管理模块的路由
const manageRouter = [
  {
    path: '/course',
    name: 'course',
    component: () => import('@/views/course/index.vue'),
  },
  {
    props: true,
    path: 'editCourse/:type/:id?',
    component: () => import('@/views/course/EditCourse.vue'),
    name: 'editCourse',
    meta: { title: '编辑课程信息' }
  },
  {
    path: 'studentManage',
    component: () => import('@/views/student/index.vue'),
    name: 'studentManage',
    meta: { title: '学员管理' }
  }
]

export default manageRouter