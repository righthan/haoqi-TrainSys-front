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
    path: '/studentManage',
    component: () => import('@/views/student/index.vue'),
    name: 'studentManage',
    meta: { title: '学员管理' }
  },
  {
    path: '/teacherManage',
    component: () => import('@/views/teacher/index.vue'),
    name: 'teacherManage',
    meta: { title: '讲师管理' }
  },
  {
    path: '/editTeacher/:type/:id?',
    component: () => import('@/views/teacher/EditTeacher.vue'),
    name: 'editTeacher',
    meta: { title: '编辑讲师信息' }
  },
  {
    path: '/applicationManage',
    component: () => import('@/views/application/index.vue'),
    name: 'applicationManage',
    meta: { title: '培训申请管理' }
  },
  {
    path: '/selectManage',
    component: () => import('@/views/sign/index.vue'),
    name: 'selectManage',
    meta: { title: '选课管理' }
  },
  {
    path: '/editSign/:type/:id?',
    component: () => import('@/views/sign/EditSign.vue'),
    name: 'editSign',
    meta: { title: '选课信息编辑' }
  }
]

export default manageRouter