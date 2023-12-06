<template>
  <div class="main-layout">
    <el-card class="box-card">
      <el-form ref="form" :model="form" inline label-width="80px">
        <el-form-item label="学员姓名">
          <el-input v-model="form.name"></el-input>
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
    <div>
      <el-button
        type="primary"
        @click="$router.push({ path: '/editStudent/add' })"
        >新增学员</el-button
      >
    </div>
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="学号" width="180" />
        <el-table-column prop="name" label="姓名" width="180" />
        <el-table-column prop="company" label="所在公司" width="180" />
        <el-table-column prop="phone" label="手机号" width="180" />
        <el-table-column prop="email" label="电子邮箱" width="180" />
        <el-table-column prop="position" label="联系地址" width="180" />
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="$router.push('/editStudent/edit/' + scope.row.id)"
              >编辑</el-button
            >
            <el-button type="text" @click="handleDelete(scope.row.id)"
              >删除</el-button
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
import { query, deleteStudent } from "@/api/student";

export default {
  name: "StudentManage",
  data() {
    return {
      form: {
        name: "",
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
      query({ ...this.form, page, pageSize })
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
    handleDelete(id) {
      deleteStudent({ id })
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
