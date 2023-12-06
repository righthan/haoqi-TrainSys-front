<template>
  <div>
    <el-card>
      <div slot="header" class="clearfix">
        <h3>学员签到</h3>
      </div>
      <el-form
        class="form-wrapper"
        :model="formData"
        ref="form"
        label-width="100px">
        <el-form-item prop="studentid" label="学号">
          <el-input v-model="formData.studentid"></el-input>
        </el-form-item>
        <el-form-item prop="courseid" label="课程编号">
          <div style="display: flex; gap: 1em">
            <el-input v-model="formData.courseid"></el-input>
            <el-button type="primary" @click="handleQueryInfo">查询</el-button>
          </div>
        </el-form-item>
        <el-form-item prop="paid" label="是否缴费">
          <el-radio v-model="formData.paid" :label="1">是</el-radio>
          <el-radio v-model="formData.paid" :label="0">否</el-radio>
        </el-form-item>
        <el-form-item prop="signed" label="是否签到">
          <el-radio v-model="formData.signed" :label="1">是</el-radio>
          <el-radio v-model="formData.signed" :label="0">否</el-radio>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">保存</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-descriptions
        title="报名信息"
        :column="3"
        border
        :labelStyle="{ width: '100px' }">
        <el-descriptions-item label="学号" :span="3">{{
          data.studentid
        }}</el-descriptions-item>
        <el-descriptions-item label="姓名" :span="3">{{
          data.studentName
        }}</el-descriptions-item>
        <el-descriptions-item label="课程编号" :span="3">{{
          data.courseid
        }}</el-descriptions-item>
        <el-descriptions-item label="课程名称" :span="3">{{
          data.courseName
        }}</el-descriptions-item>
        <el-descriptions-item label="学费" :span="3">{{
          data.price + " 元"
        }}</el-descriptions-item>
      </el-descriptions>
    </el-card>
  </div>
</template>

<script>
import { update, queryDetail, queryById } from "@/api/sign";
import { faTextHeight } from "@fortawesome/free-solid-svg-icons";

export default {
  name: "StudentSign",
  data() {
    return {
      formData: {
        id: null,
        courseid: "",
        courseName: "",
        studentName: "",
        paid: 0,
        evaluated: 0,
        signed: 0,
      },
      data: {},
    };
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          update({ ...this.formData })
            .then((res) => {
              if (res.success) {
                this.$message({
                  message: "签到成功",
                  type: "success",
                });
              } else {
                this.$message({
                  message: "签到失败",
                  type: "error",
                });
              }
            })
            .catch((e) => {
              this.$message({
                message: "签到失败, 请检查信息",
                type: "error",
              });
              console.log(e);
            });
        } else {
          this.$message.error("表单校验错误");
          return false;
        }
      });
    },
    resetForm() {
      this.$refs.form.resetFields();
      this.data = {
        studentid: "",
        studentName: "",
        courseid: "",
        courseName: "",
      };
    },
    handleQueryInfo() {
      const { studentid: studentId, courseid: courseId } = this.formData;
      if (!studentId && !courseId) return;
      queryById({ studentId, courseId })
        .then((res) => {
          if (res.success) {
            this.formData = { ...res.data };
            this.data = { ...res.data };
          } else {
            this.$message.error("信息错误");
          }
        })
        .catch((e) => {
          this.$message.error("网络出现小问题");
          console.log(e);
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
            console.log(this.formData);
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
