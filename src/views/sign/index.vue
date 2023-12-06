<template>
  <div class="main-layout">
    <el-card class="box-card">
      <el-form ref="form" :model="form" inline label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="handleSearch()">查询</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <div>
      <el-button type="primary" @click="$router.push({ path: '/editSign/add' })"
        >添加选课记录</el-button
      >
    </div>
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="studentid" label="学号" width="180" />
        <el-table-column prop="studentName" label="姓名" width="180" />
        <el-table-column prop="courseName" label="课程名称" width="180" />
        <el-table-column prop="signed" label="是否签到" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.signed === 1" type="success">已签到</el-tag>
            <el-tag v-if="scope.row.signed === 0" type="danger">未签到</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="paid" label="是否缴费" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.paid === 1" type="success">已缴费</el-tag>
            <el-tag v-if="scope.row.paid === 0" type="danger">未缴费</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="evaluated" label="是否完成课程评价" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.evaluated === 1" type="success"
              >已评价</el-tag
            >
            <el-tag v-if="scope.row.evaluated === 0" type="danger"
              >未评价</el-tag
            >
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="$router.push('/editSign/edit/' + scope.row.id)"
              >编辑</el-button
            >
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
import { query, deleteSign } from "@/api/sign";

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
          } else {
            throw new Error(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleDelete(id) {
      deleteSign({ id })
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
