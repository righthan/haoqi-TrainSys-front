<!-- 头像 -->
<template>
  <el-dropdown>
    <el-avatar :size="40" :src="circleUrl"></el-avatar>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item>
          <el-button type="text" @click="logout">退出登录</el-button>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script>
import { decryptData } from "@/utils/crypto";

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
      const data = decryptData();
      if (data?.role > 0) {
        this.$router.push("/login");
        localStorage.clear();
      } else {
        this.$router.push("/home");
        localStorage.clear();
      }
    },
  },
};
</script>

<style></style>
