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
        <el-table-column prop="id" label="课程编号" width="80px" />
        <el-table-column prop="name" label="课程名称" />
        <el-table-column prop="date" label="日期" width="120px">
          <template slot-scope="scope">{{
            scope.row.date.split("T")[0]
          }}</template>
        </el-table-column>
        <el-table-column prop="position" label="上课地点" />
        <el-table-column prop="price" label="课程价格 ( 元 )" width="120px" />
        <el-table-column prop="teacherName" label="课程教师" />
        <el-table-column prop="courseinfo" label="课程描述信息">
          <template slot-scope="scope">
            <el-popover
              placement="top-start"
              width="300"
              trigger="hover"
              :content="scope.row.courseinfo">
              <span slot="reference" class="info-wrapper">{{
                scope.row.courseinfo
              }}</span>
            </el-popover>
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="text" @click="handleSelectCourse(scope.row.id)"
              >报名</el-button
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
import { queryCourse } from "@/api/course";
import { add as addSign } from "@/api/sign";

export default {
  name: "CourseSelect",
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
    handleSelectCourse(courseid) {
      addSign({ studentid: 25, courseid })
        .then((res) => {
          if (res.success) {
            this.$message.success("报名成功");
          } else {
            this.$message.error("已报名过该课程");
          }
        })
        .catch((e) => {
          this.$message.error("网络出现问题");
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
