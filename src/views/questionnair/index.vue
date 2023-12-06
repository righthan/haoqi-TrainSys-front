<template>
  <div class="main-layout">
    <el-card class="box-card">
      <el-form ref="form" :model="form" inline label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="courseid" label="课程编号" />
        <el-table-column prop="coursename" label="课程名称" />
        <el-table-column prop="studentid" label="学号" />
        <el-table-column prop="studentname" label="姓名"> </el-table-column>
        <el-table-column prop="rating" label="评分">
          <template slot-scope="scope">
            <el-rate
              v-model="scope.row.rating"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}">
            </el-rate>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleDelete(scope.row.id)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<script>
import { query, deleteQustionnair } from "@/api/questionnair";

export default {
  name: "Course",
  data() {
    return {
      form: {
        courseName: "",
      },
      tableData: [],
    };
  },
  methods: {
    handleSearch() {
      query({ ...this.form })
        .then((res) => {
          if (res.success) {
            this.tableData = [...res.data];
            console.log(this.tableData);
          } else {
            throw new Error(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(id) {
      deleteCourse({ id })
        .then((res) => {
          if (res.success) {
            this.$message({
              message: "删除成功",
              type: "success",
            });
            this.handleSearch();
          } else {
            throw new Error("删除失败");
          }
        })
        .catch((e) => {
          this.$message({
            message: "删除失败",
            type: "error",
          });
          console.log(e);
        });
    },
  },
  mounted() {
    this.handleSearch();
  },
};
</script>

<style lang="scss" scoped>
.main-layout {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
