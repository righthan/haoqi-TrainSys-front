<template>
  <div class="main-layout">
    <el-card class="box-card">
      <el-form ref="form" :model="form" inline label-width="80px">
        <el-form-item label="课程名称">
          <el-input v-model="form.courseName"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="handleSearch(1, pagination.pageSize)"
            >查询</el-button
          >
        </el-form-item>
      </el-form>
    </el-card>
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="课程编号" width="180" />
        <el-table-column prop="name" label="课程名称" width="180" />
        <el-table-column prop="evaluated" label="评价状态" width="180">
          <template slot-scope="scope">
            <el-tag v-if="scope.row.evaluated === 1" type="success"
              >已开放</el-tag
            >
            <el-tag v-if="scope.row.evaluated === 0" type="danger"
              >未开放</el-tag
            ></template
          >
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleOpenEvaluate(scope.row.id)"
              >开放评价</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        style="margin-top: 1em"
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="pagination.current"
        :page-sizes="pagination.pageSizes"
        :page-size="pagination.pageSize"
        layout="total, sizes, prev, pager, next"
        :total="pagination.total">
      </el-pagination>
    </el-card>
  </div>
</template>

<script>
import { queryCourse, changeEvaluateState } from "@/api/course";

export default {
  name: "Course",
  data() {
    return {
      form: {
        courseName: "",
      },
      tableData: [],
      pagination: {
        pageSizes: [5, 10, 20, 50],
        current: 1,
        pageSize: 5,
        total: 0,
      },
    };
  },
  methods: {
    handleSearch(_page, _pageSize) {
      const page = _page ?? this.pagination.current;
      const pageSize = _pageSize ?? this.pagination.pageSize;
      queryCourse({ ...this.form, page, pageSize })
        .then((res) => {
          if (res.success) {
            this.tableData = [...res.data.records];
            this.pagination.total = res.data.total;
          } else {
            throw new Error(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    handleSizeChange(size) {
      this.handleSearch(this.pagination.current, size);
    },
    handleCurrentChange(current) {
      this.handleSearch(current, this.pagination.size);
    },
    handleOpenEvaluate(id) {
      changeEvaluateState({ courseId: id, status: 1 })
        .then((res) => {
          if (res.success) {
            this.$message({
              message: "操作成功",
              type: "success",
            });
            this.handleSearch();
          } else {
            throw new Error("操作失败");
          }
        })
        .catch((e) => {
          this.$message({
            message: "操作失败",
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
