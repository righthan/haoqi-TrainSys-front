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
    <div>
      <el-button
        type="primary"
        @click="$router.push({ path: '/notice/editNotice/add' })"
        >新增培训通知</el-button
      >
    </div>
    <el-card>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="id" label="通知编号" width="180" />
        <el-table-column prop="courseid" label="课程编号" width="180" />
        <el-table-column prop="coursename" label="课程名称" width="180" />
        <el-table-column prop="content" label="内容" width="180">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              width="300"
              trigger="hover"
              :content="scope.row.content">
              <span slot="reference" class="info-wrapper">{{
                scope.row.content
              }}</span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column prop="date" label="发布日期" width="180">
          <template slot-scope="scope">{{
            scope.row.date.split("T")[0]
          }}</template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              type="text"
              @click="$router.push('/notice/editNotice/edit/' + scope.row.id)"
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
import { queryPage, deleteNotice } from "@/api/notice";

export default {
  name: "NoticeList",
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
      queryPage({ ...this.form, page, pageSize })
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

.info-wrapper {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...
}
</style>
