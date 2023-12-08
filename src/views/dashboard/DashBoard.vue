<template>
  <div class="container">
    <el-row :gutter="20">
      <!-- <el-col :span="6">
      <div>
        <el-statistic title="公司总数">
          <template slot="formatter">
            {{ data.CompanyNum ?? "无法获取" }}
          </template>
        </el-statistic>
      </div>
    </el-col> -->
      <el-col :span="6">
        <el-card>
          <el-statistic
            group-separator=","
            decimal-separator="."
            title="总收入">
            <template slot="formatter">
              {{ data.TotalMoney ?? "无法获取" }}
            </template>
          </el-statistic>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-statistic title="课程数量">
            <template slot="formatter">
              {{ data.CourseNum ?? "无法获取" }}
            </template>
          </el-statistic>
        </el-card>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card>
          <el-statistic title="讲师数量">
            <template slot="formatter">
              {{ data.TeacherNum ?? "无法获取" }}
            </template>
          </el-statistic>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <el-statistic title="学员数量">
            <template slot="formatter">
              {{ data.StudentNum ?? "无法获取" }}
            </template>
          </el-statistic>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { query } from "@/api/dashboard";

export default {
  data() {
    return {
      data: {
        CompanyNum: "",
        StudentNum: "",
        TeacherNum: "",
        TotalMoney: "",
        CourseNum: "",
      },
    };
  },
  methods: {},
  mounted() {
    query()
      .then((res) => {
        if (res.success) {
          this.data = { ...res.data };
        } else {
          throw new Error("无法获取数据");
        }
      })
      .catch((e) => {
        this.$message.error("无法获取数据");
        console.log(e);
      });
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
