<!-- 头像 -->
<template>
  <el-dropdown>
    <el-avatar :size="40" :src="circleUrl"></el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="logout">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
export default {
  name: "Avatar",
  data() {
    return {
      circleUrl:
        "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
    };
  },
  methods: {
    logout() {
      this.$router.push("/login");
    },
  },
};
</script>

<style></style>
