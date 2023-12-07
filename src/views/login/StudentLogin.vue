<template>
  <div class="login-container">
    <el-card class="login-card">
      <el-form
        ref="loginForm"
        hide-required-asterisk
        :model="loginData"
        :rules="rules"
        label-width="80px">
        <div class="title"><h2>欢迎使用浩奇培训信息管理系统</h2></div>
        <el-form-item label="学号" prop="id">
          <el-input v-model="loginData.id"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="loginData.password"></el-input>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="handleLogin">登录</el-button>
    </el-card>
  </div>
</template>

<script>
import { login } from "@/api/user";

export default {
  name: "StudentLogin",
  data() {
    return {
      loginData: {
        id: "",
        password: "",
      },
      rules: {
        username: [{ required: true, message: "请输入学号", trigger: "blur" }],
        password: [{ required: true, message: "请输入密码", trigger: "blur" }],
      },
    };
  },
  methods: {
    handleLogin() {
      this.$refs["loginForm"].validate((valid) => {
        if (valid) {
          login(this.loginData).then((res) => {
            if (res.code === 20000) {
              this.$router.push("/");
            } else {
              this.$message({
                message: "用户名或密码错误",
                offset: 100,
                type: "error",
                center: true,
              });
            }
          });
        } else {
          return false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.login-container {
  background-image: url("@/assets/background.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  margin: 22px;
  padding-left: 70px;
}
.login-card {
  width: 500px;
  padding-right: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  .el-button {
    display: block;
    margin: 0 auto;
    width: 50%;
    margin-left: 35%;
  }
}
</style>
