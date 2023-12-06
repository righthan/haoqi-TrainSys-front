// 管理模块的路由
const manageRouter = [
  {
    path: '/course',
    name: 'course',
    component: () => import('@/views/course/List.vue'),
  },
  {
    props: true,
    path: '/course/editCourse/:type/:id?',
    component: () => import('@/views/course/EditCourse.vue'),
    name: 'editCourse',
    meta: { title: '编辑课程信息' }
  },
  {
    path: '/studentManage',
    component: () => import('@/views/student/List.vue'),
    name: 'studentManage',
    meta: { title: '学员管理' }
  },
  {
    path: '/selectCourse',
    component: () => import('@/views/course/CourseSelect.vue'),
    name: 'selectCourse',
    meta: { title: '课程报名' }
  },
  {
    path: '/evaluateCourse',
    component: () => import('@/views/course/CourseEvaluated.vue'),
    name: 'evaluateCourse',
    meta: { title: '课程评价' }
  },
  {
    path: '/evaluateCourseManage',
    component: () => import('@/views/questionnair/CourseEvaluatedManage.vue'),
    name: 'evaluateCourseManage',
    meta: { title: '课程评价管理' }
  },
  {
    path: '/studentManage/editStudent/:type/:id?',
    component: () => import('@/views/student/EditStudent.vue'),
    name: 'editStudent',
    meta: { title: '编辑学生信息' }
  },
  {
    path: '/teacherManage',
    component: () => import('@/views/teacher/List.vue'),
    name: 'teacherManage',
    meta: { title: '讲师管理' }
  },
  {
    path: '/teacherManage/editTeacher/:type/:id?',
    component: () => import('@/views/teacher/EditTeacher.vue'),
    name: 'editTeacher',
    meta: { title: '编辑讲师信息' }
  },
  {
    path: '/applicationManage',
    component: () => import('@/views/application/List.vue'),
    name: 'applicationManage',
    meta: { title: '培训申请管理' }
  },
  {
    path: '/selectManage',
    component: () => import('@/views/sign/List.vue'),
    name: 'selectManage',
    meta: { title: '选课管理' }
  },
  {
    path: '/selectManage/editSign/:type/:id?',
    component: () => import('@/views/sign/EditSign.vue'),
    name: 'editSign',
    meta: { title: '选课信息编辑' }
  },
  {
    path: '/sign',
    component: () => import('@/views/sign/StudentSign.vue'),
    name: 'stuSign',
    meta: { title: '学员签到' }

  },
  {
    path: '/questionnairManage',
    component: () => import('@/views/questionnair/List.vue'),
    name: 'questionnairManage',
    meta: { title: '课程评价管理' }
  }
]

export default manageRouter