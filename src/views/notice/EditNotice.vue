<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>{{ this.$route.params.type === "add" ? "新增" : "编辑" }}通知</h3>
      </div>
      <el-form
        class="form-wrapper"
        :model="formData"
        ref="form"
        label-width="100px">
        <el-form-item prop="courseid" label="课程编号">
          <el-input v-model="formData.courseid"></el-input>
        </el-form-item>
        <template v-if="this.$route.params.type === 'edit'">
          <el-form-item prop="coursename" label="课程名称">
            <el-input disabled v-model="formData.coursename"></el-input>
          </el-form-item>
        </template>
        <el-form-item prop="content" label="通知内容">
          <el-input v-model="formData.content" type="textarea"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import { add, update, queryDetail } from "@/api/notice";

export default {
  name: "EditNotice",
  data() {
    return {
      pageType: "",
      formData: {
        courseid: "",
        content: "",
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
