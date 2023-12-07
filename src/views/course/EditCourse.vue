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
        <el-form-item label="课程编号" v-if="$route.params.type === 'edit'">
          <el-input disabled v-model="formData.id"></el-input>
        </el-form-item>
        <el-form-item prop="name" label="课程名称">
          <el-input v-model="formData.name"></el-input>
        </el-form-item>
        <el-form-item label="课程描述信息">
          <el-input v-model="formData.courseinfo" type="textarea"></el-input>
        </el-form-item>
        <el-form-item prop="price" label="价格">
          <el-input v-model="formData.price"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="上课时间">
          <el-date-picker
            v-model="formData.date"
            type="date"
            placeholder="选择日期">
          </el-date-picker>
        </el-form-item>
        <el-form-item prop="position" label="上课地点">
          <el-input v-model="formData.position"></el-input>
        </el-form-item>
        <el-form-item prop="teacherid" label="课程讲师">
          <!-- <el-select v-model="value" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select> -->
          <el-input v-model="formData.teacherid"></el-input>
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
import { addCourse, queryDetail, update } from "@/api/course";

export default {
  name: "EditCourse",
  data() {
    return {
      pageType: "",
      formData: {
        id: null,
        name: "",
        date: "",
        courseinfo: "",
        position: "",
        price: "",
        teacherid: "",
      },
      rules: {
        name: [
          { required: true, message: "请输入课程名称", trigger: "blur" },
          { min: 1, message: "长度至少为一个字符", trigger: "blur" },
        ],
        price: [{ required: true, message: "请输入价格", trigger: "blur" }],
        position: [
          { required: true, message: "请输入上课地点", trigger: "blur" },
        ],
        date: [{ required: true, message: "请选择上课时间", trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs["form"].validate((valid) => {
        if (valid) {
          console.log(this.formData);
          if (this.pageType === "add") {
            addCourse({ ...this.formData })
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
    console.log("mounted");
    if (type === "edit") {
      console.log("query");
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
