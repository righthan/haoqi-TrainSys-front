<template>
  <div>
    <el-menu
      background-color="#514a71"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="getPath"
      router
      unique-opened>
      <el-menu-item index="course">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">培训课程管理</span>
      </el-menu-item>
      <el-menu-item index="studentManage">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="selectManage">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>选课管理</span>
        </template>
      </el-menu-item>
      <el-menu-item index="sign">
        <template slot="title">
          <i class="el-icon-user"></i>
          <span>学员签到</span>
        </template>
      </el-menu-item>
      <el-menu-item index="teacherManage">
        <i class="el-icon-menu"></i>
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="questionnairManage">
        <i class="el-icon-menu"></i>
        <span slot="title">培训课程调查管理</span>
      </el-menu-item>
      <el-menu-item index="noticeManage">
        <i class="el-icon-menu"></i>
        <span slot="title">培训通知管理</span>
      </el-menu-item>
      <el-menu-item index="applicationManage">
        <i class="el-icon-menu"></i>
        <span slot="title">培训申请管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "Aside",
  computed: {
    getPath() {
      return this.$route.path.split("/")[1];
    },
  },
};
</script>

<style scoped></style>
