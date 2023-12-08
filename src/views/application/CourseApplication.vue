<template>
  <div class="container">
    <el-card class="card">
      <el-form
        v-show="!isShowResult"
        ref="Form"
        hide-required-asterisk
        :model="form"
        label-width="80px">
        <div class="title"><h2>浩奇公司课程培训开课申请</h2></div>
        <el-form-item label="课程名称" prop="coursename">
          <el-input v-model="form.coursename"></el-input>
        </el-form-item>
        <el-form-item label="公司名称" prop="companyname">
          <el-input v-model="form.companyname"></el-input>
        </el-form-item>
        <el-form-item label="办公电话" prop="phone">
          <el-input v-model="form.phone"></el-input>
        </el-form-item>
        <el-form-item label="公司地址" prop="position">
          <el-input v-model="form.position"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSubmit">提交</el-button>
        </el-form-item>
      </el-form>
      <el-result
        v-show="isShowResult"
        icon="success"
        title="成功提交"
        subTitle="请耐心等待审批">
      </el-result>
    </el-card>
  </div>
</template>

<script>
import { add } from "@/api/application";

export default {
  name: "CourseApplication",
  data() {
    return {
      form: {
        coursename: "",
        companyname: "",
        position: "",
        phone: "",
      },
      isShowResult: false,
    };
  },
  methods: {
    handleSubmit() {
      this.$refs["Form"].validate((valid) => {
        if (valid) {
          add(this.form).then((res) => {
            if (res.code === 20000) {
              this.isShowResult = true;
            } else {
              this.$message({
                message: "提交失败",
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
.container {
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
.card {
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
