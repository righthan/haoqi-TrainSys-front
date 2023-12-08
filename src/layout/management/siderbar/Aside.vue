<template>
  <div>
    <el-menu
      background-color="#60b0f7"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="getPath"
      router
      unique-opened>
      <el-menu-item index="dashboard" v-if="authCheckInclude(['manager'])">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">统计数据</span>
      </el-menu-item>
      <el-menu-item
        index="course"
        v-if="authCheckExclude(['worker', 'student'])">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">培训课程管理</span>
      </el-menu-item>
      <el-menu-item
        index="studentManage"
        v-if="authCheckExclude(['worker', 'student'])">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员管理</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="selectManage"
        v-if="authCheckExclude(['worker', 'student'])">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>选课管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="selectCourse" v-if="authCheckInclude(['student'])">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>课程报名</span>
        </template>
      </el-menu-item>
      <el-menu-item index="evaluateCourse" v-if="authCheckInclude(['student'])">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>课程评价</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="sign"
        v-if="authCheckExclude(['student', 'executor'])">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员签到</span>
        </template>
      </el-menu-item>
      <el-menu-item
        index="teacherManage"
        v-if="authCheckInclude(['manager', 'executor'])">
        <i class="el-icon-menu"></i>
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-submenu
        index="evaluateManage"
        v-if="authCheckInclude(['manager', 'worker'])">
        <template slot="title"><i class="el-icon-menu"></i>课程调查</template>
        <el-menu-item index="evaluateCourseManage">课程调查管理</el-menu-item>
        <el-menu-item index="questionnairManage">课程评价查看</el-menu-item>
      </el-submenu>
      <el-menu-item
        index="noticeManage"
        v-if="authCheckInclude(['manager', 'executor'])">
        <i class="el-icon-menu"></i>
        <span slot="title">培训通知管理</span>
      </el-menu-item>
      <el-menu-item
        index="applicationManage"
        v-if="authCheckInclude(['manager'])">
        <i class="el-icon-menu"></i>
        <span slot="title">培训申请管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { authExclude, authInclude } from "@/utils/authcheck";

export default {
  name: "Aside",
  data() {
    return {};
  },
  methods: {
    authCheckExclude(roleList) {
      return authExclude(roleList);
    },
    authCheckInclude(roleList) {
      return authInclude(roleList);
    },
  },
  computed: {
    getPath() {
      return this.$route.path.split("/")[1];
    },
  },
  created() {},
};
</script>

<style scoped>
[class^="el-icon-"] {
  color: white;
}
</style>
