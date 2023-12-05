<template>
  <div class="header">
    <div class="header-left">
      <div class="logo">
        <img src="@/assets/logo.svg" alt="浩奇培训信息管理系统" width="40px" />
      </div>
      <h1 class="title">浩奇培训信息管理系统</h1>
    </div>
    <div class="avatar">
      <UserAvatar />
    </div>
  </div>
</template>

<script>
import UserAvatar from "@/components/common/UserAvatar/Avatar.vue";

export default {
  name: "Header",
  components: {
    UserAvatar,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.header-left {
  display: flex;
  align-items: center;
}
.logo {
  margin-top: 10px;
  margin-right: 20px;
}
</style>
