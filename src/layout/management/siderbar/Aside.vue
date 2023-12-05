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
      <el-menu-item index="teacherManage">
        <i class="el-icon-menu"></i>
        <span slot="title">讲师管理</span>
      </el-menu-item>
      <el-menu-item index="surveyManage">
        <i class="el-icon-menu"></i>
        <span slot="title">培训课程调查管理</span>
      </el-menu-item>
      <el-menu-item index="noticeManage">
        <i class="el-icon-menu"></i>
        <span slot="title">培训通知管理</span>
      </el-menu-item>
      <el-submenu index="4">
        <template slot="title">
          <i class="el-icon-files"></i>
          <span>借阅管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addBorrowInfo">添加借阅记录</el-menu-item>
          <el-menu-item index="borrowManage">借阅记录管理</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="5">
        <template slot="title">
          <i class="el-icon-notebook-2"></i>
          <span>书籍管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addBook">图书录入</el-menu-item>
          <el-menu-item index="modifyBookInfo">图书信息修改</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="showRecommend">
        <i class="el-icon-chat-line-round"></i>
        <span slot="title">查看采购推荐</span>
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
