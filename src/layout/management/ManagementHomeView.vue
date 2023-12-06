<template>
  <div>
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <Aside />
        </el-aside>
        <el-main style="overflow-y: visibility: hidden;"
          ><router-view
        /></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Header from "./header/Header.vue";
import Aside from "./siderbar/Aside.vue";

export default {
  name: "ManagementHomeView",
  components: {
    Header,
    Aside,
  },
};
</script>

<style scoped>
.el-container {
  height: 100vh;
}
.el-header {
  background-color: #60b0f7;
  color: white;
}
.el-aside {
  background-color: #60b0f7;
  /* height: 100vh; */
  overflow-y: hidden;
}

:deep(.el-main) {
  overflow: auto;
  scrollbar-width: thin; /* 定义滚动条的宽度 */
  scrollbar-color: transparent transparent; /* 定义滚动条的颜色 */
}

/* 隐藏滚动条 */
:deep(.el-main::-webkit-scrollbar) {
  width: 8px; /* 定义滚动条宽度 */
  height: 8px;
  background-color: transparent; /* 滚动条背景颜色 */
}

:deep(.el-main::-webkit-scrollbar-thumb) {
  background-color: transparent; /* 滚动条滑块颜色 */
  border-radius: 4px; /* 滚动条滑块圆角 */
}

:deep(.el-main::-webkit-scrollbar-thumb:hover) {
  background-color: rgba(0, 0, 0, 0.2); /* 鼠标悬停时滚动条滑块颜色 */
}
</style>
