<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>
          {{ this.$route.params.type === "add" ? "新增" : "编辑" }}课程信息
        </h3>
      </div>
      <el-form
        class="form-wrapper"
        :model="formData"
        ref="form"
        :rules="rules"
        label-width="100px">
        <el-form-item prop="name" label="姓名">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item prop="phone" label="手机号">
          <el-input v-model="formData.phone"></el-input>
        </el-form-item>
        <el-form-item prop="email" label="电子邮箱">
          <el-input v-model="formData.email"></el-input>
        </el-form-item>
        <el-form-item prop="title" label="职称">
          <el-input v-model="formData.title"></el-input>
        </el-form-item>
        <el-form-item label="擅长方向">
          <el-input v-model="formData.skills" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">保存</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { add, update, queryDetail } from "@/api/teacher";

export default {
  name: "EditCourse",
  data() {
    return {
      pageType: "",
      formData: {
        id: null,
        name: "",
        phone: "",
        email: "",
        skills: "",
        title: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入姓名", trigger: "blur" },
          { min: 1, message: "长度至少为一个字符", trigger: "blur" },
        ],
        phone: [{ required: true, message: "请输入手机号", trigger: "blur" }],
        email: [{ required: true, message: "请输入电子邮箱", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          if (this.pageType === "add") {
            add({ ...this.formData })
              .then((res) => {
                if (res.success) {
                  this.$message({
                    message: "新增成功",
                    type: "success",
                  });
                  this.$router.back();
                } else {
                  throw new Error("新增失败");
                }
              })
              .catch((err) => {
                this.$message({
                  message: "新增失败",
                  type: "error",
                });
                console.log(err);
              });
          } else if (this.pageType === "edit") {
            update({ ...this.formData })
              .then((res) => {
                if (res.success) {
                  this.$message({
                    message: "更新成功",
                    type: "success",
                  });
                  this.$router.back();
                } else {
                  this.$message({
                    message: "更新失败",
                    type: "error",
                  });
                }
              })
              .catch((e) => {
                console.log(e);
              });
          }
        } else {
          this.$message.error("表单校验错误");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
    },
  },
  mounted() {
    const { type, id } = this.$route.params;
    this.pageType = type;
    if (type === "edit") {
      queryDetail({ id })
        .then((res) => {
          if (res.success) {
            this.formData = { ...res.data };
          }
        })
        .catch((e) => {
          console.log(e);
        });
    }
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  width: 50%;
}
</style>
